import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const ButtonTypes = [
    {
        type: 'Apply',
        onChange:()=>{}
    },
    {
        type: 'Pending',
        onChange:()=>{}
    },
    {
        type: 'Declined',
        onChange:()=>{}
    },
    {
        type: 'Delete',
        onChange:()=>{}
    },
];

const ButtonType = (owner,applied) => {
    let index;
    if (owner) {
        ButtonTypes.find((element)=>element.type='Delete');
     }
    return ButtonTypes;
}

JobItemButtons = ({ classes, owner, applied,status }) => {
    console.log(ButtonTypes.find((element) => element.type = 'Delete'))
  return (
    <div>
      <Button variant="contained" color="Primary" className={classes.button}>
        Delete
      </Button>
    </div>
  );
}

JobItemButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobItemButtons);