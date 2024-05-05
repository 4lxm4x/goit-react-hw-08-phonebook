export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  token: '',
  user: {
    isLoggedIn: false,
    name: '',
    email: '',
  },
  filter: '',
};
