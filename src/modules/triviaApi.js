import axios from "axios";

export const Categories = {
  GENERAL_KNOWLEDGE: 9,
  BOOKS: 10,
  FILM: 11,
  MUSIC: 12,
  MUSICALS_AND_THEATRES: 13,
  TELEVISION: 14,
  VIDEO_GAMES: 15,
  BOARD_GAMES: 16,
  SCIENCE_AND_NATURE: 17,
  COMPUTERS: 18,
  MATHEMATICS: 19,
  MYTHOLOGY: 20,
  SPORTS: 21,
  GEOGRAPHY: 22,
  HISTORY: 23,
  POLITICS: 24,
  ART: 25,
  CELEBRITIES: 26,
  ANIMALS: 27,
  VEHICLES: 28,
  COMICS: 29,
  GADGETS: 30,
  ANIME_AND_MANGA: 31,
  CARTOONS_AND_ANIMATIONS: 32,
};

export function getCategory(categoryId) {
  switch (categoryId) {
    case "movies":
      return Categories.FILM;
    case "music":
      return Categories.MUSIC;
    case "videoGames":
      return Categories.VIDEO_GAMES;
    case "history":
      return Categories.HISTORY;
    case "geography":
      return Categories.GEOGRAPHY;
    case "animals":
      return Categories.ANIMALS;
    default:
      return "";
  }
}

export function getQuestions(
  amount,
  category,
  difficulty = "medium",
  type = "multiple"
) {
  return new Promise((resolve, reject) => {
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: amount,
          category: category,
          difficulty: difficulty,
          type: type,
        },
      })
      .then((res) => {
        resolve(res.data.results);
      })
      .catch((err) => reject(err));
  });
}
