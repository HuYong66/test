import React from 'react'
import { Component as PureComponent } from './react-source-code-2/k-react-component'
import ReactDOM, { useState } from './react-source-code-2/k-react-dom'
import './index.css'

export function TestFunc({ name }) {
  const [count, setCount] = useState(1)
  const obj = count % 2 ? { className: 'red' } : { onClick: () => console.log('000') }
  // console.log('function-render', count, name)
  return (
    <div className="border">
      这里是函数组件,
      {count}
      <div {...obj}>00000</div>
      <div>
        {
        count % 2 ? '奇数' : '偶数'
      }
        <br />
        {
        count % 2 ? <h4>奇数</h4> : <p>偶数</p>
      }
      </div>
      {name}
      <button type="button" onClick={() => setCount((pre) => pre + 1)}>add</button>
    </div>
  )
}

export class TestClass extends PureComponent {
  render() {
    return (
      <div>
        这里是class组件
        {this.props.name}
      </div>
    )
  }
}

const jsx = (
  <div className="border">
    <TestFunc name="alex" />
    <TestClass name="火蜘蛛" />
    <p>这是一个文本</p>
    <a href="https://baidu.com">开课吧</a>
    <div className="border">
      <h5>hello</h5>
      <button type="button" onClick={() => { console.log('click') }}>点击</button>
    </div>
    <>
      <h1>111</h1>
      <h1>222</h1>
    </>
    {[1, 2, 3].map((num) => <p key={num}>{num}</p>)}
  </div>
)

ReactDOM.render(
  jsx,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
