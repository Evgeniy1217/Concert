import axios from 'axios';

axios.defaults.baseURL = 'https://api.deezer.com';

export const getTrackstApi = async () => axios.get('/chart/0/tracks?limit=50');

export const getArtisttApi = async () => axios.get('/chart/0/artists?limit=50');
