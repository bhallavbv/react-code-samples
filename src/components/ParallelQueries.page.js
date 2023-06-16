import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

export const ParallelQueriesPage = () => {
  const { data: superheroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);
  
  // can use (destructured and aliased) superheros and friends to render in jsx
  return <div>Parallel queryies page</div>;
};
