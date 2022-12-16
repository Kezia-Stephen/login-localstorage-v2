import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import data from "./mock-data.json";

const appContainer = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "1rem",
};

const tableContainer = {
  borderCollapse: "collapse",
  width: "100%",
};

const headStyle = {
  border: "1px solid #ffffff",
  textAlign: "center",
  padding: "8",
  fontSize: "32",
  backgroundColor: "rgb(117, 201, 250)",
};

const idStyle = {
  border: "1px solid #ffffff",
  textAlign: "center",
  padding: "8",
  fontSize: "32",
  backgroundColor: "rgb(205, 235, 253)",
};

const dataStyle = {
  border: "1px solid #ffffff",
  textAlign: "justify",
  padding: "8",
  fontSize: "32",
  backgroundColor: "rgb(205, 235, 253)",
};

const Details = () => {
  const [contacts, setContacts] = useState(data);
  const { id } = useParams();
  console.log(id);
  let contact = contacts
    .filter(function (contact) {
      return contact.id === id;
    })
    .map(function (contact) {
      return contact;
    });
  return (
    <div style={appContainer}>
      <h1 align="center">Employee Details</h1>
      <table style={tableContainer}>
        <thead>
          <tr>
            <th style={headStyle}>S.No.</th>
            <th style={headStyle}>Name</th>
            <th style={headStyle}>Address</th>
            <th style={headStyle}>Phone Number</th>
            <th style={headStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts
            .filter(function (contact) {
              return contact.id == id;
            })
            .map((contact) => (
              <tr>
                <td style={idStyle}>{contact.id}</td>
                <td style={dataStyle}>{contact.fullName}</td>
                <td style={dataStyle}>{contact.address}</td>
                <td style={dataStyle}>{contact.phoneNumber}</td>
                <td style={dataStyle}>{contact.email}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* var output =  employees.filter(employee => employee.department == "IT"); */}
      <Link className="nav-link " to="/homepage">
        Back
      </Link>
    </div>
  );
};

export default Details;
