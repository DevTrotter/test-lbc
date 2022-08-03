import styled from 'styled-components'

const StyledCardContact = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  transition: 300ms;
  .contact-container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
    }
    .name-container{
      margin-left: 12px;
      h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        transition: 300ms;
      }
      p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 12px;
        color: #99A1AB;
      }
    }
  }
  span{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    color: #99A1AB;
  }
  .custom-bar{
    position: absolute;
    left: -8px;
    width: 12px;
    height: 40px;
    background: #FF6E14;
    border-radius: 14px;
    opacity: 0;
    transition: 300ms;
  }

  :hover{
    background: #F0F3F6;
    .contact-container{
      .name-container{
        h1{
          color: #FF6E14;
        }
      }
    }
    .custom-bar{
      opacity: 1;
    }
  }
`

export default StyledCardContact