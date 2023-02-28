import axios from "axios";
import { API_URL } from "@env"

export const getProducts = async (filter) => {
    return await axios.get(`${API_URL}/api/products?${filter}`)
}