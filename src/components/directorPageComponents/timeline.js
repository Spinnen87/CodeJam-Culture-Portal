import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { translate } from 'react-i18next';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  typography: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: lightBlue[600]
  }
}));

const TimeLine = ({ data, t }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.typography} variant="h4" color="textSecondary" component="p" id='timeline'>
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