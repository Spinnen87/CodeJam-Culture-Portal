import React from 'react';
import { translate } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import lightBlue from '@material-ui/core/colors/lightBlue';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles(theme => ({
    typography: {
      textAlign: 'center',
      margin: `${theme.spacing(7)}px auto`,
      fontWeight: 'bold',
      color: lightBlue[600]
    }
  }));

const Gallery = ({ data, t }) => {
    const classes = useStyles();
    return (
        <div id={'gallery'}>
            <Typography className={classes.typography} variant="h4" color="textSecondary" component="p" >
                {t('Gallery')}
            </Typography>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                {data.map((img, i) => <div key={i}><img className={'gallery'} src={img} /></div>)}
            </Carousel>
        </div>
    )
}

export default translate()(Gallery);
