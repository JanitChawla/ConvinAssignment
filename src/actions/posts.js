export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    dispatch({ type: "FETCH", payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
