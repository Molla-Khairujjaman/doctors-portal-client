import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home";
import Login from "../Login";
import Appointment from "../Appointment";
import Signup from "../Signup";
import PrivetRoutes from "./PrivetRoutes";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Myappointment from "../Myappointment/Myappointment";
import Allusers from "../Dashboard/Allusers";
import AdminRoutes from "./AdminRoute";
import AddDoctor from "../Dashboard/AddDoctor";
import ManageDoctors from "../Dashboard/ManageDoctors";
import Payment from "../Dashboard/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <Signup></Signup>

            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoutes><DashboardLayout></DashboardLayout></PrivetRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Myappointment></Myappointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctor',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes><Payment></Payment></AdminRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
])

export default router;