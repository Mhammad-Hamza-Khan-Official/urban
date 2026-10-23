import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES as R } from "../constants/routes";

export default function ProtectedRoute({
    isAuthenticated,
    isLoading = false,
    user,
    allowedRoles,
}) {
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-border border-t-primary" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to={R.CUSTOMER_LOGIN}
                state={{ from: location }}
                replace
            />
        );
    }

    if (allowedRoles?.length && !allowedRoles.includes(user?.role)) {
        return <Navigate to={R.UNAUTHORIZED} replace />;
    }

    return <Outlet />;
}