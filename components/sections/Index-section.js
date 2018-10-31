import React from 'react';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Clock from 'react-live-clock';
import me from '../../utils/images/me.jpg'
import Avatar from '@material-ui/core/Avatar';
export default class IndexSection extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const theme = createMuiTheme({
      palette: {
        primary: { main: '#ffffff' }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
      },
      typography: {
        useNextVariants: true,
      },
    });
    const today = new Date();
    const curHr = today.getHours();
    let salut;
    if (curHr < 12) 
      salut = 'Good morning';
    else if (curHr < 18)
      salut = 'Good afternoon';
    else
      salut = 'Good evening';
    return(
      <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <div className={'section'} style={{height: '100%',backgroundImage: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)'}}>
          <div className="slide">
            <Typography align="center" color='primary' variant="h1" gutterBottom>
              <Clock format={'HH:mm:ss'} ticking={true} />
            </Typography>
            <div align="center">
              <Avatar alt="ZHOU" src={me} style={{width:100,height:100}}/>
            </div>
            <Typography align="center" color='primary' variant="h3" gutterBottom>
              {salut}, ZHOU 
            </Typography>
          </div>
        </div>
      </MuiThemeProvider>
      </React.Fragment>
    )
  }
}