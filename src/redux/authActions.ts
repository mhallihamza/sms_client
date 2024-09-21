export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user:any) => {
  return (dispatch:any) => {
    // Save the user to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Dispatch the action to update the Redux state
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: user,
    });
  };
};

export const loginFailure = (error:any) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const logout = () => {
  return (dispatch:any) => {
    // Remove the user from localStorage
    localStorage.removeItem("user");

    // Dispatch the logout action
    dispatch({
      type: "LOGOUT",
    });
  };
};

