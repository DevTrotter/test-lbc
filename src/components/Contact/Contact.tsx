import React, { useEffect } from 'react'
import StyledContact from './StyledContact';
import { VscSettings } from 'react-icons/vsc';
import { SearchBar } from '../SearchBar/SearchBar';
import { ListContact } from '../ListContact/ListContact';
import { useDispatch } from 'react-redux';
import { fetchConversations } from '../../redux/action/messageActions';

export const Contact = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchConversations())
  },[])
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
