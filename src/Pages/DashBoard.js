import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import data from './mock-data.json'


const appContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: '1rem'
}

const tableContainer = {
    borderCollapse: 'collapse',
    width: '100%'     
}

const headStyle = {
    border: '1px solid #ffffff',
    textAlign: 'center',
    padding: '8',
    fontSize: '32',
    backgroundColor: 'rgb(117, 201, 250)'
}

const idStyle = {
    border: '1px solid #ffffff',
    textAlign: 'center',
    padding: '8',
    fontSize: '32',
    backgroundColor: 'rgb(205, 235, 253)'
}

const dataStyle = {
    border: '1px solid #ffffff',
    textAlign: 'justify',
    padding: '8',
    fontSize: '32',
    backgroundColor: 'rgb(205, 235, 253)'
}

const DashBoard = () => {

  const [contacts, setContacts] = useState(data);
const [id, setId] = useState(null);
  const navigate = useNavigate();


  return (
    <div style={appContainer}>
        <h1 align="center">Employee Table</h1>
        <table style={tableContainer}>
            <thead>
                <tr>
                    <th style = {headStyle}>S.No.</th>
                    <th style = {headStyle}>Name</th>
                    <th style = {headStyle}>Address</th>
                    <th style = {headStyle}>Phone Number</th>
                    <th style = {headStyle}>Email</th>
                </tr>
            </thead>
            <tbody>
                {/* {contacts.map((contact) => (
                    <tr>
                    <td style = {idStyle}>{contact.id}</td>
                    <td style = {dataStyle}><Link to="/details">{contact.fullName}</Link></td>
                     <td style = {dataStyle}>{contact.address}</td>
                     <td style = {dataStyle}>{contact.phoneNumber}</td>
                     <td style = {dataStyle}>{contact.email}</td>
                    </tr>
                ))} */}
                {contacts.map((contact) => (
                    <tr>
                    <td style = {idStyle} ><Link to={`/details/${contact.id}`}>{contact.id}</Link></td>
                    <td style = {dataStyle}>{contact.fullName}</td>
                     <td style = {dataStyle}>{contact.address}</td>
                     <td style = {dataStyle}>{contact.phoneNumber}</td>
                     <td style = {dataStyle}>{contact.email}</td>
                    </tr>
                ))}
               
            </tbody>
        </table>
       
              <Link className="nav-link " to="/">
                Logout{" "}
              </Link>
        
    </div>
  )
}

export default DashBoard

// const empList = [
//   { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, role: 1 },
//   { id: 2, name: "Raj", email: 'raj@gmail.com', status: 1, role: 0 },
//   { id: 3, name: "David", email: 'david342@gmail.com', status: 1, role: 3 },
//   { id: 4, name: "Vikas", email: 'vikas75@gmail.com', status: 0, role: 2 },
// ]

// function App() {

//   const [data, setData] = useState(empList)
//   const columns = [
//     { title: "ID", field: "id" },
//     { title: "Name", field: "name" },
//     { title: "Email", field: "email" }, 
//     { title: "Status", field: 'status', },
//     { title: "Role", field: "role", }
//   ] 
 

//   return (
//     <div className="App">
//       <h1 align="center">React-App</h1>
//       <h4 align='center'>Material Table</h4>
//       <MaterialTable
//         title="Employee Data"
//         data={data}
//         columns={columns}
//       />
//     </div>
//   );
// }

// export default App;
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms