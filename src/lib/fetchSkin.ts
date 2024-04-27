'use server'

const MOJANG_USERID_URL = 'https://api.mojang.com/users/profiles/minecraft/';
const CRAFTAR_SKIN_URL = 'https://crafatar.com/renders/head/';

// Create a cache object
const cache: { [key: string]: string } = {};

export const fetchSkin = async (username: string) => {
    if (!username) {
        throw new Error('Username is required');
    }

    // If the username is in the cache, return the cached data
    if (cache[username]) {
        return cache[username];
    }

    // Fetch the user ID for the given username
    const userIdResponse = await fetch(`${MOJANG_USERID_URL}${username}`);
    if (!userIdResponse.ok) {
        throw new Error(`Could not retrieve user ID for ${username}`);
    }

    const userIdData = await userIdResponse.json();
    const userId = userIdData.id;

    // Use the Crafatar API to get an image of the player's skin
    const skinUrl = `${CRAFTAR_SKIN_URL}${userId}.png`;

    // Store the skin URL in the cache
    cache[username] = skinUrl;

    return skinUrl;
};