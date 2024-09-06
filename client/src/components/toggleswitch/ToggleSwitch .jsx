import { useState } from 'react';
import './ToggleSwitch.css'; 
const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch">
      <input
        className="toggle-switch-checkbox"
        id="toggleSwitch"
        type="checkbox"
        checked={isOn}
        onChange={toggleSwitch}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className={`toggle-switch-button ${isOn ? 'on' : 'off'}`}></span>
      </label>
      <p>{isOn ? "Switch is ON" : "Switch is OFF"}</p>
    </div>
  );
};

export default ToggleSwitch;
