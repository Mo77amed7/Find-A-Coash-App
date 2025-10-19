import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'fischer',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a better web developer!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            "I'm Julie and I've worked as a freelance web developer for years. Let me help you become a better web developer!",
          hourlyRate: 20,
        },
        {
          id: 'c3',
          firstName: 'Michael',
          lastName: 'Smith',
          areas: ['backend', 'career'],
          description:
            "I'm Michael and I've worked as a freelance web developer for years. Let me help you become a better web developer!",
          hourlyRate: 25,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
