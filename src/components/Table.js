import TableItem from "./TableItem";

const Table = ({userList}) => {

  return (
    <table className="dashboardTable highlight">
      <thead style={{ backgroundColor: "#997a62" }}>
        <tr>
          <th>Нiк</th>
          <th>Змiна</th>
          <th>Статус</th>
          <th style={{ width: "35%" }}>Проект</th>
          <th style={{ width: "3%" }}></th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user) => {
        
              return <TableItem user={user}/>
            
          })}
      </tbody>
    </table>
  );
};

export default Table;
