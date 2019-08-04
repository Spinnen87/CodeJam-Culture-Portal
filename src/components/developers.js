import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    button: {
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
}));

const team = [
    {
        name: 'Andrey Aksenov',
        nickname: 'aksr666',
        gitHub: 'https://github.com/aksr666',
        src: 'https://avatars3.githubusercontent.com/u/47743186?s=460&v=4',
        description: 'Teamlead. Gatsby + i18nnext'
    },
    {
        name: 'Alexandrina Lizurchik',
        nickname: 'alexalizurchik',
        gitHub: 'https://github.com/alexalizurchik',
        src: 'https://avatars2.githubusercontent.com/u/40288176?s=460&v=4',
        description: 'Project menager'
    },
    {
        name: 'Maxim Semikov',
        nickname: 'Spinnen87',
        gitHub: 'https://github.com/Spinnen87',
        src: 'https://avatars0.githubusercontent.com/u/10222003?s=460&v=4',
        description: 'Material-UI'

    },
    {
        name: 'Andrey Markushevsky',
        nickname: 'PresidentsBoyfriend',
        gitHub: 'https://github.com/PresidentsBoyfriend',
        src: 'https://avatars1.githubusercontent.com/u/41293675?s=460&v=4',
        description: `Contentful`
    }
]

const Developers = ({ developers, aboutDevelopers }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" margin='dense' gutterBottom>{developers}</Typography>
            <Typography variant="h5" margin='dense' align='center' gutterBottom>Dream Team!</Typography>
            <Typography variant="subtitle1" margin='dense' gutterBottom>{aboutDevelopers}</Typography>
            <Container maxWidth="lg" className={classes.cardGrid} >
                <Grid container spacing={2}>
                    {team.map((item, i) =>
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={<Avatar aria-label="recipe" className={classes.avatar}>{item.name[0]}</Avatar>}
                                    title={item.name}
                                    subheader={item.nickname}
                                />
                                <CardMedia className={classes.media} image={item.src} title="Paella dish" />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href={item.gitHub}>GitHub</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </React.Fragment>
    )
};

export default Developers;