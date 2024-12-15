import { useEffect, useRef, useState } from "react";

const useMicrophone = () => {
  const [volume, setVolume] = useState(0);
  const audioContextRef = useRef<any>(null);
  const analyserRef = useRef<any>(null);
  const microphoneRef = useRef<any>(null);
  const animationIdRef = useRef<any>(null);
  const streamRef = useRef<any>(null);

  const getMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      audioContextRef.current = new window.AudioContext();
      microphoneRef.current =
        audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();

      microphoneRef.current.connect(analyserRef.current);
      analyserRef.current.fftSize = 2048;

      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

      const getVolume = () => {
        if (analyserRef.current) {
          analyserRef.current.getByteFrequencyData(dataArray);
          const sum = dataArray.reduce((acc, val) => acc + val, 0);
          const average = sum / dataArray.length;
          setVolume(average);
          animationIdRef.current = requestAnimationFrame(getVolume);
        }
      };
      getVolume();
    } catch (err) {
      console.error("Error accessing microphone: ", err);
    }
  };

  const removeMicrophoneAccess = () => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    if (analyserRef.current) {
      analyserRef.current = null;
    }
    if (microphoneRef.current) {
      microphoneRef.current.disconnect();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track: any) => track.stop());
    }
    setVolume(0);
  };

  useEffect(() => {
    // getMicrophoneAccess();
    return () => {
      removeMicrophoneAccess();
    };
  }, []);

  return { volume, getMicrophoneAccess, removeMicrophoneAccess };
};

export default useMicrophone;
