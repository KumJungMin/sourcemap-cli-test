import './ErrorTrigger.css'

function ErrorTrigger() {
  const throwRuntimeError = () => {
    // This will throw a runtime error with a stack trace
    throw new Error('This is a runtime error from ErrorTrigger component!')
  }

  const handleClick = () => {
    throwRuntimeError()
  }

  return (
    <div className="error-trigger">
      <button onClick={handleClick} className="error-btn">
        Trigger Error
      </button>
    </div>
  )
}

export default ErrorTrigger
