import { useState } from 'react'


function App() {
  // data模型 定义数据变量和setter（类似与vue中的data对象） useState要待一个初始化参数
  const [count, setCount] = useState(10)

  return (
    <div className="home">
       <h1>用户信息</h1>
    </div>
  )
}

export default App

