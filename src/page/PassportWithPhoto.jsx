import React, { useRef, useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa'; // Assuming you're using FontAwesome or a similar library

const LiveCamera = () => {
  const videoRef = useRef();
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraOpen(true);
        }
      } catch (err) {
        console.error('Error accessing the camera:', err);
        setIsCameraOpen(false);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      {isCameraOpen ? (
        <video ref={videoRef} autoPlay />
      ) : (
        <div style={{ width: '100%', height: '300px', backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FaCamera size={50} /> {/* Replace with your preferred camera icon */}
        </div>
      )}
    </div>
  );
};

export default LiveCamera;
