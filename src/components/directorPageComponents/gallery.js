import React from 'react';
import ImageGallery from 'react-image-gallery';
import { translate } from 'react-i18next';
import './ImageGallery.css';

const Gallery = ({ data, t }) => {
    return (
        <div id={'gallery'}>
            <h2>{t('Gallery')}</h2>
            <ImageGallery items={data.map(img => ({ original: img, thumbnail: img }))} />
        </div>
    )
}

export default translate()(Gallery);