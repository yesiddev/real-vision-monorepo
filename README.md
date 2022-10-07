<p align="center">
  <img src="https://www.realvisionenterprise.com/_next/image?url=%2Fimg%2Flogo192.png&w=128&q=75" alt="Real Vision Logo" />
</p>

## Real Vision Monorepo

- Rush with PNPM to manage monorepo
- CI/CD using Github Actions
- Formatting using Prettier
- Git hooks: pre-commit ( prettier, lint-staged ), commit-msg ( lint commits using commitlint )

## Quick start

```
  # 1. Install pnpm
  npm install -g pnpm
  
  # 2. Install Rush
  pnpm install -g @microsoft/rush
  
  # 3. Clone the repository
  git clone https://github.com/rvesoftware/real-vision-monorepo.git
  
  # 4. Install dependencies
  rush install
  
  # 5. Run build in all packages
  rush build
```
