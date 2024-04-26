'use server';

export default async function checkUsername(username: string) {
    try {
        const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);

        if (!response.ok) {
            throw new Error('User does not exist');
        }

        const data = await response.json();
        return ["success", data.name];
    } catch (error) {
        if (error instanceof Error) {
            return ["error", error.message];
        } else {
            return ["error", "An unknown error occurred"];
        }
    }
}