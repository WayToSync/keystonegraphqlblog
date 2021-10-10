## Project

The goal of this project is to understand hwo to use **KeystoneJS** with Graphql.

We will also connect to a MongoDB Atlas cluster with **adaptater-mongoose**.

This project was made with the version **5** of KeystoneJS.

## Install KeystoneJS

```
npm init keystone-5-app my-app
# or
npx create keystone-5-app my-app
```

## Running the Project

To run this project first run `npm install`. Note: If you generated this project via the Keystone cli step this has been done for you \\o/.

Once running the Keystone Admin UI is reachable via: `localhost:5000/admin`.

To run the project, use `npm run dev`

## How to use this project

- First create a new Cluster on **[MongoDB Atlas](https://www.mongodb.com/fr-fr/cloud/atlas)**

- Add a **.env** file on your project and put your **MongoDB_URI** and choose a **COOKIE_SECRET**

- Create **[Posts](http://localhost:5000/admin/posts)** and at least one admin **[User](http://localhost:5000/admin/posts)** on the KeystoneJS Interface.
- You can use the **authStrategy** from the index.js file and decide who can access to the interface with the last property of **AdminUIApp**.
- Access to the **[GraphQL](http://localhost:5000/admin/graphiql)** interface and follow the Docs tab to make your **[Query or Mutation](https://graphql.org/learn/queries/)**.

##### For further information visit :

**https://keystonejs.com/**
