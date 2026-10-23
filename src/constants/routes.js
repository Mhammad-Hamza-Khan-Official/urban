export const ROUTES = {
    // General
    HOME: "/",
    UNAUTHORIZED: "/unauthorized",
    NOT_FOUND: "*",

    // Authentication
    CUSTOMER_LOGIN: "/customer/login",
    CUSTOMER_REGISTER: "/customer/register",
    WORKER_LOGIN: "/worker/login",
    WORKER_REGISTER: "/worker/register",

    // Customer
    CUSTOMER_DASHBOARD: "/dashboard",
    SERVICES: "/services",
    SERVICE_DETAILS: (id = ":serviceId") => `/services/${id}`,
    BOOK_SERVICE: (id = ":serviceId") => `/book-service/${id}`,
    MY_BOOKINGS: "/my-bookings",

    // Worker
    WORKER_DASHBOARD: "/worker/dashboard",
    WORKER_CREATE_PROFILE: "/worker/create-profile",
    WORKER_PROFILE: "/worker/profile",
    WORKER_SERVICES: "/worker/services",
    WORKER_CREATE_SERVICE: "/worker/create-service",
    WORKER_EDIT_SERVICE: (id = ":serviceId") =>
        `/worker/edit-service/${id}`,

    // Admin
    ADMIN_DASHBOARD: "/admin/dashboard",
};

export const ROLE_ROUTES = {
    customer: ROUTES.CUSTOMER_DASHBOARD,
    worker: ROUTES.WORKER_DASHBOARD,
    admin: ROUTES.ADMIN_DASHBOARD,
};