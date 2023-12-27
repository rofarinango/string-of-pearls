import { useState } from 'react'
import AddPearl from './components/AddPearl';

const StringOfPearlsApp = () => {
    const pearlsData = [
        {
            id: 123,
            action: 'Exercise in the morning',
        },
        {
            id: 234,
            action: 'Started project',
        }
    ]
    // pearls is an item list that contains an action.
    // States
    const [pearls, setPearls] = useState([]);
    const [action, setAction] = useState('')

    // Handlers
    function handleChange(event) {
        setAction(event.target.value);
    }

    function handleAdd() {
        setPearls(prevPearls => [...prevPearls, ])
    }
  return (
    <div>
      <h1>String of Pearls</h1>
      <ul>
        {
            pearls.map((pearl)=>(
                <li key={pearl.id}>{pearl.action}</li>
            )) 
        }
      </ul>
      <div>
        <AddPearl/>
      </div>
    </div>
  )
}

export default StringOfPearlsApp
