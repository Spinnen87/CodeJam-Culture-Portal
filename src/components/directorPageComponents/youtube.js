import React from 'react';
import 'react-modal-video/css/modal-video.min.css';
import ModalVideo from 'react-modal-video';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-i18next';

class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
                <Typography variant="h6" color="textSecondary" component="p" >
                    {'Youtube'}
                </Typography>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.data} onClose={() => this.setState({ isOpen: false })} />
                <button onClick={() => this.setState({ isOpen: true })}>{this.props.t('Show video')}</button>
            </div>
        )
    }
}

export default translate()(Youtube); 