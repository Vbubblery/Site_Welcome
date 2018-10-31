import Layout from '../components/MyLayout.js';
import React from 'react';
import dynamic from 'next/dynamic'

const Fullpage = dynamic(() => import('../components/Fullpage'),{ssr: false})

class Index extends React.Component{
  constructor(props){
    super(props)
  }
   
  render(){
    return (
      <React.Fragment>
      <Layout>
        <Fullpage />
      </Layout>
      </React.Fragment>
    )
  }
}

export default Index;