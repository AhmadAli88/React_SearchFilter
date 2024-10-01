//Filtering Logic at frontend level

// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { Users } from "./users";
// import Table from "./Table";

// function App() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     // Fetch data from the API and set it in state
//     fetch("http://localhost:5000")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error:", error));
//   }, []);
//   const keys = ["first_name", "last_name", "email"];

//   const search = (data) => {
//     return (
//       // data.filter((item) => item.first_name.toLowerCase().includes(query)) ||
//       // data.filter((item) => item.last_name.toLowerCase().includes(query)) ||
//       // data.filter((item) => item.email.toLowerCase().includes(query)) ||
//       // []
//       data.filter((item) =>
//         keys.some((key) => item[key].toLowerCase().includes(query))
//       )
//     );
//   };
//   console.log(
//     "query",
//     Users.filter((users) => users.first_name.toLowerCase().includes("fe"))
//   );

//   return (
//     <div className="app">
//       <input
//         type="text"
//         placeholder="Search...."
//         className="search"
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />

//       {/* <ul className="list">
//         {Users.filter((user) =>
//           user.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name} {user.last_name}
//           </li>
//         ))}
//       </ul> */}
//       {/* <Table data={search(Users)} /> */}
//       <Table data={data} />
//     </div>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define fetchData function to fetch data based on the query
    function fetchData() {
      fetch(`http://localhost:5000?q=${query}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error:", error));
    }

    // Only fetch data if query is empty or has more than 2 characters
    if (query.length === 0 || query.length > 2) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search...."
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())} // Update query on input change
      />

      {/* Pass the data to the Table component */}
      <Table data={data} />
    </div>
  );
}

export default App;
