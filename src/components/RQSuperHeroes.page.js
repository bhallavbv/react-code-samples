import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 5000, // default cache time is 5 minutes
      // staleTime: 30000, // default stale time is 0 ms
      // refetchOnMount: true, // true: default, false: refresh only on page refresh , always
      // refetchOnWindowFocus: true // true: default 
      // refetchInterval: 2000, // doesnt refetch when app not in focus
      // refetchIntervalInBackground: true // will refetch even if app is not in focus
      enabled: false, // do not fetch query on load
    }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}> {hero.name}</div>;
      })}
    </>
  );
};
