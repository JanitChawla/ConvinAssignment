export const fetchUsers = (id) => async (dispatch) => {
  try {
    console.log(id);
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    dispatch({ type: "GET", payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
