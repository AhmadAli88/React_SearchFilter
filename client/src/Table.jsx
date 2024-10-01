import React from "react";

const Table = ({data}) => {
  console.log("data", data);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Country</td>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
