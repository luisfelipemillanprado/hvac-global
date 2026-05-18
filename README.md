# Henry's Top Notch | Premium HVAC Digital Solutions

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![AWS](https://img.shields.io/badge/AWS_SES-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)

> **Elevate your company's digital presence with a high-performance platform built on the cutting-edge Next.js 16 and React 19 architecture.**

---

## What is Henry's Top Notch?

**Henry's Top Notch** is an enterprise-grade web solution specifically engineered for the **HVAC (Heating, Ventilation, and Air Conditioning)** industry. By leveraging the latest releases of the React ecosystem, we provide a platform that is not just modern, but future-proof.

Our focus: **Ultra-fast performance, elite UI/UX via HeroUI, and high-conversion lead generation.**

---

## Software Features

- **Bleeding-Edge Stack:** Powered by **Next.js 16** and **React 19** for App Router workflows, refined hooks, and fast hydration—without sacrificing stability.
- **HeroUI & Design System:** Premium, accessible UI components for a polished, professional look.
- **Advanced i18n:** The `i118builder` tool compiles split JSON namespaces into consolidated locale bundles for **next-intl** and tooling (e.g. `i18n-check`).
- **Enterprise Lead Generation:** **AWS SESv2** integration for transactional email.
- **Visual Excellence:** **Sharp** for image pipelines and **Swiper 12** for touch-ready sliders.
- **Performance First:** Tuned for Core Web Vitals with caching and streaming-oriented patterns where applicable.

---

## Technical Specifications

| Technology       | Version    | Purpose                                                       |
| :--------------- | :--------- | :------------------------------------------------------------ |
| **Next.js**      | 16.1.x     | App Router, Server Actions, and hybrid rendering.             |
| **React**        | 19.2.x     | Server Components ecosystem, concurrent rendering, hydration. |
| **Tailwind CSS** | 4.1.x      | Utility-first styling with PostCSS integration.               |
| **HeroUI**       | 3.0 (Beta) | Accessible component library.                                 |
| **TypeScript**   | 5.7.x      | Strict typing for maintainability.                            |
| **AWS SDK**      | 3.9x       | Email infrastructure (SESv2).                                 |

---

## Project Architecture

The project is organized for scalability and clear separation of concerns:

- `src/app/`: Routing, layouts, and server/client boundaries.
- `src/common/`: Shared UI and cross-feature building blocks.
- `src/features/`: Page- and domain-specific compositions (hero, testimonials, etc.).
- `src/i18n/`: Locale resolution and message loading for **next-intl**.
- `i118builder/messages/`: **Source** JSON translation files (grouped namespaces); edited by translators and watched in dev/build.
- `messages/`: **Generated** consolidated `en.json` / `es.json` (etc.) consumed at runtime (`i118builder/index.ts` writes here on build and `--watch`).
- `i118builder/`: Translation builder CLI and watch pipeline.

---

## Development & Workflow

Quality is enforced through automation:

- **Dev:** `npm run dev` runs the i18n watcher and **Next.js** together via **concurrently**.
- **Linting:** **ESLint 10** and **Prettier 3** (via **Lint-staged** on commit).
- **Git hooks:** **Husky** for pre-commit workflows.
- **Types:** Use `npm run type-check` for `tsc --noEmit`.

### Key Commands

```bash
# Install dependencies
npm install

# Start development (with i18n watcher)
npm run dev

# Build for production
npm run build
```

---

## License

Use, redistribution, and commercial terms are defined in **[LICENSE](./LICENSE)** (commercial / proprietary—not open source). For distribution, SaaS, or customization rights, use the contact in that file.
