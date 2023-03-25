import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import SideInfo from "../components/SideInfo";
import StartShift from "../components/StartShift";
import { useGetSingleUserQuery} from "../store/usersApi";
import Logout from "../components/Logout";

const Sidebar = () => {
  const {userId} = useSelector((state) => state.authentication);
  const {data: user, isLoading} = useGetSingleUserQuery(userId);

  if (isLoading) return <div className="sidebar"><Loader/></div>
  
  return (
    <div className="sidebar">
      {user && user.isOnline ? <SideInfo user={user}/> : <StartShift user={user}/>}
      <Logout userId={userId}/>
    </div>
  );
};

export default Sidebar;
