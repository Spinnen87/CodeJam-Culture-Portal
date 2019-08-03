import React from 'react';
import { translate } from 'react-i18next';

const Table = ({ data, t }) => {
    return (
        <div>
            <h2>{t('Table')}</h2>
            <div>
                <p>{t('Date')}</p>
                <p>{t('Movie')}</p>
            </div>
            {data.map((item, i) => <div key={i}><p>{item.date}</p><p>{item.name}</p></div>)}
        </div>
    )
}

export default translate()(Table);