import React from 'react';

import { connect } from 'react-redux';

const StepThree = ({ userGlobalData }) => {

  const uploadData = () => {
    console.log(userGlobalData);
  };
  return (
      <div className="step-three">
       <div className="icon-wrap">
         <i className="fas fa-check-circle text-success"></i>
       </div>
        <button
          className="btn btn-outline-success"
          onClick={uploadData}>
Go to Dashboard <i className="fas fa-arrow-right"></i>
        </button>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    userGlobalData: state.userData,
  };
};

export default connect(mapStateToProps)(StepThree);
