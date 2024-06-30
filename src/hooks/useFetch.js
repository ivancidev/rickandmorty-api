import { useEffect, useState } from "react";
import { fetchGet } from "../services/fetchService";

export default function useFetchGet(url, endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
        const response = await fetchGet(url, endpoint);
        setData(response);
        console.log(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}
