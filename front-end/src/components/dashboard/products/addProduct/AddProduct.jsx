
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import { useState } from "react";
import "./addProducts.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = () => {

  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
        <h1>Add Product</h1>
        </div>
        <div className="bottom">
        
           <div className="right">
            <form className="form">
              <div className="formInput">
                <label for="inputName">Name*</label>
                <input type="name" class="form-control" id="inputName" placeholder="Name"/>
                <label for="inputNumber">Price*</label>
                <input type="number"  min="0.00" max="1000000.00" step="1.00" class="form-control" id="inputNumber" placeholder="Price"/>
                <label for="exampleFormControlTextarea1">Description*</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
                <label for="inputState">Status*</label>
                 <select class="form-select" aria-label="Default select example">
                    <option selected>Status</option>
                     <option>Active</option>
                     <option>Disabled</option>
                 </select>

              </div>
                <div className="formInput form2" >
                  
                <label for="inputNumber">Quantity*</label>
                <input type="number" min="0.00" max="1000000.00" step="1.00" class="form-control" id="inputNumber" placeholder="Quantity"/>
                <label for="inputNumber">Stock*</label>
               <input type="number" min="0.00" max="1000000.00" step="1.00" class="form-control" id="inputNumber" placeholder="Stock"/>
               
               <label for="inputState">Categor*</label>
                 <select class="form-select" aria-label="Default select example">
                    <option selected>Category</option>
                     <option>Active</option>
                     <option>Disabled</option>
                 </select>
              
               <label for="inputState">Sous-Category*</label>
                 <select class="form-select" aria-label="Default select example">
                    <option selected> Sous-Category</option>
                     <option>Active</option>
                     <option>Disabled</option>
                 </select>

          

                </div>
                <button>Create Product</button>
              
            </form>
          </div> 

          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://i.pinimg.com/originals/4f/5d/23/4f5d23170a65869ff7c210342516ad2c.jpg"
              }
              alt=""
            />

    <label htmlFor="file" className="file1">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                
            </div>
            
          
   
        </div>
     
      </div>
    </div>
  );
};

export default New;