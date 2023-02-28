import axios from "axios";
import { API_URL } from "@env"

export const getProducts = (filter) => {
    return axios.get(`${API_URL}/api/products?${filter}`)
}