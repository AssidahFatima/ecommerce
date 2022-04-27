import "./list.scss"
import Sidebar from "../../../components/dashboard/sidebar/Sidebar"
import Navbar from "../../../components/dashboard/navbar/Navbar"
import Datatable from "../../../components/dashboard/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List;