import axios from "axios";
import { envConfig } from "./envConfig";

export const api = axios.create({
  baseURL: envConfig.apiBaseUrl,
});
