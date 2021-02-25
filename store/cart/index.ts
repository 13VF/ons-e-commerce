export const ACTION_TYPES = {
  ADD_ITEM: 'ADD_ITEM'
};

export const state = () => {
  return {
    items: {}
  };
};

export const getters = {
  counter(state) {
    const { items } = state;

    return Object.keys(items).length;
  }
};

export const mutations = {
  addItem(state, item) {
    const newItems = {
      ...state.items,
      [item.id]: item
    };

    state.items = newItems;
  },

  deleteItem(state, item) {
    const newItems = {
      ...state.items
    };

    delete newItems[item.id];

    state.items = newItems;
  }
};

export const actions = {
  [ACTION_TYPES.ADD_ITEM]({commit}, item) {
    commit('addItem', item);
  }
};
