/**
 * generates a Pushsafer signup link for guest device registration
 * 
 * @param name - the users name: 3 - 20 chars
 * @param languageCode - lang code: en, es or ca
 * @param metric - the metric type: flowrate or level
 * @param metricValue - the value of the metric
 * @returns a pushsafer guest signup link for one click registration 
 */
export function generatePushsaferSignupLink(name: string, languageCode: string, metric: string, metricValue: number): string {
    const guestId = import.meta.env.VITE_PUSHSAFER_GUEST_ID;
    const deviceName = `${name}-${languageCode}-${metric}-${metricValue.toFixed(1)}`;

    return `pushsafer://guest+${guestId}|${deviceName}|`;
}