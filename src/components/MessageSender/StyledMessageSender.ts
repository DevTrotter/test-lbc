import styled from 'styled-components'

const StyledMessageSender = styled.form`
  display: flex;
  align-items: center;
  padding: 18px 24px;
  background: #FFFFFF;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.15);
  input{
    width: 100%;
    border: none;
    background: #F0F3F6;
    border-radius: 6px;
    height: 32px;
    padding: 6px 12px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #99A1AB;
  }
  input::placeholder{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #99A1AB;
  }
  button{
    border: none;
    background-color: #FFFFFF;
    svg{
      width: 36px;
      height: 36px;
      color: #FF6E14;
      margin-left: 20px;
      cursor: pointer;
    }
  }
`

export default StyledMessageSender
