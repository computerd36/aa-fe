import { useState, useEffect } from 'react';

type DeviceType = 'android' | 'ios' | 'pc';

export const useDeviceType = (): DeviceType => {
  const [device, setDevice] = useState<DeviceType>('pc');

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    
    if (ua.includes("android")) {
      setDevice("android");
      return;
    }

    const isIOS = 
      /iphone|ipad|ipod|ios/.test(ua) || 
      (ua.includes("macintosh") && navigator.maxTouchPoints && navigator.maxTouchPoints > 0);

    if (isIOS) {
      setDevice("ios");
      return;
    }

    setDevice("pc");
  }, []);

  return device;
};