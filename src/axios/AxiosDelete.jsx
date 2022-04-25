import axios from "axios";

function AxiosDelete() {
  axios.delete("https://reqres.in/api/users/2").then((response) => {
    console.log(response);
  });
}

export default AxiosDelete;
