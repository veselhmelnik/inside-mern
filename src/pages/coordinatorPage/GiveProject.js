import { Input, Select } from "antd";
import React, { useState } from "react";
import { useUpdateUserMutation } from "../../store/usersApi";

const GiveProject = ({userId}) => {
  const [projectData, setProjectData] = useState([]);
  const [updateUser] = useUpdateUserMutation();

  const selectHandler = (e) => {
    setProjectData({ ...projectData, workType: e });
  };
  const inputHandler = (e) => {
    setProjectData({ ...projectData, work: e.target.value });
  };

  const sendData = () => {
    const body = {
        ...projectData,
        time: Date.now(),
        userStatus: 'working'
    }
    updateUser({body, userId});
  }
  return (
    <div className="give-project">
      <Select
        style={{width: '7.5rem'}}
        name="position"sa
        onChange={selectHandler}
        options={[
          {
            value: "project",
            label: "Проект",
          },
          {
            value: "request",
            label: "Запит",
          },
          {
            value: "exam",
            label: "Перевiрка",
          },
          {
            value: "check",
            label: "Чек",
          },
          {
            value: "other",
            label: "Iнше",
          },
        ]}
      />
      <Input onChange={inputHandler}/>
      <button onClick={sendData}>+</button>
    </div>
  );
};

export default GiveProject;
