import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import ModalContent from "./ModalContent";
import Paper from "@material-ui/core/Paper";

const DateList = ({ date }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let curdate = new Date(null);
  curdate.setTime(date.time._seconds * 1000);

  const DateNow = Date.now() / 1000;
  return (
    <>
      <>
        {DateNow <= date.open._seconds ? (
          <Button className="dateButton" disabled>
            {curdate.toLocaleString()}{" "}
          </Button>
        ) : (
          <>
            {" "}
            {DateNow < date.time._seconds && DateNow > date.open._seconds ? (
              <Button className="buttonGreen" onClick={handleClickOpen}>
                {curdate.toLocaleString()}
              </Button>
            ) : (
              <Button onClick={handleClickOpen}>
                {curdate.toLocaleString()}
              </Button>
            )}
          </>
        )}
      </>
      <>
        <Modal className="modal" open={open}>
          <Paper className="paper">
            <button className="closeButton" onClick={handleClose}>
              x
            </button>
            <ModalContent date={date}></ModalContent>
          </Paper>
        </Modal>
      </>
    </>
  );
};

export default DateList;
