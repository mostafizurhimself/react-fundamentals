import { FC, useEffect, useRef } from "react";

type VideoPlayerProps = {
  isPlaying: boolean;
};

const VideoPlayer: FC<VideoPlayerProps> = ({ isPlaying }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Playing");
      videoRef.current?.play();
    } else {
      console.log("Paused");
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    />
  );
};

export default VideoPlayer;
