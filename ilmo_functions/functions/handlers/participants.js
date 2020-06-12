const { db } = require("../util/admin");

exports.getAllParticipants = (req, res) => {
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
};

exports.postPartisipant = (req, res) => {
  const newPart = {
    name: req.body.name,
    created: new Date().toISOString(),
    club: req.body.club,
    dateId: req.params.dateId,
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
};
