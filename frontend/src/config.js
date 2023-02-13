const LOCAL_API_URL = "http://localhost:5000";
const PROD_API_URL = "https://api-dev-ecommerce-clothes.web5days.com";

export const API_URL =
  process.env.NODE_ENV === "development" ? LOCAL_API_URL : PROD_API_URL;
