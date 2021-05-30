export function saveStandard(name, category, score) {
  var todayDate = new Date().toISOString().slice(0, 10);
  const standardLeader = [
    ...JSON.parse(localStorage.getItem("Standard LeaderBoard")) ?? [],
    {
      name: name,
      Category: getCategoryString(category),
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
    ...JSON.parse(localStorage.getItem("TimeAttack LeaderBoard")) ?? [],
    {
      name: name,
      Category: getCategoryString(category),
      Date: todayDate,
      time: time,
      Score: score,
    }
  ];
  let jsonTimeAttackLeader = JSON.stringify(TimeAttackLeader);
  localStorage.setItem("TimeAttack LeaderBoard", jsonTimeAttackLeader);
}

const getCategoryString = (category) => {
  switch (category) {
    case "all":
      return "All Categories"
    case "movies":
      return "Movies"
    case "music":
      return "Music"
    case "videoGames":
      return "Video Games"
    case "history":
      return "History"
    case "geography":
      return "Geography"
    case "animals":
      return "Animals"
    default:
      return "Missing Category"
  }
}
