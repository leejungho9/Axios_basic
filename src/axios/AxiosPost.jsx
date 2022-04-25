import axios from "axios";
import { useState } from "react";

function AxiosPost() {
  const [token, setToken] = useState();

  const loginData = { email: "eve.holt@reqres.in", password: "cityslicka" };

  axios.post("https://reqres.in/api/login", loginData).then((response) => {
    console.log(response);
    setToken(response.data.token);
  });

  return (
    <div>
      <h1> axios Post : {token}</h1>
    </div>
  );
}

export default AxiosPost;
