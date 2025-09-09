import { useState, useEffect } from "react";
import { API_KEY } from "../App";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [url]);

  return data;
}