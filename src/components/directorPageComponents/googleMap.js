import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { translate } from 'react-i18next';
import Typography from '@material-ui/core/Typography';

const GoogleMap = ({ data, google, t }) => {
    return (
        <div style={{ position: 'relative', height: '500px' }} id={'map'}>
            <Typography variant="h6" color="textSecondary" component="p" id='timeline'>
                {t('Map')}
            </Typography>
            <Map google={google}
                style={{ width: '100%', height: '100%', position: 'relative', margin: '0 auto' }}
                initialCenter={{ lat: 53.902496, lng: 27.561481 }}
                className={'map'}
                zoom={11}>
                {data.map((marker, i) => <Marker key={i} title={marker.title} name={marker.name} position={{ lat: marker.locationsCoords.lat, lng: marker.locationsCoords.lng }} />)}
            </Map>
        </div>
    )
}

export default translate()(GoogleApiWrapper({ apiKey: ('AIzaSyCvaIfWd-OuN9oFNCRTuUTbInrnllrw4ao') })(GoogleMap));