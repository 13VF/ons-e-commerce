export const state = () => {
  return {
    counter: 13
  };
};

export const mutations = {
  increment(state) {
    state.counter++;
  }
};