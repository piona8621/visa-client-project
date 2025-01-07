import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
// Import slick-carousel CSS for styling the carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MyAddedVisas from "../pages/MyAddedVisas";
import PrivateRoute from "./PrivateRoute";
import AllVisas from "../pages/AllVisas";
import VisaDetails from "../pages/VisaDetails";
import AddVisa from "../pages/AddVisa";
import MyApplications from "../pages/MyApplications";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import ContactPage from "../pages/ContactPage";
// import SupportPage from "../Components/SupportPage";





const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch('https://visa-server-project.vercel.app/visa'),
    

  },

  
  
  {
     path: '/add-visa',
     element: <PrivateRoute>
      <AddVisa></AddVisa>
     </PrivateRoute>
  },
  {
   path: '/my-added-visas',
   element: <PrivateRoute>
    <MyAddedVisas></MyAddedVisas>
   </PrivateRoute>,
   loader: () => fetch('https://visa-server-project.vercel.app/visa')
   
  },







  {
    path: '/my-applications',
    element: <PrivateRoute>
      <MyApplications></MyApplications>
    </PrivateRoute>,
    loader: () => fetch('https://visa-server-project.vercel.app/apply-visa')
    
  },

  
  
  {
       path: '/all-visas',
       element: <AllVisas></AllVisas>,
       loader: () => fetch('https://visa-server-project.vercel.app/visa')
  },

  {
    path: '/visa-details/:id',
    element: <PrivateRoute>
      <VisaDetails></VisaDetails>
    </PrivateRoute>
  },
  {
     path: '/about',
     element: <About></About>
  },
  {
     path: '/contact',
     element: <ContactPage></ContactPage>
  },

  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
  
])

export default Router;