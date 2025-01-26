import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen dark bg-background flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold text-white'>Your number is {count}</h1>
      <br></br>
      <div className='flex space-x-4'>
        <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
        <Button onClick={() => setCount((count) => count - 1)}>Decrement</Button>
      </div>
      <p className='mt-4 text-sm text-gray-200' >Made with ❤️ by <a href="https://github.com/torisetxd">toriset</a></p>
    </div>
  )
}

export default App
