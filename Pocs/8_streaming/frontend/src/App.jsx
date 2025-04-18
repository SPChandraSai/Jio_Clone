import './App.css'

function App() {

  return (
    <>
      <h2>Streaming Video Player</h2>
      <video controls height={500}>
        <source src="https://localhost:3000/streamfile" type='video/mp4'/>
      </video>
    </>
  )
}

export default App
