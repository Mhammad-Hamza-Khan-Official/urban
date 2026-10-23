import { Navigate, Outlet } from "react-router-dom";
import { ROLE_ROUTES, ROUTES as R } from "../constants/routes";

export default function PublicRoute({
    isAuthenticated,
    isLoading = false,
    user,
}) {
    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-border border-t-primary" />
            </div>
        );
    }

    if (isAuthenticated) {
        return (
            <Navigate
                to={ROLE_ROUTES[user?.role] || R.HOME}
                replace
            />
        );
    }

    return <Outlet />;
}