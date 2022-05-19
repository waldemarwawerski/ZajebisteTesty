const getMessages = (data) =>
  Object.keys(data.messages).map((key) => data.messages[key]);

export default getMessages;
