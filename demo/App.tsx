import React, { ChangeEvent, useState } from 'react'
import { Input, Typography, Form } from 'antd'
import { unitCoin } from '../src/index'
const { Title } = Typography

function App() {
  const [result, setResult] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const num = Number(value)

    try {
      setResult(unitCoin(num))
    } catch (error) {
      setResult(error.message)
    }
  }

  return (
    <div className="App" style={{maxWidth: '600px', margin: 'auto'}}>
      <Title level={2}>UnitCoin</Title>

      <Form>
        <Form.Item label="输入值">
          <Input onChange={onChange} />
        </Form.Item>

        <Form.Item label="结果">
          {result}
        </Form.Item>
      </Form>
    </div>
  )
}

export default App
