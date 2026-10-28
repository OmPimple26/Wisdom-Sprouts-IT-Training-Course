import './App.css'
import Card from './components/Card'

function App() {

  const isDark = false;

  return (
    <div style={{backgroundColor:'violet', height:'100vh'}}>
      <h1>This is parent component</h1>
      <Card dark={isDark}/>
    </div>
  )
}

export default App