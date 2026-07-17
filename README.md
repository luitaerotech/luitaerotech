# Luit Aerotech

Marketing site for Luit Aerotech Private Limited, built with [TanStack Start](https://tanstack.com/start).

## Routes

- `/` — homepage (`src/routes/index.tsx`)
- `/services` — service catalogue (`src/routes/services.tsx`)

Shared header/footer live in `src/components/marketing/`, styling in `src/styles/marketing.css`.
See [AGENTS.md](AGENTS.md) for conventions.

## Development

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
```

## Linting & formatting

This project uses [Biome](https://biomejs.dev/):

```bash
npm run lint
npm run format
npm run check
```

## Deployment

Hosted on [Appwrite Sites](https://appwrite.io/docs/products/sites), connected to this repo's
`main` branch.
