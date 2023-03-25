import { Avatar, Dropdown } from "antd";
import asd from "../assets/1.jpg";
import StatusBadge from "../components/StatusBadge";
import ProjectCard from "./ProjectCard";
import { useUpdateUserMutation } from "../store/usersApi";

const SideInfo = ({ user }) => {
  const [updateUser] = useUpdateUserMutation();

  const updateHandler = async (e) => {
    let body;
    if (e.key === "endShift") {
      body = {
        isOnline: false,
        isCoordinator: false,
        shift: "",
        time: "",
        work: "",
        workType: "",
      };
    } else {
      body = {
        userStatus: e.key,
        time: Date.now(),
      };
    }

    await updateUser({ body, userId: user._id });
  };

  const items = [
    {
      key: "working",
      label: "Working",
    },
    {
      key: "waiting",
      label: "Waiting",
    },
    {
      key: "10min",
      label: "10 min",
    },
    {
      key: "afk",
      label: "AFK",
    },
    {
      key: "endShift",
      label: "Завершити змiну",
      danger: true,
    },
  ];

  const menuProps = {
    items,
    onClick: updateHandler,
  };

  return (
    <div className="sideInfo">
      <div className="userInfo">
        <div className="user-avatar">
          <Dropdown
            menu={menuProps}
            placement="topRight"
            onClick={(e) => console.log(e.target)}
          >
            <div>
              <StatusBadge status={user.userStatus} />
            </div>
          </Dropdown>
          <Avatar src={asd}></Avatar>
        </div>
        <div className="mainInfo">
          <div className="nickname">{user.userName}</div>
          <div className="position">{user.position}</div>
        </div>
      </div>

      <ProjectCard
        workType={user.workType}
        work={user.work}
        userId={user._id}
      />
    </div>
  );
};

export default SideInfo;
