import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { translate } from 'react-i18next';

const TimeLine = ({ data, t }) => {
  return (
    <div>
      <h2>{t('TimeLine')}</h2>
      <Timeline lineColor={'#3f51b5'}>
        {data.map((chunk, i) =>
          <TimelineItem
            key={i}
            dateText={chunk.date}
            bodyContainerStyle={{ textAlign: 'center', color: '#3f51b5', boxShadow: '0rem 0rem 2.5rem #3f51b5, 0rem 0rem 0.9rem #3f51b5', padding: '15px 15px' }}
            style={{ color: '#3f51b5' }}
            dateInnerStyle={{ background: '#3f51b5', textAlign: 'center', color: '#fff' }}
          >
            <p>{chunk.description}</p>
          </TimelineItem>
        )}
      </Timeline>
    </div>
  )
}

export default translate()(TimeLine);