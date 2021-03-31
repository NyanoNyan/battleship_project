import DispalyBoard from "./components/DisplayBoard.js"

const App = () => {

  const onClick = (e) => {
    e.target.textContent = "X"
  }

  return (
    <div>
      <DispalyBoard 
        onClick = {onClick}
      />
    </div>
  )
}

export default App;
