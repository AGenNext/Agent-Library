# Agent Library

Agent Library is the platform layer for the AgenNext Agent Ecosystem. It provides a structured catalogue of reusable agents, a lightweight registry API, shared agent contracts, and contribution guidelines so ecosystem teams can publish, discover, evaluate, and integrate agents consistently.

## Platform goals

- Provide a canonical registry for AgenNext-compatible agents.
- Standardize agent metadata, capabilities, lifecycle status, and integration contracts.
- Support discovery by domain, capability, runtime, model provider, and maturity.
- Enable safe contribution, review, testing, and versioning of ecosystem agents.
- Keep the platform simple enough to run locally while leaving room for future hosted services.

## Repository layout

```text
.
├── agents/                  # Agent manifests grouped by domain
├── docs/                    # Platform documentation and architecture notes
├── packages/
│   └── registry/            # TypeScript registry library and CLI
├── schemas/                 # JSON Schemas for agent manifests
├── examples/                # Example agents and ecosystem usage
├── .github/workflows/       # CI validation
└── README.md
```

## Agent manifest

Every agent is represented by an `agent.json` manifest. The manifest describes identity, ownership, capabilities, interfaces, dependencies, deployment requirements, safety profile, and lifecycle status.

Example:

```json
{
  "id": "research.market-intelligence",
  "name": "Market Intelligence Agent",
  "version": "0.1.0",
  "domain": "research",
  "summary": "Collects and synthesizes market intelligence for ecosystem workflows.",
  "status": "experimental",
  "capabilities": ["web-research", "summarization", "citation"],
  "interfaces": {
    "input": "schemas/input.json",
    "output": "schemas/output.json"
  },
  "runtime": {
    "type": "service",
    "language": "typescript"
  },
  "owners": ["AgenNext"],
  "tags": ["research", "market", "ecosystem"]
}
```

## Local development

```bash
npm install
npm run validate
npm run build
```

## Platform components

1. **Agent catalogue**: versioned manifests under `agents/`.
2. **Manifest schema**: validation rules under `schemas/agent.schema.json`.
3. **Registry package**: TypeScript utilities for loading, validating, and querying agents.
4. **CLI**: commands for validation and registry inspection.
5. **Governance docs**: contribution, review, maturity, and lifecycle guidelines.

## Contribution model

New agents should be submitted with:

- An `agent.json` manifest.
- Interface schemas or API contract references.
- Example usage or integration notes.
- Security and safety considerations.
- Tests or validation evidence where applicable.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`docs/architecture.md`](docs/architecture.md).
