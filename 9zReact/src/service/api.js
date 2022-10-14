import axios from 'axios'


export const saveUser = async (body) =>{
return await axios.post("http://localhost:8000/users", body)
}

export const loginUser = async (body) =>{
    return await axios.post("http://localhost:8000/login", body)
    }