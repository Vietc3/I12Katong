import useSWR from "swr";
import { fetcher } from "./fetcher";
const ACCESS_TOKEN = 'EAADBQNZBhgo4BAHQFvu9w0nyOznxlSGPIkzEbNZBQ6ZBibGBjVty6pWmoC9fUQ595lK0eUMZCx8ZCsmmOSj0qyVLEYguyUYjjLL2PZAtEhibNultDfXluC7CvGFS2Yw3cLb7nFlZAi55ofrM7xcpWjpENkw5gxd9sotEZBD2pZAZAs8AZDZD';

export const useLastesPostFb = (initData:any) => {
    const URL=`https://graph.facebook.com/v10.0/100230702234464/feed?access_token=`+ACCESS_TOKEN
  const { data, error } = useSWR(URL,fetcher,{initialData:initData});
  return { data, isLoading: !error && !data, isError: error };
};
