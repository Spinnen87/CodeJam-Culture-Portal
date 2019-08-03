import React from 'react';
import ImageGallery from 'react-image-gallery';
import { translate } from 'react-i18next';
import './ImageGallery.css';
import Typography from '@material-ui/core/Typography';

const Gallery = ({ data, t }) => {
    return (
        <div id={'gallery'}>
            <Typography variant="h6" color="textSecondary" component="p" >
                {t('Gallery')}
            </Typography>
            <ImageGallery items={data.map(img => ({ original: img, thumbnail: img, originalClass: 'gallery' }))} />
        </div>
    )
}

export default translate()(Gallery);