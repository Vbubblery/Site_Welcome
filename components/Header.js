import Link from 'next/link'
import Package from '../package'
import React from 'react';
import PropTypes from 'prop-types';
import z from '../utils/images/z.png'
//@material-ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { FaGithub,FaLinkedin} from 'react-icons/fa';
const styles = theme => ({
  appBar: {
    position: 'fixed',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
}
  render(){
    return (
      <React.Fragment>
        <AppBar position="static" style={{background:'rgba(0,0,0,0)'}} className={this.classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap className={this.classes.toolbarTitle}>
              <img src={z} style={{width:'140px',height:'50px'}}/>
            </Typography>
            <Button href='https://blog.4pro.me'>My Blog</Button>
            <Button color="primary" href="https://www.linkedin.com/in/juncheng-zhou-620657149/">
              <FaLinkedin size={20} />LinkedIn
            </Button>
            <Button color="primary" href="https://github.com/Vbubblery">
              <FaGithub size={20} />GitHub
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);