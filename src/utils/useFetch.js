import { useState, useEffect } from "react";
import axios from "axios";
export const useFetch = (url, token) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    if (token) {
      axios
        .get(url, { headers: { token } })
        .then((res) => {
          // console.log(res);
          setData(res.data.data);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setError("404 Not FOUND");
            console.dir(err);
          }
        });
    } else {
      axios
        .get(url)
        .then((res) => {
          //console.log(res);
          setData(res.data.data);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setError("404 Not FOUND");
            console.dir(err);
          }
        });
    }
  }, [url, token, data]);

  return { data, error };
};