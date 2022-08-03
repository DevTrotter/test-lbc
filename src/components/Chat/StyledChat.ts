import styled from 'styled-components'

const StyledChat = styled.section`
  .header-chat{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 18px 24px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    svg{
      width: 36px;
      height: 36px;
      color: #FF6E14;
      cursor: pointer;
    }
    img{
      width: 36px;
      height: 36px;
      margin-left: 18px;
    }
    .text-container{
      margin-left: 8px;
      h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
      }

      span{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        color: #99A1AB;
      }
    }
  }
`

export default StyledChat