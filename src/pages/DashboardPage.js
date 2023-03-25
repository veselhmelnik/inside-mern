import Table from '../components/Table';
import Loader from '../components/Loader';
import { useGetUsersQuery, useGetSingleUserQuery } from '../store/usersApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const {userId} = useSelector((state) => state.authentication);
  const [update, setUpdate] = useState('');
  const {data = [], isLoading} = useGetUsersQuery();
  const {data: user} = useGetSingleUserQuery(userId);

  const filteredUserList = [data.find(el => el._id === userId)].concat(data.filter(el => el._id !== userId && el.isOnline === true));
  useEffect(() => {
    const i = setInterval(() => {
      setUpdate(Date.now());
    }, 30000);

    return () => clearInterval(i);
  }, [])
  
  if (isLoading) return <Loader/>

  return (
    <div>
      <Table userList={user && user.isOnline ? filteredUserList : []}/>
    </div>
  );
};

export default DashboardPage;
