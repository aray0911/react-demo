import React from 'react'
import reactDom from 'react-dom';
import LoginBox from '../components/loginbox';
import "../style/style.css";

var root = document.createElement('div');
root.className += "flex flex-dir-top flex-main-center flex-cross-center";
root.style.height = "100vh";
root.id = "components-form-demo-normal-login";
reactDom.render(
  // <div >
  //   <LoginBox />
  // </div>,
  <LoginBox />,
  document.body.appendChild(root)
);
// reactDom.render((<LoginBox  />), document.getElementById("root"));