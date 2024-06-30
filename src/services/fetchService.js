export const fetchGet = async (url, endpoint = "") => {
    const response = await fetch(`${url}/${endpoint}`);
    const data = await response.json();
    return data
}