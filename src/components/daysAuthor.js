import React from 'react';
import { Link } from 'gatsby-plugin-i18next';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        display: 'flex',
        minHeight: 250,
    },
    cardTitle: {
        marginBottom: theme.spacing(3),
    },
    cardDetails: {
        flex: 1,
        margin: theme.spacing(1),
    },
    cardMedia: {
        width: 200,
    },
    button: {
        minWidth: 150,
        marginTop: theme.spacing(3),
    }
}));


const CollisionLink = React.forwardRef((props, ref) => (
    <Link to={'/cvetkov'} {...props} />
));

export default function DaysAuthor(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" align="center" gutterBottom>
                {props.title}
            </Typography>
            <Grid container spacing={4} className={classes.cardGrid}>
                <Grid item xs={12} md={12} >
                    <Card className={classes.card}>
                        <div className={classes.cardDetails} >
                            <CardContent>
                                <Typography component="h2" variant="h5" className={classes.cardTitle}>
                                    {props.author}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {props.authorDescription}
                                </Typography>
                                <Button variant="contained" component={CollisionLink} color="primary" className={classes.button}>
                                    {props.btn}
                                </Button>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://www.sb.by/upload/iblock/b57/b57fc08d48e7c2fda85ca0963ea42ef3.jpg"
                                title={props.author}
                            />
                        </Hidden>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

