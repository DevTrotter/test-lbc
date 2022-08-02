import React, { useState } from 'react'
import StyledSearchBar from './StyledSearchBar'
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <StyledSearchBar>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Search"/>
      <AiOutlineSearch/>
    </StyledSearchBar>
  )
}
