

import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import "./allcategories.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = () => {

  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
        <h1>Add Categories</h1>
        </div>
        <div className="boottom">
        
           <div className="right">
            <form className="form">
              <div className="formInput">
                <label for="inputName">Name*</label>
                <input type="name" class="form-control" id="inputName" placeholder="Name"/>
        
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
               <label for="inputState">Sous-Category*</label>
                 <input type="text" class="form-control" placeholder="Sous-category" />
                 <button className="add" >Add</button>
                 </div>    
                         
             
                <button >Create Category</button>
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