import {useState} from 'react';
import {RouterProvider} from "react-router-dom";
import {routers} from "./app/routers.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={routers} />

    </>
  )
}

export default App
