import { useState } from "react";

const usePostParticipant = (callback) => {
  const [inputs, setInputs] = useState({
    name: "",
    club: "",
  });
  const handlesubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => {
      return {
        ...inputs,
        [event.target.name]: event.target.value,
      };
    });
  };

  return {
    inputs,
    setInputs,
    handlesubmit,
    handleInputChange,
  };
};

export default usePostParticipant;
