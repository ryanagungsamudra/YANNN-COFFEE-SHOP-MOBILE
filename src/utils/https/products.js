import axios from "axios";
import { API_URL } from "@env"

export const getProducts = async (filter) => {
    return await axios.get(`${API_URL}/api/products?${filter}`)
}

export const postOrder = async (body) => {
    return await axios({
        url: `${API_URL}/api/order`,
        method: "POST",
        data: body,
    })
}