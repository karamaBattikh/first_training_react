import styled from 'styled-components';

const withUserDetailStyle = (WrappedComponent) => styled(WrappedComponent)`
  width : 70%;
  margin : 0;
  padding : 0;
  text-align : left;
  .user-title{
    margin-left: 30%;
    text-align : center;
  }

  h4, h3 {
    display: inline-block;
  }
  span {
    display: block;
  }
  .user__detail{
    display: block;
    font-size: 1em;
    border: 2px solid black;
    border-radius: 2px;
    margin : 2% 20% 15% 30%;
    width : 80%;
    color: none;
  }
  .user__detail-button{
    margin: 2% 12% 2% 12%;
    width : 25%;
    padding: 0.5em;
  }
  .user-submit-error-block{
    text-align : left;
    color: red;
    margin: 2%;
  }
`;

export default withUserDetailStyle;
