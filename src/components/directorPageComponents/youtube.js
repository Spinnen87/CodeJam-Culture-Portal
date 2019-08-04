import React from 'react';
import ModalVideo from 'react-modal-video';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import 'react-modal-video/css/modal-video.min.css';

const useStyles = makeStyles(theme => ({
    typography: {
        textAlign: 'center',
        margin: `${theme.spacing(7)}px auto`,
        fontWeight: 'bold',
        color: lightBlue[600]
    },
    btn: {
        backgroundColor: lightBlue[600],
        color: '#fff',
        fontWeight: 'bold'
    }
}));

const YoutubeWrapper = ({ children, handler, name }) => {
    const classes = useStyles();
    return (
        <div id={'youtube'}>
            <Typography className={classes.typography} variant="h4" color="textSecondary" component="p" >
                {'Youtube'}
            </Typography>
            {children}
            <Button className={classes.btn} onClick={handler} fullWidth={true} variant="contained" color="primary">{name}</Button>
        </div>
    )
}

class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    onOpneHandler() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <YoutubeWrapper handler={() => this.onOpneHandler()} name={this.props.t('Show video')}>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.data} onClose={() => this.setState({ isOpen: false })} />
            </YoutubeWrapper>
        )
    }
}

export default translate()(Youtube); 