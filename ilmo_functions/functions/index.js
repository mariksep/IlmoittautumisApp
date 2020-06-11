const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

app.get("/participants", (req, res) => {
  db.collection("participants")
    .orderBy("created", "asc")
    .get()
    .then((data) => {
      let participantsList = [];
      data.forEach((doc) => {
        participantsList.push({
          id: doc.id,
          created: doc.data().created,
          name: doc.data().name,
          club: doc.data().club,
        });
      });
      return res.json(participantsList);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post("/participant", (req, res) => {
  const newPart = {
    name: req.body.name,
    created: new Date().toISOString(),
    club: req.body.club,
  };
  db.collection("participants")
    .add(newPart)
    // eslint-disable-next-line promise/always-return
    .then((doc) => {
      res.json({ message: `Added to the list successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.log(err);
    });
});

exports.api = functions.https.onRequest(app);
