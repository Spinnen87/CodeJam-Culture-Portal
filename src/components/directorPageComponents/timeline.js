import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { translate } from 'react-i18next';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Typography from '@material-ui/core/Typography';

const TimeLine = ({ data, t }) => {
  return (
    <div>
      <Typography variant="h6" color="textSecondary" component="p" id='timeline'>
        {t('TimeLine')}
      </Typography>
      <Timeline lineColor={lightBlue[600]}>
        {data.map((chunk, i) =>
          <TimelineItem
            key={i}
            dateText={chunk.date}
            bodyContainerStyle={{ textAlign: 'center', color: "#000", border: `1px solid ${lightBlue[600]}`, padding: '15px 15px' }}
            style={{ color: lightBlue[600] }}
            dateInnerStyle={{ background: lightBlue[600], textAlign: 'center', color: '#fff' }}
          >
            <p>{chunk.description}</p>
          </TimelineItem>
        )}
      </Timeline>
    </div>
  )
}

export default translate()(TimeLine);