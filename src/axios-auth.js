import axios from "axios";

const instace = axios.create({
  baseURL: "https://vue-axios-test-bb762.firebaseio.com",

});

export default instace;
