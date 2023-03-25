import { Link } from "react-router-dom";
import { PROJECT_LINK } from "../utils/constants";

const ProjectSwitcher = ({ work, workType }) => {
    switch (workType) {
      case "project":
        return (
          <>
            <span className="workType">ПРОЕКТ: </span> {" "}
            <Link to={PROJECT_LINK + work} target="_blank">
              {work}
            </Link>
          </>
        );
      case "request":
        return <><span className="workType">ЗАПИТ: </span>{work}</>;
      case "exam":
        return (
          <>
            <span className="workType">ПЕРЕВIРКА: </span>{" "}
            <Link to={PROJECT_LINK + work} target="_blank">
              {work}
            </Link>
          </>
        );
      default:
        return ``;
    }
  };

  export default ProjectSwitcher;