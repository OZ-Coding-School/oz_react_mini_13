import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};

export const useMovieList = ({ query, enabled = true }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!enabled) return;

    try {
      const fetchData = async () => {
        const res = await fetch(query, options);
        const json = await res.json();
        setData(json);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [query, enabled]);

  const filter = data.results?.filter((el) => !el.adult);

  const result = filter?.map((el) => ({ poster_path: el.poster_path, id: el.id, title: el.title, vote_average: el.vote_average }));

  return result;
};

export const useMovieSearchList = ({ query, enabled = true, text = '' }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!enabled) return;

    const debounceTimer = setTimeout(() => {
      try {
        const fetchData = async () => {
          const res = await fetch(query, options);
          const json = await res.json();
          setData(json);
        };
        fetchData();
      } catch (err) {
        console.error(err);
      }
    }, 1000);
    return () => clearTimeout(debounceTimer);
  }, [query, enabled, text]);

  const filter = data.results?.filter((el) => !el.adult);

  const result = filter?.map((el) => ({ poster_path: el.poster_path, id: el.id, title: el.title, vote_average: el.vote_average }));

  return result;
};

export const useTop20Movies = ({ query, enabled = true }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!enabled) return;

    try {
      const fetchData = async () => {
        const res = await fetch(query, options);
        const json = await res.json();
        setData(json);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [query, enabled]);

  const filter = data.results?.filter((el) => !el.adult);

  const result = filter?.map((el) => ({ poster_path: el.poster_path, id: el.id }));

  return result;
};

export const useMovieDetail = ({ query, enabled = true }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!enabled) return;

    try {
      const fetchData = async () => {
        const res = await fetch(query, options);
        const json = await res.json();
        setData(json);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [query, enabled]);

  return data;
};

export const useMovieCast = ({ query, enabled = true }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!enabled) return;

    try {
      const fetchData = async () => {
        const res = await fetch(query, options);
        const json = await res.json();
        setData(json);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [query, enabled]);

  const filter = data.cast?.filter((el) => !el.adult);

  const result = filter?.map((el) => ({ name: el.original_name, id: el.cast_id, profile: el.profile_path }));

  return result;
};
