import React from "react";
import usePostParticipant from "../hooks/PostParticipantHooks";
import { PostParticipant, usePartList } from "../hooks/ApiHooks";
import PropTypes from "prop-types";

import "../App.css";

const ParticipantForm = () => {
  let partArray = usePartList();
  const doPost = async () => {
    try {
      const message = await PostParticipant(inputs);
      alert(`Sinut ${inputs.name} on lisätty listaan`);
      window.location.reload();
    } catch (e) {
      console.log(e.message);
    }
  };

  const {
    inputs,
    setInputs,
    handlesubmit,
    handleInputChange,
  } = usePostParticipant(doPost);

  return (
    <div>
      {partArray.length < 26 ? (
        <form className="containerform" onSubmit={handlesubmit}>
          <input
            required
            minLength="2"
            className="inputfield"
            name="name"
            type="text"
            value={inputs.name}
            placeholder="Kirjoita nimesi*"
            onChange={handleInputChange}
          ></input>
          {/*<input
            required
            value={inputs.club}
            onChange={handleInputChange}
            name="club"
            className="inputfield"
            type="text"
            placeholder="Kirjoita seura*"
          />*/}
          <div className="formdropdown">
            <label className="formlabel" htmlFor="club">
              Valitse seura: *{" "}
            </label>
            <select
              className="formselect"
              required
              value={inputs.club}
              onChange={handleInputChange}
              name="club"
            >
              <option value="" defaultValue disabled hidden></option>
              <option className="formselectoption" value="Hydromania">
                Hydromania
              </option>
              <option className="formselectoption" value="EUS">
                EUS
              </option>
              <option className="formselectoption" value="PSK Kupla">
                PSK Kupla
              </option>
              <option className="formselectoption" value="Urheilusukeltajat">
                Urheilusukeltajat
              </option>
              <option className="formselectoption" value="Najadit">
                Najadit
              </option>
              <option className="formselectoption" value="RiUSuk">
                RiUSuk
              </option>
              <option className="formselectoption" value="Muu">
                Muu
              </option>
            </select>
          </div>
          <button className="formbutton" type="submit">
            Lisää
          </button>
        </form>
      ) : (
        <div className="pform">Harjoitukset ovat täynnä!</div>
      )}
    </div>
  );
};
ParticipantForm.propTypes = {
  history: PropTypes.object,
};

export default ParticipantForm;
