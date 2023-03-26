import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { useGetUsersQuery } from "../../store/usersApi";
import { TableFilters } from "./TableFilters";
import "./coordinatorPage.css";
import CoordTable from "./CoordTable";

export const CoordinatorPage = () => {
  const [filterValue, setFilterValue] = useState(null);
  const { data = [] } = useGetUsersQuery();
  const [update, setUpdate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const filterHandler = (value) => {
    setFilterValue(value);
  };

  useEffect(() => {
    setFilteredData(data.filter(user => user.isOnline));
    const i = setInterval(() => {
      setUpdate(Date.now());
    }, 30000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    switch (filterValue) {
      case "Всi":
        return setFilteredData(data.filter(user => user.isOnline));
      case "В очiкуваннi":
        return setFilteredData(
          data.filter((user) => user.userStatus === "waiting")
        );
      case "В роботi":
        return setFilteredData(
          data.filter((user) => user.userStatus === "working")
        );
      case "10 хвилин":
        return setFilteredData(
          data.filter((user) => user.userStatus === "10min")
        );
      case "AFK":
        return setFilteredData(
          data.filter((user) => user.userStatus === "afk")
        );
      default:
        return setFilteredData(data); 
    }
  }, [filterValue, data]);

  return (
    <div className="coordinator-page">
      <div className="coordinator-table">
        <TableFilters filterHandler={filterHandler} />
        <CoordTable userList={filteredData}/>
      </div>
      <div className="check-table">Check Table</div>
    </div>
  );
};
