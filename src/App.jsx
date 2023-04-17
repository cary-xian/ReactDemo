import { useState } from 'react'
import { Link,Routes, Route, useNavigate } from "react-router-dom"
import './App.css'
import My from './views/my.jsx'
import Index from './views/index.jsx'
import Market from './views/market.jsx'
import Search from './views/search.jsx'
import About from './views/about.jsx'
import Registry from './views/registry.jsx'
import Login from './views/login.jsx'
import Shop from './views/shop.jsx'

function App(){
  // data模型 定义数据变量和setter（类似与vue中的data对象） useState要待一个初始化参数
  const [userid] = useState('')
  const [username] = useState('')
  const [welcome] = useState('请登陆')
  let navigate=useNavigate()
  const  logout = () =>{
      navigate('/login',{ replace: true })
      // react在页面已完成后有时会url更新时不会执行刷新操作，因此需要自行刷新
      navigate(0)
    
  }
  return (
    <div className="App">
        <div className="header">
            <div>
                <Link onClick={()=>logout()}>
                    <label>{userid}</label>
                    <label>{username}</label>
                    <label>{welcome}</label></Link>
            </div>
        </div>
        <div className="nav">
           <div className="nav-left"><Link to="/home">首页</Link></div>
           <div className="border"></div>
           <div className="nav-left"><Link to="/my">我的</Link></div>
           <div className="border "></div>
           <div className="logo" >网站logo</div>
           <div className="border"></div>
           <div className="nav-right"><Link to="/market">商城</Link></div>
           <div className="border"></div>
           <div className="nav-right search"><Link to="/search">收索</Link></div>
           <div className="border"></div>
           <div className=" nav-right"><Link to="/about">关于</Link></div>
        </div>
        <Routes id="view">
            <Route path="/" element={<Index />}></Route>
            <Route path="/home" element={<Index />}></Route>
            <Route path="/registry" element={<Registry />}></Route>
            <Route path="/market" element={<Market />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/my' element={<My />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
  )


}

export default App

