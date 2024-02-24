'use client';
import {type ReactElement} from 'react';
import styles from './YoutubeVideo.module.css';

export interface VideoM {
  urlVideo: string;
}

export const YoutubeVideo = ({urlVideo}: VideoM): ReactElement => {
  return (
    <>
      <div className={styles.videoContainer}>
        <iframe
          width={'700px'}
          height={'800px'}
          src={urlVideo}
          className={styles.iframeVideo}
          allow='autoplay; fullscreen; picture-in-picture'
        ></iframe>
      </div>
    </>
  );
};
