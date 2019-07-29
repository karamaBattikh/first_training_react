import styled from 'styled-components';

const withMenuStyle = (WrappedComponent) => styled(WrappedComponent)`
  width : 100%;
  height: 2rem;
  margin : 0;
  padding : 0;
  text-align : left;
  color: black;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 2px;
  background: #6495ED;
  .menu-item{
    padding: 1rem;
    vertical-align: middle;
    text-align : center;
    text-decoration: none;
    color: #FFFFFF;
  }
`;

export default withMenuStyle;
