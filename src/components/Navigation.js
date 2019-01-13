import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const Navigation = ({currentStep, goNextStep, goPrevStep}) => {
  return (
      <div className="navigation d-flex justify-content-between align-content-center">
        { currentStep !== 1 &&
        <button
            className="btn btn-link mr-auto"
            onClick={goPrevStep}>
          <i className="fas fa-arrow-left"></i> Back
        </button> }
        {currentStep !== 3 && <button
            className="btn btn-link ml-auto"
            onClick={goNextStep}>
          Next <i className="fas fa-arrow-right"></i>
        </button>}

      </div>
  );
};

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goNextStep: () => dispatch({type: actionTypes.GO_NEXT_STEP}),
    goPrevStep: () => dispatch({type: actionTypes.GO_PREVIOUS_STEP})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
