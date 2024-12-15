import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import guitarImage from "@/assets/imgs/tuner-electric-lg.png";
import ToolsPanel from "./tools-panel";
import Meter from "./meter";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const ElectricTunerPage = () => {
  const [volume, setVolume] = useState(0);
  const audioContextRef = useRef<any>(null);
  const analyserRef = useRef<any>(null);
  const microphoneRef = useRef<any>(null);
  const animationIdRef = useRef<any>(null);
  const streamRef = useRef<any>(null);
  const getMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      streamRef.current = stream;
      audioContextRef.current = new window.AudioContext();
      microphoneRef.current =
        audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();

      microphoneRef.current.connect(analyserRef.current);
      analyserRef.current.fftSize = 2048;

      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

      const getVolume = () => {
        analyserRef.current.getByteFrequencyData(dataArray);
        const sum = dataArray.reduce((acc, val) => acc + val, 0);
        const average = sum / dataArray.length;
        setVolume(average);
        animationIdRef.current = requestAnimationFrame(getVolume);
      };
      getVolume();
    } catch (err) {
      console.error("Error accessing microphone: ", err);
    }
  };
  const removeMicrophoneAccess = () => {
    // Cleanup function to stop audio context and cancel animation frame
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    if (analyserRef.current) {
      analyserRef.current == null;
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
    getMicrophoneAccess();
    return () => {
      removeMicrophoneAccess();
    };
  }, []);
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Online Tuner", href: "/tuner" },
        ]}
      />
      <MaxWidthWrapper className="py-5">
        <h1 className="text-3xl font-extrabold uppercase">
          Online Electric Guitar Tuner
        </h1>
        <p className="font-semibold pb-10">
          Chạm vào nốt nhạc, lên dây đàn theo đúng âm điệu.
        </p>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 flex justify-center">
            <div className="w-[300px]">
              <img src={guitarImage} alt="" className="w-full" />
            </div>
          </div>
          <div className="col-span-6">
            <ToolsPanel />
          </div>
        </div>
        <div className="flex flex-col items-center py-20">
          <Meter value={volume} />
          <h5 className="font-extrabold uppercase text-3xl py-5">Tuner</h5>
          <div className="flex gap-5 py-5">
            <Button
              variant={"destructive"}
              onClick={() => removeMicrophoneAccess()}
            >
              Stop
            </Button>
            <Button onClick={() => getMicrophoneAccess()}>Start</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ElectricTunerPage;
