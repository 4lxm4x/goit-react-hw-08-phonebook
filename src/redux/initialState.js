export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },

  user: {
    isLoggedIn: false,
    name: '',
    email: '',
    token: '',
  },
  filter: '',
};
