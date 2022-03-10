import axios from "axios";

export const api = axios.create({
  baseURL: "https://server.wcheroes.io/",
});

export const getCharacter = async (nftInfo) => {
  console.log("getCharacter", nftInfo);
  const result = await api(
    `avatar/preview?skin=${nftInfo.skin}&hairstyle=${nftInfo.hairStyle}&haircolor=${nftInfo.hairColor}&face=${nftInfo.face}&facecolor=${nftInfo.faceColor}&helmet=${nftInfo.helmet}&cloth=${nftInfo.cloth}&armor=${nftInfo.armor}&back=${nftInfo.back}&weapon=${nftInfo.weapon}&shield=${nftInfo.shield}`
  );
  console.log("getCharacter RESULT", result);
  return result;
};

export const getMarketplaceItens = async () => {
  const result = await api("marketplace/items");
  return result;
};
