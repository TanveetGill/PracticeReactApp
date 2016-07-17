import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
    // In ES6 the above is equivalent of this.setState({ videos: videos }), ONLY when the KEY and VALUE have the same name
  // const video = props.video;
  // Typing {video} (yes with curly braces) instead of props as the argument in the above function is the equivalent of the above line (const video = props.video), this is the ES6 way of doing it
  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl} />
        </div>

        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;