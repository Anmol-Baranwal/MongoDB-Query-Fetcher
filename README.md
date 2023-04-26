
# FullStack Fetch Data Project

We can choose any option to fetch data accordingly based on 5 different queries. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<hr>

## :fire: Deployed Link ##

This project is hosted on [Vercel Platform](https://vercel.com/). Visit the following link to view the web application.

```

```
<hr>

## ✅ Guidelines to run web app locally

- For this app to work, you need to configure the following environment variables in your .env file in the root directory.

(These are MongoDB Atlas cluster credentials)

```
MONGODB_USERNAME=<value>
MONGODB_PASSWORD=<value>
```

- Use these commands to run the application

```bash
# to install dependencies 
npm install

# to run the server
npm run dev

```

- Open `http://localhost:3000` with your browser to see the application.

<br>

## :open_file_folder: Folder Structure

A quick look at the folder structure of this project.

    .
    |──node_modules
    |──next.config.json
    |──jsconfig.json
    |──.eslintrc.json
    |──package-lock.json
    |──package.json
    ├── components
        |───table
            |───table.js
            |───table.module.css
    ├── data
        |───stats.json
    └── models
        |───userModel.js
    └── pages
        |───api
            |───test
            |───query
    └── public
        |───fonts
    └── styles
        |───stats.json
    └── util
        |───connectMongo.js
        |───connectUrl.js
    


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
