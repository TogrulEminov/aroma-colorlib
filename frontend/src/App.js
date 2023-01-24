import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './Route/Routes';

function App() {
  const router=createBrowserRouter(ROUTES)
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
