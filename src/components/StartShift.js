import { Checkbox, Select } from "antd";
import { useState } from "react";
import { useUpdateUserMutation } from "../store/usersApi";
import { shiftTimeOptions } from "../utils/constants";

const StartShift = ({user}) => {
    const [shift, setShift] = useState("");
    const [isCoordinator, setIsCoordinator] = useState(false);
    const [updateUser] = useUpdateUserMutation();

    const shiftHandler = async () => {
        const body = {
          isOnline: true,
          isCoordinator: isCoordinator,
          shift: shift,
          time: Date.now(),
          userStatus: 'waiting'
        };
        await updateUser({body, userId: user._id}).unwrap();
      };

  return (
    <div className="startShift">
        <div className="shiftSelect">
        <Select
          name="shift"
          defaultValue="Вибір зміни"
          onChange={(e) => setShift(e)}
          options={shiftTimeOptions}
        />
      </div>
      <div className="coordinatorCheck">
        <Checkbox onChange={(e) => setIsCoordinator(e.target.checked)} />{" "}
        <span>Координатор</span>
      </div>
      <button onClick={shiftHandler}>Розпочати змiну</button>
    </div>
  );
};

export default StartShift;
