import React from 'react'
import "./allcategories.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import Options from './Options';


const AllCategory = () => {

 
    
  const rows = [
   
    {
      id: 1143155,
      category: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Active",
      createdAt: "Nov 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM",
      sousCategory:"machine"
    },
    {
      id: 2235235,
      category: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Active",
      createdAt: "Nov 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM",
      sousCategory:"machine"
    },
    {
      id: 2342353,
      category: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Active",
      createdAt: "Nov 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM",
      sousCategory:"machine"
    },
    {
      id: 2357741,
      category: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Active",
      createdAt: "Nov 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM",
      sousCategory:"machine"
    },
    {
      id: 2342355,
      category: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Active",
      createdAt: "Nov 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM",
      sousCategory:"machine"
    },
    {
      id: 1147155,
      category: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description: "John Smith",
      status: "Pending",
      createdAt: "Nov 7,2020 7:00 PM",
      updatedAt: "Nov 8,2020 7:45 PM",
      sousCategory:"machine"
    },
  


  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Created at</TableCell>
            <TableCell className="tableCell">Updated at</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Sous-Category</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.le}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.category}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.description}</TableCell>
              <TableCell className="tableCell">{row.createdAt}</TableCell>
              <TableCell className="tableCell">{row.updatedAt}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                <Options/>
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


export default AllCategory;