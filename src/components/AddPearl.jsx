import { useState } from 'react'

const AddPearl = () => {

    // States
    const [inputValue, setInputValue] = useState('');

  return (
    <input 
        type="text"
        placeholder="Add a new pearl"
        value={inputValue}
    />
  )
}

export default AddPearl
