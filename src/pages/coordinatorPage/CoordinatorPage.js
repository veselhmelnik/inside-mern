import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { useGetUsersQuery } from "../../store/usersApi";

export const CoordinatorPage = () => {
    const {data = [], isLoading} = useGetUsersQuery();
    const [update, setUpdate] = useState('');

    useEffect(() => {
        const i = setInterval(() => {
          setUpdate(Date.now());
        }, 30000);
    
        return () => clearInterval(i);
      }, [])
  return (
    <div className="coordinator">
        <Table userList={data}/>
    </div>
  )
}