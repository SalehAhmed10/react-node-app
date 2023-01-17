import React, { useEffect, useState } from "react";

function Api() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:4000/api/tweet");
    const data = await response.json();
    setItems(data);
    setLoading(false);
    console.log(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <h1> Loading...</h1>
        ) : (
          <>
            {items.map((item, index) => (
              <div key={index}>
                <p>{item.name}</p>
                <p>{item.age}</p>
              </div>
            ))}
          </>
        )}
      </header>
    </div>
  );
}

export default Api;
