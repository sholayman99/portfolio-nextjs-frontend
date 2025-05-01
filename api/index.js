import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchSocials() {
    let response = await axios.get(`${baseUrl}/socials`)
    return response.data;
}

export async function fetchAboutMe() {
    let response = await axios.get(`${baseUrl}/about`);
    return response.data;
}
