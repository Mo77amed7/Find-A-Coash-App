export default {
  async contactCoach(context, payload) {
    const contactPayload = {
      email: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://find-a-coach-dc797-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(contactPayload),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (!response.ok) {
      const error = new Error('Failed to send request.');
      throw error;
    }
    const responseData = await response.json();
    contactPayload.id = responseData.name;
    contactPayload.coachId = payload.coachId;

    context.commit('addRequest', contactPayload);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://find-a-coach-dc797-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error('Failed to load requests.');
      throw error;
    }
    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        email: responseData[key].email,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
