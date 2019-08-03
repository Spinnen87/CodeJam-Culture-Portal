import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { translate } from 'react-i18next';

const GoogleMap = ({ data, google, t }) => {
    return (
        <div>
            <h2>{t('Map')}</h2>
            <Map google={google}
                style={{ width: '80%', height: '60%', position: 'relative', margin: '20px auto' }}
                initialCenter={{ lat: 53.902496, lng: 27.561481 }}
                className={'map'}
                zoom={11}>
                {data.map((marker, i) => <Marker key={i} title={marker.title} name={marker.name} position={{ lat: marker.locationsCoords.lat, lng: marker.locationsCoords.lng }} />)}
            </Map>
        </div>
    )
}

export default translate()(GoogleApiWrapper({ apiKey: ('AIzaSyCvaIfWd-OuN9oFNCRTuUTbInrnllrw4ao') })(GoogleMap));