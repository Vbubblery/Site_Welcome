import React from 'react';

export default class AiSection extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <React.Fragment>
        <div className={'section'} style={{backgroundImage: 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)'}} >
          <div className="slide">1</div>
          <div className="slide">2</div>
          <div className="slide">3</div>
          <div className="slide">4</div>
        </div>
      </React.Fragment>
    )
  }
}