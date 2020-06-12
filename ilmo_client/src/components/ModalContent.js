import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { useGetParticipants } from "../hooks/ApiHooks";
import ParticipantForm from "./ParticipantForm";
import CircularProgress from "@material-ui/core/CircularProgress";

const ModalContent = ({ date }) => {
  let content = useGetParticipants(date.id);

  let dateNow = Date.now() / 1000;

  let curdate = new Date(null);
  curdate.setTime(date.time._seconds * 1000);
  return (
    <div>
      <>
        {content.participants !== undefined ? (
          <div className="ol">
            <h2 className="modalDate">{curdate.toLocaleString()}</h2>
            <ol>
              {content.participants.map((part, index) => {
                return (
                  <li key={index}>
                    {part.name} {part.club}
                  </li>
                );
              })}
            </ol>
          </div>
        ) : (
          <div className="default">
            <CircularProgress
              variant="indeterminate"
              disableShrink
              size={40}
              thickness={4}
            />
          </div>
        )}
        {content.participants !== undefined && (
          <>
            {content.participants.length === 0 && (
              <div className="default">Olet ensimmäinen osallistuja</div>
            )}
          </>
        )}
        {dateNow > date.time._seconds ? (
          <div className="default"> Harjoituksiin ei enää voi osallistua</div>
        ) : (
          <ParticipantForm date={date} />
        )}
      </>
    </div>
  );
};

export default ModalContent;
