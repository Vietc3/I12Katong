import useSWR from "swr";
import { fetcher } from "./fetcher";
const ACCESS_TOKEN = 'EAADBQNZBhgo4BAKw2OkpLNoEZCQ3tpZCbKJkTzIVZArevt7bJ56sFQIbLwrALiTRqvAabGlIOm3yXkSZAdi1bcxuuRN2dYfYZBUdUcMWNaWQRX7d20Dn0wHVz1lyoJVyIZBjkDGKIgOo2HKPfrkgRQE2dKQ2CqRml5JokMsR40PaAZDZD';

export const useLastesPostFb = (initData:any) => {
    const URL=`https://graph.facebook.com/v10.0/100230702234464/feed?access_token=`+ACCESS_TOKEN
  const { data, error } = useSWR(URL,fetcher,{initialData:initData});
  return { data, isLoading: !error && !data, isError: error };
};
