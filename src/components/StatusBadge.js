import React from 'react'
import { Badge } from 'antd';

const StatusBadge = ({status}) => {
    const count = ' ';

    const statusSwitcher = (status) => {
        switch (status) {
          case 'working':
            return '#52c41a'
          case 'waiting':
            return '#ff4d4f'
          case '10min':
            return '#faad14'
          case 'afk':
            return '#bfbfbf'
          default: 
          return 'gray'
        }
      }
  return (
    <Badge size="default" count={count} style={{ backgroundColor: statusSwitcher(status)}}/>
  )
}

export default StatusBadge