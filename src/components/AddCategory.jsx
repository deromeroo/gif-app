/* eslint-disable react/prop-types */
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState()

  const onInputChanged = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const newInputvalue = inputValue.trim()
    if (newInputvalue.length <= 1) return

    onNewCategory(newInputvalue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit} className='section'>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  )
}
