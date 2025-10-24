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

    if (!response.ok) {
      const error = await response.json();
      console.error('Error registering coach:', error);
      return;
    }

    context.commit('addCoach', { ...newCoach, id: coachId });
  },
  async loadCoaches(context) {
    const response = await fetch(
      'https://find-a-coach-dc797-default-rtdb.firebaseio.com/coaches.json'
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Error loading coaches:', error);
      return;
    }

    const data = await response.json();
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
