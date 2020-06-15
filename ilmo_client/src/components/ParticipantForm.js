import React, { useState } from "react";
import usePostParticipant from "../hooks/PostParticipantHooks";
import { PostParticipant, useDateList } from "../hooks/ApiHooks";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

import "../App.css";

const ParticipantForm = ({ date }) => {
  const [loading, setLoading] = useState(false);

  let partArray = useDateList();
  const doPost = async () => {
    setLoading(true);
    try {
      const message = await PostParticipant(inputs, date.id);
      console.log(message);
      setLoading(false);
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
          <TextField
            className="inputField"
            required
            minLength="2"
            name="name"
            type="text"
            value={inputs.name}
            label="Kirjoita nimesi"
            onChange={handleInputChange}
          ></TextField>
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
              Valitse seura: *
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
          {loading && (
            <>
              <div>
                <CircularProgress />
              </div>
            </>
          )}
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
