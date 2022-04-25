import axios from "axios";
import { useState } from "react";

function AxiosPut() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  //   const [update, setUpdate] = useState();
  const updateDataObj = {
    first_name: "White",
    last_name: "Rabbit",
    email: "alice@elice.io",
  };
  axios.put("https://reqres.in/api/users/2", updateDataObj).then((response) => {
    console.log(response.data);
    setName(`${response.data.first_name} ${response.data.last_name}`);
    setEmail(response.data.email);
  });

  return (
    <div>
      <h1>{name} </h1>
      <h1>{email} </h1>
    </div>
  );
}
export default AxiosPut;
