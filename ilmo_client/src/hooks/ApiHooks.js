import { useState, useEffect } from "react";
const baseUrl =
  "https://us-central1-ilmoittautuminen-b633a.cloudfunctions.net/api";

const useDateList = () => {
  const [data, setData] = useState([]);
  const fetchUrl = async () => {
    const response = await fetch(baseUrl + "/dates");
    const json = await response.json();

    const items = await Promise.all(
      json.map(async (item) => {
        return item;
      })
    );
    setData(items);
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return data;
};

const PostParticipant = async (inputs, dateId) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputs),
  };
  try {
    const resp = await fetch(baseUrl + `/date/${dateId}/add`, fetchOptions);
    const json = await resp.json();

    return json;
  } catch (e) {
    throw new Error(e.message);
  }
};

const useGetParticipants = (dateId) => {
  const [data, setData] = useState([]);

  const fetchUrl = async () => {
    const resp = await fetch(baseUrl + `/date/${dateId}`);
    const json = await resp.json();
    setData(json);
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return data;
};

export { useDateList, PostParticipant, useGetParticipants };
