import React, { useState, useEffect } from "react";

function App() {
  // ======== ЗА Энд хэрэгтэй api хаягуудыг бичлээ ==============================================
  const LOCAL_URL = "http://localhost:8080";
  const HOST_URL = "https://cloud-zupn.onrender.com";
  const user = "/users";
  const place = "/places";
  const show = "/shows";
  const ticket = "/tickets";
  // ============================================================================================

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const handleGet = async () => {
      const response = await fetch(HOST_URL + user);
      const data = await response.json();
      console.log(data);
      setData(data);
    };

    handleGet();
  }, []);

  return (
    <div className="text-3xl ">
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
