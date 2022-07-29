import React, { useState } from 'react'
import StyledSearchBar from './StyledSearchBar'

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <StyledSearchBar>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Search"/>
    </StyledSearchBar>
  )
}
