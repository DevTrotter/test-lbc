import styled from 'styled-components'

const StyledSearchBar = styled.div`
  padding: 16px 22px;
  position: relative;
  input{
    width: calc(100% - 46px);
    border: none;
    background: #F0F3F6;
    border-radius: 6px;
    height: 32px;
    padding: 6px 6px 6px 40px;
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
  svg{
    position: absolute;
    top: 26px;
    left: 28px;
    width: 24px;
    height: 24px;
    color: #99A1AB;
  }
`

export default StyledSearchBar