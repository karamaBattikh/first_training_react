import styled from 'styled-components';

const withAddUserStyle = (WrappedComponent) => styled(WrappedComponent)`

  .form-add__title{
    text-align : center;
  }
  .form-add{
    display: block;
    width : 50%;
    margin: auto;
    padding: 10px 50px;
    box-sizing: border-box;
    color: none;
    font-size: 1em;
    border: 2px solid black;
    border-radius: 2px;
    overflow: hidden;
  }
  .form-add__input{
    margin: 20px 0;
    label {
      width : 20%;
      display: inline-block;
    }
    input {
      display: inline-block;
      padding: 0.75em;
      width : 75%;
    }
    
  }
  .form-add__button{
    display: block;
    float: right;
  }
  .form-add__button--submit,
  .form-add__button--reset {
    width: 80px;
    height: 30px;
    border: 0;
    outline: none;
    border-radius: 25px;
    margin-left: 25px;
    cursor: pointer;
  }

`;

export default withAddUserStyle;
