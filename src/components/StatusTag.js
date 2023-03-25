import React from 'react'
import { Tag } from 'antd'

const StatusTag = ({status, text}) => {

    const tagSwitcher = (status, text) => {
        switch (status) {
          case 'working':
            return <Tag color='green'>{text}</Tag>
          case 'waiting':
            return <Tag color='magenta'>{text}</Tag>
          case '10min':
            return <Tag color='orange'>{text}</Tag>
          case 'afk':
            return <Tag>{text}</Tag>
          default: 
            return ''
        }
      }
  return (
    <div>{tagSwitcher(status, text)}</div>
  )
}

export default StatusTag