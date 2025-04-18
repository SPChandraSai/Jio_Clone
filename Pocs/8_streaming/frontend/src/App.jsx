import './App.css'

function App() {

  return (
    <>
      <h2>Streaming Video Player</h2>
      <video controls height={500}>
        <source src="http://localhost:3000/rangestreaming" type='video/mp4'/>
      </video>
    </>
  )
}

export default App
