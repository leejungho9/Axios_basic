import axios from "axios";
import { useState } from "react";

function AxiosGet() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  axios.get("https://reqres.in/api/users/2").then((response) => {
    console.log(response.data.data);
    setName(`${response.data.data.first_name} ${response.data.data.last_name}`);
    setEmail(response.data.data.email);
  });

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
}

export default AxiosGet;
