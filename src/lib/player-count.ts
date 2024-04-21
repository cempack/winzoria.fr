export const fetchOnlinePlayers = (serverIp: string): Promise<number> => {
  return new Promise<number>(async (resolve, reject) => {
    const api = "https://api.mcstatus.io/v2/status/java/" + serverIp;
    try {
      const response = await fetch(api, { cache: "no-store" });
      const data = await response.json();
      if (data.online) {
        resolve(data.players.online);
      } else {
        resolve(0);
      }
    } catch (error) {
      console.error("Error fetching player count:", error);
      reject(error);
    }
  });
};
