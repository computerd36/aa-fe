type DeviceType = 'android' | 'ios' | 'pc';

function detectDevice(): DeviceType {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes("android")) return "android";

  // iPads in desktop mode report "macintosh" UA; use maxTouchPoints > 1
  // to distinguish them from MacBooks (trackpad reports 1, not > 1)
  const isIOS =
    /iphone|ipad|ipod|ios/.test(ua) ||
    (ua.includes("macintosh") && navigator.maxTouchPoints > 1);

  if (isIOS) return "ios";

  return "pc";
}

export const useDeviceType = (): DeviceType => {
  return detectDevice();
};
