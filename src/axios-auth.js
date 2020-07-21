import axios from "axios";

const instace = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",

});

//instace.defaults.headers.common['SOMETHING'] = 'something'

export default instace;
