export function saveStandard(name, category, score) {
  var todayDate = new Date().toISOString().slice(0, 10);
  const standardLeader = [
    ...JSON.parse(localStorage.getItem("Standard LeaderBoard")),
    {
      name: name,
      Category: category,
      Date: todayDate,
      Score: score,
    }
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
saveTimeAttack();
