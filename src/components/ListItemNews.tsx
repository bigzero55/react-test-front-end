import * as React from 'react';
import {Col, Card} from 'antd'

interface theProps {
   key: number,
   author: string,
   title: string,
   OnTap: () => void
}
const ListItemNews = (props: theProps) => {
   const {key, author, title, OnTap} = props
   return (
   <Col onClick={OnTap} key={key} span={8} style={{marginTop: '10px'}}>
      <Card hoverable title={author} bordered={false}>
        <div>
        {title}
        </div>
      </Card>
    </Col>
   )
}

export default ListItemNews;