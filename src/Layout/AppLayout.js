import { Layout } from "antd";
import Navbar from "./Navbar";
import './layout.css'
import Sidebar from "./Sidebar";

const AppLayout = ({children}) => {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout style={{height: '100%'}}>
      <Layout>
        <Header><Navbar/></Header>
        <Content>{children}</Content>
      </Layout>
      <Sider><Sidebar/></Sider>
    </Layout>
  );
};

export default AppLayout;
