import styled from 'styled-components';

const withUserListStyle = (WrappedComponent) => styled(WrappedComponent)`
  display: block;
  width : 95%;
  margin : auto;
  padding : 0;
  .list-user__title{
    text-align : center;
  }
  .list-user__table--border{
    font-size: 1em;
    border: 2px solid black;
    border-radius: 2px;
  }
  .list-user__button{
    margin: 1%;
    width : 30%;
    padding: 0.5em;
  }
  .list-user__button--add{
    margin: 1% 1% 1% 80%;
    width : 20%;
    padding: 0.5em;
  }
`;

export default withUserListStyle;
