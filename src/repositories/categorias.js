import config from '../config';

async function retrieveAllVideos() {
    const response = await fetch('http://localhost:5000/videos');
    const data = await response.json();
    return data;
}

export default {
    retrieveAllVideos,
};
