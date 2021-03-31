import DisplayBoard from "./components/DisplayBoard.js"

const App = () => {

  const onClick = (e) => {
    e.target.textContent = "X"
  }

  return (
    <div>
      <DisplayBoard 
        onClick = {onClick}
      />
    </div>
  )
}

export default App;
