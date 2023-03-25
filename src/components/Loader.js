import { LoadingOutlined } from "@ant-design/icons";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: "2rem",
        fontSize: "80px",
      }}
    >
      <LoadingOutlined />
    </div>
  );
};

export default Loader;
