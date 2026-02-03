# Forest Bjorn LLC

Modern web and application development consulting.

## 🚀 Tech Stack

- **Framework:** Angular 21 with standalone components
- **Build System:** Nx 22 monorepo
- **State Management:** NgRx 21
- **Styling:** SCSS with custom design system
- **Deployment:** Vercel (Edge Network)

## 📁 Structure

```
mcalamosca/
├── apps/
│   ├── forest-bjorn-llc/     # Main consulting website
│   └── forest-bjorn-llc-e2e/ # E2E tests
├── libs/
│   └── ui/                   # Shared UI components
└── _archived/                # Legacy projects (preserved)
```

## 🛠️ Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npx nx serve forest-bjorn-llc

# Build for production
npx nx build forest-bjorn-llc --configuration=production

# Run tests
npx nx test forest-bjorn-llc

# Run e2e tests
npx nx e2e forest-bjorn-llc-e2e
```

## 🌐 Deployment

Deployed via Vercel. Push to `main` branch triggers automatic deployment.

**Production:** https://forestbjorn.com

## 📝 License

MIT
