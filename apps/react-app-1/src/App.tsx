import Button from './components/Button'
import ErrorTrigger from './components/ErrorTrigger'
import './App.css'

function App() {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div className="app">
      <h1>React App 1</h1>
      <Button label="Click me!" onClick={handleClick} />
      <ErrorTrigger />
    </div>
  )
}

export default App
