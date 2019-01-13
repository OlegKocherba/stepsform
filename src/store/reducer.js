import * as actionTypes from './actions';

const initialSate = {
  currentStep: 1,
  userData: {
    email: '',
    password: '',
    conf_password: '',
    dateOfBirth: '',
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
    // case actionTypes.INPUT_CHANGE:
    //   return {
    //     ...state,
    //     userData: {
    //       ...state.userData,
    //       [action.name]: action.value,
    //     }
    //   };
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


    case actionTypes.CHECKBOX_CHANGE:
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