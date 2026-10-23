import { Route, Routes } from "react-router-dom";

import { ROUTES as R } from "../constants/routes";

// Public pages
import LandingPage from "../pages/public/LandingPage";

// Auth pages
import CustomerLogin from "../pages/auth/CustomerLogin";
import CustomerRegister from "../pages/auth/CustomerRegister";
import WorkerLogin from "../pages/auth/WorkerLogin";
import WorkerRegister from "../pages/auth/WorkerRegister";

// Customer pages
import Dashboard from "../pages/customer/Dashboard";
import Services from "../pages/customer/Services";
import ServiceDetails from "../pages/customer/ServiceDetails";
import BookService from "../pages/customer/BookService";
import MyBookings from "../pages/customer/MyBookings";

// Worker pages
import DashboardWorker from "../pages/worker/DashboardWorker";
import CreateProfile from "../pages/worker/CreateProfile";
import Profile from "../pages/worker/Profile";
import MyServices from "../pages/worker/MyServices";
import CreateService from "../pages/worker/CreateService";
import EditService from "../pages/worker/EditService";

// Admin pages
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import Unauthorized from "../pages/errors/Unauthorized";
import NotFound from "../pages/errors/NotFound";
import CustomerDashboardLayout from "../layouts/CustomerDashboardLayout";
import WorkerDashboardLayout from "../layouts/WorkerDashboardLayout";



export default function AppRoutes() {
    return (
        <Routes>
            {/* Public */}
            <Route path={R.HOME} element={<LandingPage />} />

            {/* Authentication */}
            <Route
                path={R.CUSTOMER_LOGIN}
                element={<CustomerLogin />}
            />
            <Route
                path={R.CUSTOMER_REGISTER}
                element={<CustomerRegister />}
            />
            <Route
                path={R.WORKER_LOGIN}
                element={<WorkerLogin />}
            />
            <Route
                path={R.WORKER_REGISTER}
                element={<WorkerRegister />}
            />

            {/* Customer */}
            <Route element={<CustomerDashboardLayout />} >
                <Route
                    path={R.CUSTOMER_DASHBOARD}
                    element={<Dashboard />}
                />
                <Route
                    path={R.SERVICES}
                    element={<Services />}
                />
                <Route
                    path={R.SERVICE_DETAILS()}
                    element={<ServiceDetails />}
                />
                <Route
                    path={R.BOOK_SERVICE()}
                    element={<BookService />}
                />
                <Route
                    path={R.MY_BOOKINGS}
                    element={<MyBookings />}
                />
            </Route>

            {/* Worker */}
            <Route element={<WorkerDashboardLayout />} >
                <Route
                    path={R.WORKER_DASHBOARD}
                    element={<DashboardWorker />}
                />
                <Route
                    path={R.WORKER_CREATE_PROFILE}
                    element={<CreateProfile />}
                />
                <Route
                    path={R.WORKER_PROFILE}
                    element={<Profile />}
                />
                <Route
                    path={R.WORKER_SERVICES}
                    element={<MyServices />}
                />
                <Route
                    path={R.WORKER_CREATE_SERVICE}
                    element={<CreateService />}
                />
                <Route
                    path={R.WORKER_EDIT_SERVICE()}
                    element={<EditService />}
                />
            </Route>

            {/* Admin */}
            <Route
                path={R.ADMIN_DASHBOARD}
                element={<DashboardAdmin />}
            />

            {/* Error pages */}
            <Route
                path={R.UNAUTHORIZED}
                element={<Unauthorized />}
            />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );
}