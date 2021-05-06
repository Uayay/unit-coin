import React, { ChangeEvent } from 'react'
import { Input } from 'antd'
import { unitCoin } from '../src/index'

function App() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const num = Number(value)
    console.log(unitCoin(num))
  }

  return (
    <div className="App" style={{maxWidth: '1024px', margin: 'auto'}}>
      <Input onChange={onChange} />
    </div>
  )
}

export default App
