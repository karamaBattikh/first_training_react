import styled from 'styled-components';

const withMenuStyle = (WrappedComponent) => styled(WrappedComponent)`
  .menu-item{
    padding-left: 1rem;
    text-decoration: none;
    color: #FFFFFF;
  }
`;

export default withMenuStyle;
