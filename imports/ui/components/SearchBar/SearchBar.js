import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";


const SearchBar = ({ classes,onChange }) => {
    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                onChange={e => onChange(e.target.value)}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
            />
        </div>
    );
}


SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};
  
export default withStyles(styles)(SearchBar);