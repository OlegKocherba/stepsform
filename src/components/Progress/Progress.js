import React from 'react';
import  './Progress.scss';
import { connect } from 'react-redux'

const Progress = ({currentStep}) => {
  let widthClassname;
  switch (currentStep) {
    case 1:
      widthClassname = "w-33";
      break;
    case 2:
      widthClassname = "w-66";
      break;
    case 3:
      widthClassname = "w-100";
      break;
    default:  widthClassname = "w-33"
  }

  return (
      <div className="progress">
        <div className={`progress-bar bg-info ${widthClassname}`}
             role="progressbar"
             aria-valuemin="0"
             aria-valuemax="100">
        </div>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep,
  };
};

export default connect(mapStateToProps)(Progress);
