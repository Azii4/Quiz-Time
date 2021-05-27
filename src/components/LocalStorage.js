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

export function saveTimeAttack(name, category, score, time) {
  var todayDate = new Date().toISOString().slice(0, 10);
  const TimeAttackLeader = [
    ...JSON.parse(localStorage.getItem("TimeAttack LeaderBoard")),
    {
      name: name,
      Category: category,
      Date: todayDate,
      time: time,
      Score: score,
    }
  ];
  let jsonTimeAttackLeader = JSON.stringify(TimeAttackLeader);
  localStorage.setItem("TimeAttack LeaderBoard", jsonTimeAttackLeader);
}
