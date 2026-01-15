# Alumni Network

A full-stack **Alumni Association platform** designed to connect alumni, students, and the institution through a unified digital network.  
The project follows a **modern full-stack architecture** with a dedicated backend and frontend.

---

## Project Overview

The Alumni Network enables alumni engagement through a scalable and maintainable web application.  
It is built with a clear separation of concerns between backend and frontend to support future growth and contributions.

---

## Project Structure

```txt
alumni-network/
├── backend/
│   ├── dist/                # Compiled backend output
│   ├── generated/           # Prisma generated files
│   ├── lib/                 # Shared backend utilities
│   ├── prisma/              # Prisma schema & migrations
│   ├── src/                 # Backend source code
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── app/                 # Next.js app router
│   ├── components/          # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Frontend utilities
│   ├── public/              # Static assets
│   ├── .env                 # Environment variables
│   ├── next.config.ts
│   └── package.json
│
├── README.md
└── CONTRIBUTING.md

Tech Stack
    >>>>Backend
        Node.js
        Express.js
        TypeScript
        Prisma ORM
        PostgreSQL
        REST APIs

    >>>>Frontend
        Next.js
        TypeScript


To contribute to this project:
    Please follow the guidelines mentioned in CONTRIBUTING.md