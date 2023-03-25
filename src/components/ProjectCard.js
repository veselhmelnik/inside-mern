import { Card, Checkbox, Modal, Tooltip } from "antd";
import { CheckOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PROJECT_LINK } from "../utils/constants";
import { useUpdateUserMutation } from "../store/usersApi";

const ProjectCard = ({ workType, work, userId }) => {
  const [updateUser] = useUpdateUserMutation();
  let projectInfo = {
    project: work,
  };

  const onChange = (values) => {
    projectInfo.values = values;
  };

  const sendProject = () => {
    console.log(projectInfo);
  };

  const finishProject = async () => {
    const body = {
      work: "",
      workType: "",
      time: Date.now(),
      status: "waiting",
    };
    await updateUser({ body, userId: userId });
  };

  const options = [
    {
      label: "Останнiй на сьогоднi",
      value: "last",
    },
    {
      label: "Class Valuations",
      value: "class",
    },
  ];

  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: "Вiдправити проект на перевiрку?",
      content: (
        <div>
          <Checkbox.Group
            onChange={onChange}
            options={options}
          ></Checkbox.Group>
        </div>
      ),
      onOk: sendProject,
      onCancel() {
        console.log("Cancel");
      },
      okText: "Так",
      cancelText: "Нi",
    });
  };

  if (work && workType) {
    return (
      <Card
        className="workInfo"
        title="Проект"
        size="small"
        actions={[
          <div>
            <Tooltip placement="bottomLeft" title="на перевiрку">
              <RightOutlined onClick={showConfirm} />
            </Tooltip>
          </div>,
          <Tooltip placement="bottomLeft" title="завершити проект">
            <CheckOutlined onClick={finishProject} />
          </Tooltip>,
        ]}
      >
        <div className="project">
          {workType === "project" ? (
            <Link to={PROJECT_LINK + work} target="_blank">
              {work}
            </Link>
          ) : (
            work
          )}
        </div>
      </Card>
    );
  }
  return <></>;
};


export default ProjectCard;
