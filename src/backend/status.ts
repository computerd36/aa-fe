import { AlertAiguaStatus } from "../resources";
import axiosInstance from "./axiosInstance";



/**
 * Fetches the status from the backend API.
 * @returns {Promise<AlertAiguaStatus>} The status data from the API.
 * @throws Will throw an error if the request fails.
 */
export async function getStatus(): Promise<AlertAiguaStatus> {
    try {
        const response = await axiosInstance.get('/status');
        return response.data;
    } catch (error) {
        console.error('Error fetching status:', error);

        return {
            aa_status: "error",
            pushsafer_status: "error",
            saihebro_status: "error"
        };
    }
};