import axios from "axios";

const instace = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",

});


export default instace;
