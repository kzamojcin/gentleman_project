class VideoFrame{
	
	constructor(){
		this.videoFrame = document.getElementById('video_frame');
		this.VideoFrameSlowDown();
	}

	VideoFrameSlowDown(){
		this.videoFrame.playbackRate = 0.6;
	}
}

export default VideoFrame;