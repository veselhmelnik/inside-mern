import { Avatar} from "antd";
import avatar from "../assets/avatar.png";
import { timeCounter } from "../utils/parsers";
import StatusTag from "./StatusTag";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProjectSwitcher from "./projectSwitcher";

const TableItem = ({ user }) => {
  const statusText = `${user.userStatus} ${timeCounter(user.time)}`;
  return (
    <tr key={user._id} className="tableItem">
      <td>
        <div className="dashboardTable_info">
          <div className="dashboardTable_avatar">
            <Avatar src={user.avatar ? user.avatar : avatar} />
          </div>
          <div>
            <div>{user.userName}</div>
            <div className="dashboardTable_position">{user.position}</div>
          </div>
        </div>
      </td>
      <td>{user.shift}</td>
      <td>
        <StatusTag status={user.userStatus} text={statusText} />
      </td>
      <td>
        <ProjectSwitcher work={user.work} workType={user.workType} />
      </td>
      <td>
          <BsThreeDotsVertical className="dashboardTable_dropMenu" />
      </td>
    </tr>
  );
};


export default TableItem;
