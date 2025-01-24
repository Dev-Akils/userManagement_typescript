import axios from "axios";

export const fetchUserAPI=()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users");
};