import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000, // default cache time is 5 minutes
    // staleTime: 30000, // default stale time is 0 ms
    // refetchOnMount: true, // true: default, false: refresh only on page refresh , always
    // refetchOnWindowFocus: true // true: default
    // refetchInterval: 2000, // doesnt refetch when app not in focus
    // refetchIntervalInBackground: true // will refetch even if app is not in focus
    // enabled: false, // do not fetch query on load
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
