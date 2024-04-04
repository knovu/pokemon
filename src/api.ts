import axios from 'axios';
import { ExternalPokemon } from './@types';

class APIClient {
    constructor(options: { url: string }) {
        const { url } = options;

        // Set the current base API configurations
        axios.defaults.url = url;
        axios.defaults.responseType = 'json';
    }

    public async get(): Promise<ExternalPokemon> {
        const data = axios
            .get<ExternalPokemon>('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => {
                return response.data;
            });

        return data;
    }
}

export default APIClient;
