const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const { getAllDates, getDate } = require("./handlers/dates");
const {
  getAllParticipants,
  postPartisipant,
} = require("./handlers/participants");

//geting all dates
app.get("/dates", getAllDates);
//geting all participants
app.get("/participants", getAllParticipants);
//get one date
app.get("/date/:dateId", getDate);
//posting participants
app.post("/date/:dateId/add", postPartisipant);

exports.api = functions.https.onRequest(app);
