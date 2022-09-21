import getBasicHeaders from "./auth-headers";

const BASE_URL = 'our-api-url';



export const  getAllTweets = async () => {


    const response = await fetch( BASE_URL + '/tweets', {
        method: 'GET',
        headers: getBasicHeaders(),
        }
    );
    if (!response.ok) throw new Error('Could not fetch tweets');
    const data = await response.json();
    console.log("requested to", BASE_URL + '/tweets');
    console.log("received", data);
    return data;
}