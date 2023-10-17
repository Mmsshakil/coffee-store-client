
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();

  // after delete the coffee will also delete from the page
  // don't need to reload the page
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>

      <div className='m-5'>
        <h1 className='text-xl font-bold text-center'>Hot Cold Coffee: {coffees.length}</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
