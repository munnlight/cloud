import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const handleGet = async () => {
      const response = await fetch("https://cloud-production-c442.up.railway.app/users");
      const data = await response.json();
      console.log(data);
      setData(data);
    };

    handleGet();
  }, []);

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        fontWeight: 800,
        alignItems: "center",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <div>It worked here is the data:</div>
      <div>
        {data.map((item: any, index: number) => (
          <div key={index}>
            <p>
              {item.uid} {item.name} {item.age}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
