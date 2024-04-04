// Bootstrap configuration for loading '.env' files
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

// Imports
import APIClient from './api';
import { Pokemon } from './@types';

const main = async () => {
    console.log('Running application...');

    // 1. Create API Client to call external api
    const client = new APIClient({ url: process.env.API_URL });
    const pokemon = await client.get();

    console.log('Success - Pokemon received from API');

    // Transform external pokemon into our own version
    const transformed: Pokemon = {
        id: pokemon.id,
        name: pokemon.name,
    };

    console.log('Success - Pokemon transformed to our own version');
    console.log(transformed);

    console.log('Program terminated');
};

main();
