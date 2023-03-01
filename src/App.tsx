import { FC, CSSProperties } from 'react'
import './App.css'
import {Layout, Menu } from 'antd'

const {Header, Content, Footer} = Layout

const HeaderStyle: CSSProperties = {

}

const LayoutStyle: CSSProperties = {
  padding: '10px',
  margin: 0
}

const App: FC = () => {


  return (
    <Layout style={LayoutStyle}>
      <Header style={HeaderStyle}>
      <div className="logo" />
      </Header>
    </Layout>
  )
}

export default App
