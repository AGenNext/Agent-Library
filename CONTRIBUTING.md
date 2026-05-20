# Contributing to Agent Library

## Goal

The Agent Library is the canonical registry for reusable agents in the AgenNext ecosystem.

## Contribution checklist

Every contribution should include:

- An `agent.json` manifest.
- Capability definitions.
- Runtime metadata.
- Ownership details.
- Usage examples.
- Safety considerations.

## Folder structure

```text
agents/<domain>/<agent-name>/agent.json
```

## Validation

Run locally:

```bash
npm install
npm run build
npm run validate
```

## Lifecycle states

- experimental
- beta
- stable
- deprecated

## Review criteria

Agents are reviewed for:

- manifest completeness
- interoperability
- security
- observability
- documentation quality
- ecosystem alignment
