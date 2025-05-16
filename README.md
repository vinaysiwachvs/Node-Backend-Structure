# ⚙️ Node.js + TypeScript Backend Boilerplate

A clean and scalable **Node.js** backend boilerplate built with **TypeScript**, designed for building modern APIs and microservices efficiently 🚀.

This setup is perfect for kickstarting your next backend project with best practices like modular structure, environment config support, and developer tooling baked in 🔥.

---

## ✨ Features

- 📦 **Modular Folder Structure** – Easy to scale and maintain as your app grows
- 🧠 **TypeScript Support** – Write type-safe, modern JavaScript
- 🔐 **Environment Variable Support** – Manage secrets using `.env`
- 🧹 **Pre-configured ESLint & Prettier** – Enforce consistent code style
- 🧩 **Common Utilities & Interfaces** – Reusable logic for better structure
- 🧪 **Testing-Ready Setup** – Simple directory to start writing tests
- ⚙️ **Cross-platform Scripts** – Works smoothly on Windows, macOS & Linux

---

## 📁 Project Structure

```bash
Node-Backend-Structure/
│
├── src/
│   ├── controllers/              # 🧭 Route handlers for each feature
│   ├── routes/                   # 🌐 API endpoints and routing logic
│   ├── models/                   # 🧬 Database schemas or TypeScript models
│   ├── services/                 # ⚙️ Business logic and reusable flows
│   ├── utils/                    # 🔧 Helper utilities and functions
│   ├── common/                   # 📚 Shared configs, constants, interfaces
│   │   ├── common-variables.ts   # 🔁 Global app-wide constants
│   │   ├── database.ts           # 🗄️ Database connection logic
│   │   └── interface/            # 🧾 Shared TypeScript types/interfaces
│   └── index.ts                  # 🚀 Main entry point of the application
│
├── test/                         # 🧪 Unit and integration tests
├── .env                          # 🔐 Environment-specific config
├── .eslintrc.cjs                 # 📏 Linter config
├── .eslintignore                 # 🙈 Files ignored by ESLint
├── .prettierrc.json              # 🎨 Prettier formatting rules
├── .prettierignore               # 🙈 Files ignored by Prettier
├── tsconfig.json                 # 🛠️ TypeScript compiler config
├── package.json                  # 📦 NPM metadata and scripts
└── README.md                     # 📘 This file!
