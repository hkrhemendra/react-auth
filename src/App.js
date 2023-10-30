import "bootstrap/dist/css/bootstrap.css";
import Login from './pages/Login'
import {
  createBrowserRouter,
  Outlet,
} from 'react-router-dom';
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";

function App() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Login/>,
      },
      {
        path: '/signup',
        element: <Register/>,
      },
      {
        path: '/verify-otp',
        element: <VerifyOtp/>
      }
    ]
  },
]);

// export default App;
export { router}
