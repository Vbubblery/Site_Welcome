import React from 'react';
import Head from 'next/head';
import Header from './Header'
import Footer from './Footer'
//<Footer copyright="Juncheng ZHOU" />
class Layout extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
    <React.Fragment>
      <Header />
      {this.props.children}
    </React.Fragment>
    )
  }
}

export default Layout;