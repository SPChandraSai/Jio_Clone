import './App.css'

function App() {
  async function openRazorPayCheckout(){
    // 1. making request to backend
    const resp=await fetch("http://localhost:3400/checkout",{method:"POST"});
    consoele.log("resp", resp);
  }
  return (
    <>
      <h1>Payment DEMO</h1>
      <a style={{cursor:"Pointer"}} onClick={openRazorPayCheckout}> Pay for 100 </a>
    </>
  )
}

export default App
