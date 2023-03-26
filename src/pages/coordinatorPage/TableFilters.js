import { Segmented } from 'antd';

export const TableFilters = ({filterHandler}) => {
    const list = ['Всi', 'В очiкуваннi', 'В роботi', '10 хвилин', 'AFK']
  return (

    <Segmented className='filter-list' options={list} onChange={filterHandler}/>

  )
}

