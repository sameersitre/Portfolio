
const initialState = {
  loading: false,
};
const LOADING = 'loader/LOADING';

export const setLoading = (param) => async (dispatch, getState) => {
  await dispatch({
    type: LOADING,
    payload: param
  });
}


const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }
    default: return state;
  }
}
export default loaderReducer;