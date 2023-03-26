import CoordTableItem from "./CoordTableItem";

const CoordTable = ({ userList }) => {
  return (
    <table className="dashboardTable highlight">
      <thead style={{ backgroundColor: "#997a62" }}>
        <tr>
          <th>Нiк</th>
          <th style={{ width: "5%" }}>Змiна</th>
          <th style={{ width: "10%" }}>Статус</th>
          <th style={{ width: "35%" }}>Проект</th>
          <th style={{ width: "1%" }}></th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user) => {
          return <CoordTableItem user={user} />;
        })}
      </tbody>
    </table>
  );
};

export default CoordTable;
