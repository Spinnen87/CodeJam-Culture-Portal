import React from 'react';
import { translate } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Gallery = ({ data, t }) => {
    return (
        <div id={'gallery'}>
            <Typography variant="h6" color="textSecondary" component="p" >
                {t('Gallery')}
            </Typography>
            <Carousel centerMode={false} infiniteLoop={true} showThumbs={false}>
                {data.map((img, i) => <div key={i}><img className={'gallery'} src={img} /></div>)}
            </Carousel>
        </div>
    )
}

export default translate()(Gallery);
