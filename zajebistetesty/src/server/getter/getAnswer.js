const getAnswers = (dane) =>
  Object.keys(dane.answers).map((key) => dane.answers[key]);

export default getAnswers;
