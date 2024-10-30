import axios from 'axios'

const flanApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
});



export const getAllFlan = () => flanApi.get("/flan/");
export const formulario = (formData) => flanApi.post("/contacts/", formData)


