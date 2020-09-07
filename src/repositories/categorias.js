import config from '../config';

async function retrieveAllVideos() {
    const response = await fetch('https://tranquil-beach-70411.herokuapp.com/videos', {
        method: 'get',
        mode: 'no-cors',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
        },
    });

    const data = await response.json();
    console.log('oooooooooooooooo', data);
    return data;
}

export default {
    retrieveAllVideos,
};
