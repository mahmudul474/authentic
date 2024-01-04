import React, { useState, useRef } from 'react';

const Camera = () => {
  const [imageSrc, setImageSrc] = useState('');
  const videoRef = useRef();
  const mediaStreamRef = useRef();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      mediaStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing the camera:', err);
    }
  };

  const takePhoto = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');
      setImageSrc(dataUrl);
    }
  };

  const retakePhoto = () => {
    setImageSrc('');
  };

  const deletePhoto = () => {
    setImageSrc('');
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div>
      <div>
        <video ref={videoRef} autoPlay />
      </div>
      <div>
        <button onClick={startCamera}>Start Camera</button>
        <button onClick={takePhoto}>Take Photo</button>
        <button onClick={retakePhoto}>Retake Photo</button>
        <button onClick={deletePhoto}>Delete Photo</button>
      </div>
      {imageSrc && (
        <div>
          <img src={imageSrc} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default Camera;
