import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const font = {
  color:'#ffffff',
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

export default class ContactSection extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        <div className={'section'} style={{height: '100%',backgroundImage: 'linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)'}}>
          <Typography align="center" style={font} variant="h3" gutterBottom>
              Hello, Contact approach is coming soon....
          </Typography>
          <div align="center">
            <CircularProgress style={{ color: '#ffffff', margin:40 }} thickness={7} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}