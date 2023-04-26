
# <img src="https://user-images.githubusercontent.com/74038190/221857969-f37e1717-1470-4fe4-abb5-88b334cf64ea.png" alt="icon of todo list" width="45" /> FullStack Fetch Data Project

> :information_source: This is a web application built using Next.js, MongoDB, and Mongoose. The application allows users to perform queries on a MongoDB database and display the results in a table.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<hr>

## :fire: Deployed Link ##

This project is hosted on [Vercel Platform](https://vercel.com/). Visit the following link to view the web application.

```
https://internship-full-stack-project-8m5rb54k7-anmol-baranwal.vercel.app/
```
<hr>

## ✅ Guidelines to run web app locally

- For this app to work, you need to configure the following environment variables in your .env.local file in the root directory. No need to use `NEXT_PUBLIC` since the credentials are not exposed to the browser..

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

<hr>

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
    

<hr>

## <img src="https://user-images.githubusercontent.com/74038190/221857984-5bf77e81-6f65-4502-a7c8-f29a978efb3f.png" alt="bullseye" width="35" /> Frameworks & Languages Used
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />

<hr>

## How I made this?

This is a web application built using Next.js, MongoDB, and Mongoose. The application enables users to perform queries on a MongoDB database and displays the results in a table. I also used MongoDB Compass and Postman to verify the queries and API requests.

The `index.js` file in the `pages` folder contains the code for the homepage of the application. It imports the `table` component and the `Home.module.css` styles. The homepage contains a drop-down menu with five options, each of which triggers a different query to the MongoDB database when selected.

When the user selects an option, the `handleApiChange` function is called. This function sends a GET request to the appropriate endpoint of the application's API using the fetch function. It then sets the state of the `userResults` variable to the data returned from the API. If an error occurs, it is caught and logged to the console.

The `api/test/loadDB.js` file is used to load test data into the MongoDB database. It connects to the database using the connectMongo function from the `connectMongo.js` file and inserts the data from the `stats.json` file into a User collection. It then retrieves all of the users from the collection and sends them back as a JSON response.

The models/userModel.js file contains the Mongoose schema for a `User` document in the database. It defines the fields for the document, including `id, firstName, lastName, email, gender, income, city, car, quote, and phone_price`. If the `User` model has already been defined, the code uses that model; otherwise, it defines a new model using the schema.

The `util/connectUrl.js` file contains the URL for the MongoDB database. It is constructed using environment variables for the username and password. The URL is exported as a default module.

The `util/connectMongo.js` file exports a function that connects to the MongoDB database using the URL from the `connectUrl.js` file and the mongoose.connect function. The function is used in the `api/test/loadDB.js` file to connect to the database before inserting the test data.

The `pages/api/query` folder contains several files that define the endpoints for the API. Each file exports an asynchronous function that retrieves data from the database and sends it back as a JSON response. The files are named after the query they perform, and their contents depend on the specifics of the query. For example, the `AudiEmailNoDigit.js` file retrieves data on users who own a BMW, Mercedes, or Audi and whose email addresses do not contain any digits.

<hr>

## 🖥️ The Interface

![Screenshot (3643)](https://user-images.githubusercontent.com/74038190/234667279-1f295485-4fe2-4b7b-a081-9306b3aa8469.png)

<hr>

## References

- MongoDB Atlas: https://cloud.mongodb.com/v2/64463b7e3b1b9f39c0c957fb#/clusters
- Query Documents MongoDB: https://www.mongodb.com/docs/manual/tutorial/query-documents/
- Installation of MongoDB 6.0: https://stackoverflow.com/questions/73081708/mongo-exe-not-installed-in-version-6-0-0
- MongoDB Compass: https://www.mongodb.com/products/compass
- Postman: https://www.postman.com/downloads/
- NPM Package: https://www.npmjs.com/
- Next.js Documentation: https://nextjs.org/docs/basic-features/pages

<!-- ## Getting Started

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
 -->
