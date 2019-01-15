import * as actionTypes from './actions/actionTypes';

const initialSate = {
  currentStep: 1,
  userData: {
    email: '',
    password: '',
    conf_password: '',
    dayOdBirth:'',
    bDay: '',
    bMonth: '',
    bYear: '',
    gender: '',
    howHearAboutUs: '',
  }
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case actionTypes.GO_NEXT_STEP:
      return {
        ...state,
        userData: {
          ...state.userData,
        },
        currentStep: state.currentStep + 1
      };
    case actionTypes.GO_PREVIOUS_STEP:
      return {
        ...state,
        userData: {
          ...state.userData,
        },
        currentStep: state.currentStep - 1
      };
    case actionTypes.SAVE_STEP_ONE_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          email: action.email,
          password: action.password,
          conf_password: action.conf_password

        }
      };
    case actionTypes.SAVE_STEP_TWO_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          dateOfBirth: action.dateOfBirth,
          gender: action.gender,
          howHearAboutUs: action.howHearAboutUs
        }
      };
    default:
      return state;
  }
};

export default reducer;