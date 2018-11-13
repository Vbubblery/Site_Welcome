import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import me from '../../utils/images/me.jpg'
import purple from '@material-ui/core/colors/purple';

const font = {
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

export default class AboutSection extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        <div className={'section'} style={{height: '100%',backgroundImage: 'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)'}}>
          <Typography align="center" color='primary' style={font} variant="h3" gutterBottom>
              Hello, Detail is coming soon....
          </Typography>
          <div align="center">
            <CircularProgress style={{ color: purple[500], margin:40 }} thickness={7} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}