function saveStandard() {
  var todayDate = new Date().toISOString().slice(0, 10);
  const standardLeader = [
    {
      name: "Peter Dinkelberg",
      Category: "Video Game",
      Date: todayDate,
      Score: 10,
    },
    {
      name: "Dinkelberg",
      Category: "all",
      Date: todayDate,
      Score: 9,
    },
  ];

  let jsonStandardLeader = JSON.stringify(standardLeader);
  localStorage.setItem("Standard LeaderBoard", jsonStandardLeader);
}

function saveTimeAttack() {
  var todayDate = new Date().toISOString().slice(0, 10);
  const TimeAttackLeader = [
    {
      name: "bob",
      Category: "Video Game",
      Date: todayDate,
      time: "1:20",
      Score: 10,
    },
    {
      name: "stewart",
      Category: "all",
      Date: todayDate,
      time: "1:36",
      Score: 9,
    },
  ];
  let jsonTimeAttackLeader = JSON.stringify(TimeAttackLeader);
  localStorage.setItem("TimeAttack LeaderBoard", jsonTimeAttackLeader);
}
saveStandard();
saveTimeAttack();
