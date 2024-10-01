//Just splice data on backend 

// import express from "express";
// import cors from "cors";
// import { Users } from "../client/src/users.js";
// const app = express();
// app.use(cors());

// app.get("/", (req, res) => {
//   const { q } = req.query;
//   console.log("q", q);
//   res.json(Users.splice(0, 10));
// });

// app.listen(5000, () => console.log("listening on port 5000"));


import express from "express";
import cors from "cors";
import { Users } from "../client/src/users.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;  // Capture the query parameter
  console.log("q", q);
  
  // If there's a query, filter the Users array, otherwise return first 10 users
  const keys = ["first_name", "last_name", "email"];
  const filteredUsers = q
    ? Users.filter(user =>
        keys.some(key => user[key].toLowerCase().includes(q.toLowerCase()))
      )
    : Users.slice(0, 10); // Return first 10 users when no query

  res.json(filteredUsers);  // Return the filtered or sliced users
});

app.listen(5000, () => console.log("listening on port 5000"));
