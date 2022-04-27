import React from 'react'
import "./orders.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";





const AllOrder = () => {

 
    
  const rows = [
   

   
   
    {
      id: 1143155,
      amount: "1000$",
      customer: "Mohamed",
      email: "fatimaassidah@gmail.com",
      phone:+212610363512,
      address: "Rabat",
      createdAt: "fev 7,2020 7:00 PM",
      status: "Pending"
     
    },
    {
      id: 2235235,
      amount: "1000$",
      customer: "Mohamed",
      email: "fatimaassidah@gmail.com",
      phone:+212610363512,
      address: "Rabat",
      createdAt: "fev 7,2020 7:00 PM",
      status: "Pending"
    },
    {
      id: 2342353,
      amount: "1000$",
      customer: "Mohamed",
      email: "fatimaassidah@gmail.com",
      phone:+212610363512,
      address: "Rabat",
      createdAt: "fev 7,2020 7:00 PM",
      status: "Pending"
    },
    {
      id: 2357741,
      amount: "1000$",
      customer: "Mohamed",
      email: "fatimaassidah@gmail.com",
      phone:+212610363512,
      address: "Rabat",
      createdAt: "fev 7,2020 7:00 PM",
      status: "Pending"
    },
    {
      id: 2342355,
      amount: "1000$",
      customer: "Mohamed",
      email: "fatimaassidah@gmail.com",
      phone:+212610363512,
      address: "Rabat",
      createdAt: "fev 7,2020 7:00 PM",
      status: "Approved"
    },
    {
      id: 1147155,
      amount: "1000$",
      customer: "Mohamed",
      email: "fatimaassidah@gmail.com",
      phone:+212610363512,
      address: "Rabat",
      createdAt: "fev 7,2020 7:00 PM",
      status: "Approved"
    },
    {
      id: 1147155,
      amount: "1000$",
      customer: "Mohamed",
      email: "fatimaassidah@gmail.com",
      phone:+212610363512,
      address: "Rabat",
      createdAt: "fev 7,2020 7:00 PM",
      status: "Pending"
    },
   
  


  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Create dAt</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.phone}</TableCell>
              <TableCell className="tableCell">{row.address}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.createdAt}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  );
};


export default AllOrder;