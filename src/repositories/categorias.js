import config from '../config';

async function retrieveAllVideos() {
    const response = await fetch('https://tranquil-beach-70411.herokuapp.com/videos', { mode: 'no-cors' });
    const data = await response.json();
    return data;
}

export default {
    retrieveAllVideos,
};
