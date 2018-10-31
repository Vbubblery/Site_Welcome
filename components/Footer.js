import React from 'react'
import { FaNode,FaReact } from 'react-icons/fa';
import Link from 'next/link'
import PropTypes from 'prop-types'
import classNames from 'classnames';


//@material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
const styles = theme => ({
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.now = new Date();
    this.copyright = props.copyright;
  }
  handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
  }
  render(){
    return(  
      <React.Fragment>
        <footer className={classNames(this.classes.footer, this.classes.layout)}>
          <div align="center">
            <Chip label="Node.js" color="primary" onClick={this.handleClick} variant="outlined" icon={<FaNode size={38} />} />
            <Chip label="React.js" color="secondary" onClick={this.handleClick} variant="outlined" icon={<FaReact size={38} />}/>
            <Chip label="Next.js" variant="outlined" avatar={<Avatar>N</Avatar>} />
          </div>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            &copy;{this.now.getFullYear()} {this.copyright}
          </Typography>     
        </footer>
      </React.Fragment>        
  )}    
}
Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
}
export default withStyles(styles)(Footer)