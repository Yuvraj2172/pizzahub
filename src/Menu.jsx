import Pizza from './Pizza'
import pizzaData from './data'
const Menu = () => {
  return (
    <main className='menu'>
        <h2>our menu</h2>
        {pizzaData.map((pizza, index)=>{
            return( <Pizza key={index} name={pizza.name} pic ={pizza.photoName} price = {pizza.price}/>)
        })}
        
    </main>
  )
}

export default Menu
