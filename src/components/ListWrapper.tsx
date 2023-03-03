import React from 'react';
import {Row} from 'antd'

interface InerProps {
   children: React.ReactNode
}
const ListWrap = (props: InerProps) => {
   const {children} = props
   return (
      <div>
         <Row gutter={16}>
            {children}
         </Row>
      </div>
   )
}

export default ListWrap