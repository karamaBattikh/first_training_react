import styled from 'styled-components';

const withHeaderStyle = (WrappedComponent) => styled(WrappedComponent)`
  width : 100%;
  height: 3rem;
  margin : 0;
  padding : 0 20px;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 2px;
  background: #6495ED;
  display: flex;
  align-items: center;
  .header__Logo {
    display: block;
    img {
        width: 50px;
        margin: auto;
    }
  }
`;

export default withHeaderStyle;
