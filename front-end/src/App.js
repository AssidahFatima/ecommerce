import Home from "./dashboardpages/pages/home/Home";
import Login from "./dashboardpages/pages/login/Login";
import List from "./dashboardpages/pages/list/List";
import Single from "./dashboardpages/pages/single/Single";
import New from "./dashboardpages/pages/new/New";
import AddProduct from "./components/dashboard/products/addProduct/AddProduct";
import AddCategories from "./components/dashboard/categories/AddCategories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Categories from "./dashboardpages/pages/categories/Categories";
import Products from "./dashboardpages/pages/products/Products";
import Orders from "./dashboardpages/pages/orders/Orderds";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

        

            <Route path="products">
              <Route index element={<Products />} />
              <Route
                path="new"
                element={<AddProduct  />}
              />
            </Route>

            
            <Route path="categories">
              <Route index element={<Categories />} />
              <Route
                path="new"
                element={<AddCategories  />}
              />
            </Route>


            <Route path="orders">
              <Route index element={<Orders />} />
            </Route>

    



            

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
