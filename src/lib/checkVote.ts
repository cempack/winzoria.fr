'use server';

import {headers} from "next/headers";

export default async function checkVoteWebsite(website: string) {
    interface WebsiteData {
        url: string;
        key?: string;
        value?: string | boolean | number;
        value_not?: string | boolean | number;
        time_until_next_vote_key?: string;
        time_until_next_vote?: number;
    }

    async function IP() {
        const FALLBACK_IP_ADDRESS = '0.0.0.0'
        const forwardedFor = headers().get('x-forwarded-for')

        if (forwardedFor) {
            return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
        }

        return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
    }

    const ip = IP();

    const websites: { [key: string]: WebsiteData } = {
        'https://serveur-minecraft.com/3260': {
            url: `https://serveur-minecraft.com/api/1/vote/3260/${ip}/json`,
            key: 'vote',
            value: "1",
            time_until_next_vote_key: 'time_until_next_vote'
        },
        'https://serveur-prive.net/minecraft/winzoria-13681/vote': {
            url: `https://serveur-prive.net/api/v1/servers/jvRmuF9HB8hsI0V/votes/${ip}`,
            key: 'success',
            value: true,
            time_until_next_vote: 5400
        },
        'https://www.liste-serveurs-minecraft.org/vote/?idc=206300': {
            url: `https://api.liste-serveurs-minecraft.org/vote/vote_verification.php?server_id=206300&ip=${ip}&duration=5`,
            value: 1,
            time_until_next_vote: 10800
        },
        'https://www.serveursminecraft.org/serveur/6772/': {
            url: `https://www.serveursminecraft.org/sm_api/peutVoter.php?id=6772&ip=${ip}`,
            value_not: true,
            time_until_next_vote: 86400
        },
        'https://www.liste-serveurs.fr/server-winzoria.723/vote': {
            url: `https://www.liste-serveurs.fr/api/checkVote/723/${ip}`,
            key: 'success',
            value: true,
            time_until_next_vote: 10800
        },
    }

    const websiteData = websites[website];
    if (!websiteData) {
        throw new Error(`Website ${website} not found in websites object`);
    }

    const response = await fetch(websiteData.url);
    let data;

    if (websiteData.key) {
        data = await response.json();
    } else {
        data = await response.text();
    }
    console.log(data)

    let hasVoted;
    if (websiteData.key && data[websiteData.key]) {
        if (websiteData.value) {
            hasVoted = data[websiteData.key] === websiteData.value;
        } else if (websiteData.value_not) {
            hasVoted = data[websiteData.key] !== websiteData.value_not;
        }
    } else {
        if (websiteData.value) {
            hasVoted = data === websiteData.value;
        } else if (websiteData.value_not) {
            hasVoted = data !== websiteData.value_not;
        }
    }

    let timeUntilNextVote;
    if (websiteData.time_until_next_vote_key) {
        timeUntilNextVote = data[websiteData.time_until_next_vote_key];
    } else if (websiteData.time_until_next_vote) {
        timeUntilNextVote = websiteData.time_until_next_vote;
    } else {
        throw new Error(`Error`);
    }
    console.log(timeUntilNextVote)

    function formatSeconds(seconds: number): string {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const paddedHours = hours.toString().padStart(2, '0');
        const paddedMinutes = minutes.toString().padStart(2, '0');
        const paddedSeconds = remainingSeconds.toString().padStart(2, '0');

        return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    }

    timeUntilNextVote = formatSeconds(timeUntilNextVote)


    return {
        hasVoted: hasVoted,
        timeUntilNextVote: timeUntilNextVote
    }
}