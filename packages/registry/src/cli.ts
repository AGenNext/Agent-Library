import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';

const schemaPath = path.resolve('schemas/agent.schema.json');
const agentsRoot = path.resolve('agents');

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
const ajv = new Ajv();
const validate = ajv.compile(schema);

function walk(dir: string, files: string[] = []) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath, files);
    } else if (entry === 'agent.json') {
      files.push(fullPath);
    }
  }

  return files;
}

function validateAgents() {
  const manifests = walk(agentsRoot);

  let hasErrors = false;

  for (const manifestPath of manifests) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    const valid = validate(manifest);

    if (!valid) {
      hasErrors = true;
      console.error(`❌ Invalid manifest: ${manifestPath}`);
      console.error(validate.errors);
    } else {
      console.log(`✅ ${manifest.id}`);
    }
  }

  if (hasErrors) {
    process.exit(1);
  }
}

validateAgents();
