const getMatchedUserInfo = (users, userLoggedIn) => {
  const newUsers = { ...users };
  delete newUsers[userLoggedIn];

  const user = Object.values(newUsers)[0];

  return { ...user };
};

export default getMatchedUserInfo;
