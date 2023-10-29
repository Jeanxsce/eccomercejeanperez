
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.css'
import ItemCount from './components/ItemCount/ItemCount'
import ItemList from './components/ItemList/ItemList'
import Item from './components/Item/Item'


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
      <ItemList />
      <Item />
    </div>
  )
}

export default App
