export default {
  contactCoach(context, payload) {
    const contactPayload = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', contactPayload);
  },
};
