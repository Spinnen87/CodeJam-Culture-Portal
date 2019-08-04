import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    listItemText: {
        '&:hover': {
            color: lightBlue[600],
        }
    },
}));

const DirectorsListItem = ({ title, avatar, birthDate, deathDate, description }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={title} src={avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={title}
                    className={classes.listItemText}
                    secondary={
                        <React.Fragment>
                            <Typography component="span" variant="body2" color="textPrimary">
                                {`${birthDate}-${deathDate}`}<br />{description}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    )
}

export default DirectorsListItem;