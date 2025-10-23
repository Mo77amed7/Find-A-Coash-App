export default {
  registerCoach(context, data) {
    const newCoach = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.Rate,
      areas: data.areas,
    };
    context.commit('registerCoach', newCoach);
  },
};
