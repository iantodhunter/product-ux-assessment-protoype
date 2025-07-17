# Nexus Readiness Assessment

A React-based multi-step assessment application for evaluating Nexus integration readiness.

## Project Structure

```
├── components/
│   ├── icons/           # Consolidated icon components
│   ├── ui/             # shadcn/ui components
│   ├── StepOne.tsx     # App type selection
│   ├── StepTwo.tsx     # User information
│   ├── DataReadinessStep.tsx
│   ├── UXReadinessStep.tsx
│   └── ...
├── styles/
│   └── globals.css     # Global styles and design tokens
└── App.tsx            # Main application orchestrator
```

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** for accessible UI components
- **Lucide React** for icons
- **Vite** for development and building

## Design System

The application uses a token-based design system with:
- Consistent color palette
- Typography scale (Hexagon Akkurat, Open Sans)
- Spacing and border radius tokens
- Component variants for different states

## Development

```bash
npm install
npm run dev
```

## Assets

Icons and images are managed through:
- Custom SVG components in `components/icons/`
- External CDN references for larger assets
- Optimized inline SVGs for better performance