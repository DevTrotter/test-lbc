import React from 'react'
import StyledContact from './StyledContact';
import { VscSettings } from 'react-icons/vsc';
import { SearchBar } from '../SearchBar/SearchBar';
import { ListContact } from '../ListContact/ListContact';

export const Contact = () => {
  return (
    <StyledContact>
      <div className='header-contact'>
        <h1>Contact</h1>
        <VscSettings/>
      </div>
      <SearchBar/>
      <ListContact/>
    </StyledContact>
  )
}
