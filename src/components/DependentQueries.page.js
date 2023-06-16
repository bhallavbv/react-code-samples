import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUserByUserId = (userId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`https://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ userId }) => {
  const { data: user } = useQuery(["user", userId], () =>
    fetchUserByUserId(userId)
  );
  const channelId = user?.data.channelId;
  console.log("User data::", user?.data);

  const { data: courses } = useQuery(["courses", channelId], () => {
    fetchCoursesByChannelId(channelId), { enabled: !!channelId }; // query is only triggered when channel id gets a value
  });
  console.log("Courses data::", courses);
  return <div>Dependent Queries Page</div>;
};
