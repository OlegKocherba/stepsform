import React, {Component} from 'react';
import './CheckboxButtons.scss'

class CheckboxButtons extends Component {

  buttons = [
    { name: 'male', label: 'Male'},
    { name: 'female', label: 'Female'},
    { name: 'unspecified', label: 'Unspecified'}
  ];


  render() {
    const { gender, onCheckboxChange } = this.props;
    const buttons = this.buttons.map(({name, label}) => {

      const isActive = gender === name;

      const clazz = isActive ? 'btn-info': 'btn-outline-secondary';
      return (
          <button type="button"
                  className={`btn ${clazz}`}
                  key={name}
                  onClick={() => onCheckboxChange(name)}
          >{label}</button>
      )
    });

    return (
        <div className="btn-group w-100">
          {buttons}
        </div>
    );
  }
}

export default CheckboxButtons;