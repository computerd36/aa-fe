import { UserConfig } from "../resources";


export function generatePushsaferSignupLink(userconfig: UserConfig): string {
    const baseUrl = "pushsafer://guest";
    const guestId = import.meta.env.VITE_PUSHSAFER_GUEST_ID;
    const deviceName = userconfig.name + "-" + userconfig.language.code + "-" + userconfig.metric + "-" + userconfig.metricValue.toFixed(2);

    const link = `${baseUrl}+${guestId}|${deviceName}`;

    console.log("Generated link:", link);

    return link;
}