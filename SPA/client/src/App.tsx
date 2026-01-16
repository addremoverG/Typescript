// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useEffect, useState } from 'react'

// Match the interface from the backend
interface UserData {
  id: number;
  message: string;
}

function App() {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    // Calling relative URL because of the Vite Proxy
    fetch('/api/data')
      .then(res => res.json())
      .then((jsonData: UserData) => setData(jsonData))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1>SPA Connection Test</h1>
      {data ? (
        <p>Server says: <strong>{data.message}</strong> (ID: {data.id})</p>
      ) : (
        <p>Loading data from server...</p>
      )}
    </div>
  )
}

export default App
