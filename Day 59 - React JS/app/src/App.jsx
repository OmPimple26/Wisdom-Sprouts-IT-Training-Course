import Cards from "./components/Cards"
import NavigationBar from "./components/NavigationBar"


const App = () => {
  return (
    <>
      <NavigationBar/>
      <h1 className="bg-primary text-center py-4 text-danger fs-4">Hello</h1>
      <Cards/>
    </>
  )
}

export default App