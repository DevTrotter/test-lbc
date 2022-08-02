import styled from 'styled-components'

const StyledCardContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  position: relative;
  overflow: hidden;
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
  }

  :hover{
    h1{

    }
    p{

    }
    span{

    }
    .custom-bar{
      
    }
  }
`

export default StyledCardContact