## Prerequisites

Make sure the following are installed on your system:

- Node.js version **>= 22**
- TypeScript installed globally
- Prisma version **7.0**

---

## Step-by-Step Contribution Guide

### 1. Fork the Repository

Fork the repository to your GitHub account.

---

### 2. Clone the Repository

```bash
git clone https://github.com/<your-username>/alumni-network.git

git remote add upstream https://github.com/anandKumar0432/alumni-network.git
git fetch upstream
git merge upstream/main

cd backend
npm install
npx prisma generate
tsc -b
node dist/src/index.js

cd frontend
npm install
npm run dev

