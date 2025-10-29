export default {
  setUser(state, payload) {
    (state.token = payload.token),
      (state.userId = payload.tokenId),
      (state.tokenExpirations = payload.tokenExpiration);
  },
};
