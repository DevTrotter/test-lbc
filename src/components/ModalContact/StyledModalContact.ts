import styled from 'styled-components'

const StyledModalContact = styled.form`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div{
    button{
      margin: 12px 8px;
      border: none;
      cursor: pointer;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
    button:nth-child(1){
      color: white;
      background-color: #FF6E14;

      padding: 4px 8px;
      border-radius: 4px;
    }
    button:nth-child(2){
      color: #99A1AB;
      background-color: white;
    }
  }
  select{
    cursor: pointer;
    height: 36px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #99A1AB;
    border: none;
    background: #F0F3F6;
    border-radius: 6px;
    padding: 4px;
  }
`

export default StyledModalContact