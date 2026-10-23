const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

export function getToken() {
  return localStorage.getItem("localfinder_token");
}

export async function api(path, { method = "GET", body, auth = true } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth && getToken()) headers.Authorization = `Bearer ${getToken()}`;

  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method, headers, ...(body !== undefined ? { body: JSON.stringify(body) } : {})
    });
  } catch {
    throw new Error(`Cannot connect to backend at ${API_URL}. Check that your Express server is running and CORS is enabled.`);
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || `Request failed (${response.status})`);
  return data;
}

export const endpoints = {
  customerRegister: "/api/auth/register",
  customerLogin: "/api/auth/login",
  providerRegister: "/provider/provider/register",
  providerLogin: "/provider/provider/login",
  services: "/customer",
  createBooking: "/booking/create",
  providerProfile: "/provider/create-profile",
  createService: "/provider/service/create",
  updateService: (id) => `/provider/${id}`
};
