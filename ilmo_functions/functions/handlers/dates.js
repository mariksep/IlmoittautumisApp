const { db } = require("../util/admin");

exports.getAllDates = (req, res) => {
  db.collection("date")
    .get()
    .then((data) => {
      let treenit = [];
      data.forEach((doc) => {
        treenit.push({
          id: doc.id,
          open: doc.data().open,
          time: doc.data().time,
        });
      });
      return res.json(treenit);
    })
    .catch((err) => console.error(err));
};

exports.getDate = (req, res) => {
  let dateData = {};
  db.doc(`/date/${req.params.dateId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Date not found" });
      }
      dateData = doc.data();
      dateData.dateId = doc.id;
      return db
        .collection("participants")
        .orderBy("created", "asc")
        .where("dateId", "==", req.params.dateId)
        .get();
    })
    .then((data) => {
      dateData.participants = [];
      data.forEach((doc) => {
        dateData.participants.push(doc.data());
      });
      return res.json(dateData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};
