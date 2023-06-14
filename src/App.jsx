
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Productos from "./componentes/Productos/productos"

const App = () => {
  return (
    <>
      <ItemListContainer saludo={"Bienvenidos a BlueBubble!!!"} />
      <NavBar/>
      <br/>
      <Productos/>

    </>

  )
}

export default App

