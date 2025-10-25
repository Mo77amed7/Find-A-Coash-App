export default {
  async registerCoach(context, data) {
    const coachId = context.rootGetters.userId;
    const newCoach = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.Rate,
      areas: data.areas,
    };
    const response = await fetch(
      `https://find-a-coach-dc797-default-rtdb.firebaseio.com/coaches/${coachId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(newCoach),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to register coach.'
      );
      throw error;
    }
    context.commit('addCoach', { ...newCoach, id: coachId });
  },
  async loadCoaches(context) {
    const response = await fetch(
      'https://find-a-coach-dc797-default-rtdb.firebaseio.com/coaches.json'
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to load coaches.'
      );
      throw error;
    }
    const data = responseData || {};
    const coaches = [];

    for (const key in data) {
      const coach = {
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        description: data[key].description,
        hourlyRate: data[key].hourlyRate,
        areas: data[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  },
};
