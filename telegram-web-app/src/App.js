import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
  }, []);

  const sendData = () => {
    fetch('http://localhost:5001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: "Dora is here!" }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <h1>Welcome to My Telegram Web App</h1>
      <button onClick={sendData}>Send Data to Backend</button>
    </div>
  );
}

export default App;
