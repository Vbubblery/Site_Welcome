import Layout from '../components/MyLayout';
import Fullpage from '../components/Fullpage';
import React from 'react';
import dynamic from 'next/dynamic'
import NoSsr from '@material-ui/core/NoSsr';
//const Fullpage = dynamic(() => import('../components/Fullpage'),{ssr: false})

class Index extends React.Component{
  constructor(props){
    super(props)
  }
   
  render(){
    return (
      <React.Fragment>
      <Layout>
        <NoSsr>
          <Fullpage />
        </NoSsr>
      </Layout>
      </React.Fragment>
    )
  }
}

export default Index;