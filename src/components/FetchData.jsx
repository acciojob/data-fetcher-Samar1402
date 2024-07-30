import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

// const api = "https://dummyjson.com/products";

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
    // console.log(res);
  }, []);
  // console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Data Fetched from API</h1>
      {/* {loading ? <p>Loading...</p> : <p>An error occurred: {error}</p>} */}
      <pre>{data && JSON.stringify(data)}</pre>
    </div>
  );
}

export default FetchData;
