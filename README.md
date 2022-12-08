<p align="center">  
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mattsince87/event-app/main/public/docs/intrvnt.logo.svg">
    <img src="https://raw.githubusercontent.com/mattsince87/event-app/main/public/docs/intrvnt.logo.dark.svg" height="128">
  </picture>
</p>

An open source events app for casual football teams built with NextJs 13, Prisma and MongoDB. Design system built with Tailwind and Storybook.

> This repository is currently in development

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
# env.local
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

Enjoy :+1:

## NextJs

Built with Next.js 13 Typescript and the new [app directory](https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory) and [route groups](https://beta.nextjs.org/docs/routing/defining-routes#route-groups) to separate the sign-in/up flow.

### Dependencies

- Typescript
- [NextAuth.js](https://next-auth.js.org/getting-started/introduction)
