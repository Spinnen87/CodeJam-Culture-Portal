import React from 'react';
import YouTube from 'react-youtube';

const Youtube = ({ data }) => <YouTube videoId={data} opts={{ playerVars: { autoplay: 0 } }} />;

export default Youtube;