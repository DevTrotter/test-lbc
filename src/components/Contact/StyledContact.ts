import styled from 'styled-components'

const StyledContact = styled.section`
  width: 100%;
  background: #FFFFFF;
  .header-contact{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #FF6E14;
    }
    svg{
      width: 24px;
      height: 24px;
      color: #99A1AB;
    }
  }
`

export default StyledContact
