import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endPoint) => {
  const [dataManage, setDataManage] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  
  const apiUrl = "http://localhost:5000/";
  
  useEffect(() => {
    axios.get(`${apiUrl}${endPoint}`)
      .then(({ data }) => {
        setDataManage(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [endPoint]);

  return [dataManage, loading, error];
};

export default useFetch;
