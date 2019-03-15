import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});
class FolderList extends React.Component {
    state = {
        selectedIndex: 1,
    };
    handleListItemClick = (event, index) => {
        this.setState({selectedIndex: index});
    };
    render() {
        const {classes}=this.props;
        return (
            <List className={classes.root}>
                <ListItem
                    button
                    onClick={() => this.handleListItemClick(0)}
                >
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit">
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        );
    }
}
FolderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);