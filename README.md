<p align="center">  
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mattsince87/event-app/main/public/docs/intrvnt.logo.svg">
    <img src="https://raw.githubusercontent.com/mattsince87/event-app/main/public/docs/intrvnt.logo.dark.svg" height="128">
  </picture>
</p>

This is an open source events app I'm currently designing and building for fun as a way to improve my own knowledge and skillsets.

<div class="p-3 mb-4 border extended-markdown tip rounded-1 color-border-accent-emphasis color-bg-accent f5">
This repository is currently in development
</div>

## Core Technologies

- [NextJS 13](https://github.com/vercel/next.js)
- [Prisma](https://github.com/prisma/prisma)
- [MongoDB](https://github.com/mongodb/mongo)
- [Storybook](https://github.com/storybookjs/storybook)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)

## Getting Started

To run this project locally you will first need to setup your MongoDB locally or with Atlas. I'm currently using the [GitHub Authentication Provider](https://next-auth.js.org/providers/github).

Create your `.env.local` file with the following setup.

```bash
NEXTAUTH_SECRET=
NEXTAUTH_URL="http://localhost:3000"

DATABASE_URL="mongodb+srv://"

GITHUB_ID=
GITHUB_SECRET=
```

Install all dependencies and run your dev environement.

```bash
  yarn install
  yarn dev
```

That's it, enjoy :+1:
