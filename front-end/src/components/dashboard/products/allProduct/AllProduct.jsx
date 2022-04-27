import React from 'react'
import "./allProduct.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/Delete';




const AllProduct = () => {

 
    
  const rows = [
   
    {
      id: 1143155,
      product: "traktor",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Active",
      quantity: 15,
      category: "machines",
      sousCategory: "tomobil",
      price: "150$",
      createdAt: "fev 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM"
    },
    {
      id: 2235235,
      product: "traktor",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Disabled",
      quantity: 15,
      category: "machines",
      sousCategory: "tomobil",
      price: "150$",
      createdAt: "fev 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM"
    },
    {
      id: 2342353,
      product: "traktor",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Active",
      quantity: 15,
      category: "machines",
      sousCategory: "tomobil",
      price: "150$",
      createdAt: "fev 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM"
    },
    {
      id: 2357741,
      product: "traktor",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Disabled",
      quantity: 15,
      category: "machines",
      sousCategory: "tomobil",
      price: "150$",
      createdAt: "fev 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM"
    },
    {
      id: 2342355,
      product: "traktor",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Active",
      quantity: 15,
      category: "machines",
      sousCategory: "tomobil",
      price: "150$",
      createdAt: "fev 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM"
    },
    {
      id: 1147155,
      product: "traktor",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smlh",
      status: "Active",
      quantity: 15,
      category: "machines",
      sousCategory: "tomobil",
      price: "150$",
      createdAt: "fev 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM"
    },
    {
      id: 1147155,
      product: "traktor",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smlh",
      status: "Active",
      quantity: 15,
      category: "machines",
      sousCategory: "tomobil",
      price: "150$",
      createdAt: "fev 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM"
    },
   
    
  


  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Sous-Category</TableCell>
            <TableCell className="tableCell">Updated at</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.description}</TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{row.sousCategory}</TableCell>
              <TableCell className="tableCell">{row.updatedAt}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.quantity}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                  <BorderColorOutlinedIcon className='gg'/>
                  <DeleteIcon className='ff'/>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  );
};


export default AllProduct;