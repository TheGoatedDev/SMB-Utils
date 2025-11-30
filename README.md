# SMB Utils

A unified platform of purpose-built tools designed to help small and medium businesses navigate operational complexity.

## Overview

SMB Utils targets the "spreadsheet gap" — businesses too large for manual processes but too small for complex enterprise solutions. The platform bundles focused utilities under a single subscription to provide immediate value without feature bloat.

### Core Utilities
- **Cash Runway Tracking**: Monitor financial health and runway.
- **Tax Nexus Monitoring**: Keep track of tax obligations across jurisdictions.
- **Vendor Compliance**: Manage vendor requirements and status.
- **Supplier Diversity Documentation**: Simplify diversity certification and documentation.

## Tech Stack

This project is built with the [T3 Stack](https://create.t3.gg/) and modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) & [Motion](https://motion.dev/)
- **Database**: [MySQL](https://www.mysql.com) (via Docker) with [Prisma ORM](https://www.prisma.io)
- **API**: [tRPC](https://trpc.io)
- **Authentication**: [Better Auth](https://better-auth.com)
- **Email**: [React Email](https://react.email)
- **Tooling**: [Biome](https://biomejs.dev) (Linting/Formatting), [pnpm](https://pnpm.io)

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- [pnpm](https://pnpm.io/installation)
- Docker (for local database)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smbutils
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Copy the example environment file and update variables:
   ```bash
   cp .env.example .env
   ```

4. **Start the Database**
   Start the local MySQL instance:
   ```bash
   ./start-database.sh
   ```

5. **Initialize Database**
   Push the schema to your local database:
   ```bash
   pnpm db:push
   ```

6. **Start Development Server**
   ```bash
   pnpm dev
   ```
   The app should now be running at `http://localhost:3000`.

## Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm db:push` - Push Prisma schema changes to the database
- `pnpm db:studio` - Open Prisma Studio to view/edit data
- `pnpm email` - Start the React Email preview server
- `pnpm check` - Run Biome linter/formatter check

## Project Structure

- `src/app` - Next.js App Router pages and layouts
- `src/server` - Backend logic (tRPC routers, DB client, Auth)
- `src/components` - React components (UI library, shared components)
- `src/emails` - React Email templates
- `prisma/schema.prisma` - Database schema definition

## License

Proprietary. All rights reserved.
