import React, { Component } from 'react';
import CheckboxButtons from '../CheckboxButtons/CheckboxButtons';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class StepTwo extends Component {
  state = {
    userDay: '',
    userMonth: '',
    userYear: '',
    userGender: '',
    userAnswer: ''
  };

  onInputChange = e => {
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    })
  };


  onCheckboxChange = (gender) => {
    this.setState({
      userGender: gender
    });
  };
  componentDidMount() {
    const {dateOfBirth, userGender, userAnswer } = this.props.userGlobalData;
    if(dateOfBirth !== '') {
      const userDay = new Date(dateOfBirth).getFullYear();
      const userMonth = new Date(dateOfBirth).getMonth() + 1;
      const userYear = new Date(dateOfBirth).getDate();
      this.setState({
        userDay: userDay,
        userMonth: userMonth,
        userYear: userYear,
        userGender: userGender,
        userAnswer: userAnswer
      })
    } else {
      this.setState({
        userDay: '',
        userMonth: '',
        userYear: '',
        userGender: userGender,
        userAnswer: userAnswer
      })
    }

  }

  componentWillUnmount() {
    const {userDay, userMonth, userYear, userGender, userAnswer } = this.state;
    let userBirthday = Date.parse(`${userYear}-${userMonth}-${userDay}`);
    if(Number.isNaN(userBirthday)) {
      userBirthday = '';
    }
    this.props.saveData(userBirthday, userGender, userAnswer);
  }

  render () {
    const {userDay, userMonth, userYear } = this.state;
  return (
      <div className="step-two">
        <form className="text-center">
          <div className="form-group">
            <label >Date of Birth</label>
            <div className="input-group">
              <input
                  type="text"
                  name="userDay"
                  className="form-control text-center"
                  value={userDay}
                  onChange={this.onInputChange}
                  placeholder="DD"/>
              <input
                  type="text"
                  name="userMonth"
                  className="form-control text-center"
                  value={userMonth}
                  onChange={this.onInputChange}
                  placeholder="MM"/>
              <input
                  type="text"
                  name="userYear"
                  className="form-control text-center"
                  value={userYear}
                  onChange={this.onInputChange}
                  placeholder="YYYY"/>
            </div>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <CheckboxButtons
                onCheckboxChange={this.onCheckboxChange}
                gender={this.state.userGender}/>
          </div>
          <div className="form-group">
            <select className="custom-select"
                    id="Select"
                    defaultValue="Not selected">
              <option value="Not selected" >Where did you here about us</option>
              <option value="Friends">Friends</option>
              <option value="Coworkers">Coworkers</option>
            </select>
          </div>
        </form>
      </div>
  )};
}

const mapStateToProps = state => {
  return {
    userGlobalData: state.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveData: (userBirthday, userGender, userAnswer) => dispatch({
      type: actionTypes.SAVE_STEP_TWO_DATA,
      dateOfBirth: userBirthday,
      gender: userGender,
      howHearAboutUs: userAnswer
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
