import styled from 'styled-components'

const StyledMessage = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
  ${({ isUser }) => isUser ? `
      align-items: center;
      justify-content: flex-end;
    ` :
    `
      align-items: center;
      justify-content: flex-start;
    `
    }
  .container-message{
    width: 50%;
    padding: 14px 14px 28px 14px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    position: relative;
    ${({ isUser }) => isUser ? `
      background: #FF6E14;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 12px 0px 12px 12px;
    ` :
    `
    background: #0080FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 12px 12px 12px;
    `
    }
    span{
      position: absolute;
      bottom: 4px;
      right: 8px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      color: #FFFFFF;
    }
  }

`

export default StyledMessage