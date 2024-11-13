// console.log(firebase);

madrid = {
  teamName: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  topScorers: ["Ronaldo", "Benzema", "Hazard"],
  worldwideFans: 798,
};
barcelona = {
  teamName: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  topScorers: ["Messi", "Suarez", "Puyol"],
  worldwideFans: 738,
};
man = {
  teamName: "Manchester United",
  city: "Manchester",
  country: "England",
  topScorers: ["Cantona", "Rooney", "Ronaldo"],
  worldwideFans: 755,
};
man_city = {
  teamName: "Manchester City",
  city: "Manchester",
  country: "England",
  topScorers: ["Sterling", "Aguero", "Haaland"],
  worldwideFans: 537,
};
brazil = {
  teamName: "Brazil National Team",
  city: "Not applicable",
  country: "Brazil",
  topScorers: ["Ronaldinho", "Cafu", "Bebeto"],
  worldwideFans: 950,
};
argentina = {
  teamName: "Argentina National Team",
  city: "Not applicable",
  country: "Argentina",
  topScorers: ["Messi", "Batistuta", "Maradona"],
  worldwideFans: 888,
};
atletico = {
  teamName: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  topScorers: ["Aragonés", "Griezmann", "Torez"],
  worldwideFans: 400,
};

// db.collection("teams").add(madrid);
// db.collection("teams").add(barcelona);
// db.collection("teams").add(man);
// db.collection("teams").add(man_city);
// db.collection("teams").add(brazil);
// db.collection("teams").add(argentina);
// db.collection("teams").add(atletico);

// task 2

q1Div = document.getElementById("q1");

db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    html = `Question 1: `;
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      html += `${d.data().teamName}, `;
    });
    q1Div.innerHTML = html;
  });

q2Div = document.getElementById("q2");

db.collection("teams")
  .where("city", "==", "Madrid")
  .get()
  .then((data) => {
    html = `Question 2: `;
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      html += `${d.data().teamName}, `;
    });
    q2Div.innerHTML = html;
  });

q3Div = document.getElementById("q3");

db.collection("teams")
  .where("city", "==", "Not applicable")
  .get()
  .then((data) => {
    html = `Question 3: `;
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      html += `${d.data().teamName}, `;
    });
    q3Div.innerHTML = html;
  });

q4Div = document.getElementById("q4");

db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((data) => {
    html = `Question 4: `;
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      html += `${d.data().teamName}, `;
    });
    q4Div.innerHTML = html;
  });

q5Div = document.getElementById("q5");

db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((data) => {
    html = `Question 5: `;
    let mydocs = data.docs;
    mydocs = mydocs.filter((d) => d.data().country !== "England");

    mydocs.forEach((d) => {
      html += `${d.data().teamName}, `;
    });
    q5Div.innerHTML = html;
  });

q6Div = document.getElementById("q6");

db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    html = `Question 6: `;
    let mydocs = data.docs;
    mydocs = mydocs.filter((d) => d.data().worldwideFans > 700);

    mydocs.forEach((d) => {
      html += `${d.data().teamName}, `;
    });
    q6Div.innerHTML = html;
  });

q7Div = document.getElementById("q7");

db.collection("teams")
  .where("worldwideFans", ">", 500)
  .get()
  .then((data) => {
    html = `Question 7: `;
    let mydocs = data.docs;
    mydocs = mydocs.filter((d) => d.data().worldwideFans < 600);

    mydocs.forEach((d) => {
      html += `${d.data().teamName}, `;
    });
    q7Div.innerHTML = html;
  });

q8Div = document.getElementById("q8");

db.collection("teams")
  .get()
  .then((data) => {
    html = `Question 8: `;
    let mydocs = data.docs;
    mydocs = mydocs.filter((d) => d.data().topScorers.includes("Ronaldo"));
    mydocs.forEach((d) => {
      html += `${d.data().teamName}, `;
    });
    q8Div.innerHTML = html;
  });

q9Div = document.getElementById("q9");

db.collection("teams")
  .get()
  .then((data) => {
    let html = `Question 9: `;
    let mydocs = data.docs;
    mydocs = mydocs.filter((d) => {
      const topScorers = d.data().topScorers;
      return (
        topScorers.includes("Ronaldo") ||
        topScorers.includes("Maradona") ||
        topScorers.includes("Messi")
      );
    });
    mydocs.forEach((d) => {
      html += `${d.data().teamName}, `;
    });
    q9Div.innerHTML = html;
  });

// task 3 updating data
//  a1
db.collection("teams").doc("86mI0GCpH3xglkMl1Hvl").update({
  teamName: "Real Madrid FC",
  worldwideFans: 811,
});

//  a2
db.collection("teams").doc("RzC5brJwdLGNDFHVsiVg").update({
  teamName: "FC Barcelona",
  worldwideFans: 747,
});

//  a1
db.collection("teams")
  .doc("86mI0GCpH3xglkMl1Hvl")
  .update({
    topScorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
    topScorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
  });

//  a2
db.collection("teams")
  .doc("RzC5brJwdLGNDFHVsiVg")
  .update({
    topScorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
    topScorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
  });

// b
db.collection("teams")
  .doc("86mI0GCpH3xglkMl1Hvl")
  .update(
    (color = {
      home: "white",
      away: "black",
    })
  );

db.collection("teams")
  .doc("RzC5brJwdLGNDFHVsiVg")
  .update(
    (color = {
      home: "red",
      away: "gold",
    })
  );

// c
db.collection("teams").doc("86mI0GCpH3xglkMl1Hvl").update({
  away: "purple",
});

// d
db.collection("teams").doc("RzC5brJwdLGNDFHVsiVg").update({
  away: "pink",
});
