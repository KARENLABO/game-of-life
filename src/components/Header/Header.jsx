import React from "react";
import {
  Play,
  Pause,
  Clear,
  ChevronLeft,
  ChevronRigth,
  ClearDisabled,
  ChevronLeftDisabled,
  ChevronRigthDisabled,
} from "../../Assets";

import { bool, func } from "prop-types";

import "./styles.scss";

function Header({
  runProgram,
  onClickPause,
  onClickStart,
  onClickClear,
  onClickCustom,
}) {
  return (
    <div className="top-content">
      <h1 className="principal-title">THE GAME OF LIFE</h1>

      <div className="rules">
        <h3 className="rules-title"> RULES</h3>
        <div>
          <p>
            - If the cell is alive, it will stay alive if it has 2 or 3
            neighbors alive.
          </p>
          <p>
            - If the cell is dead, then it comes to life only in case it has 3
            neighbors alive.
          </p>
        </div>
      </div>

      <div className="buttons-actions">
        <div>
          {runProgram ? (
            <img onClick={onClickPause} src={Pause} alt="pause" />
          ) : (
            <img onClick={onClickStart} src={Play} alt="play" />
          )}
        </div>

        <div>
          <img
            onClick={onClickClear}
            src={!runProgram ? Clear : ClearDisabled}
            alt="clear"
            className={runProgram ? "disabled" : ""}
          />
        </div>
        <div className="select-random">
          <p>Select</p>
          <p>Random</p>
          <div>
            <div>
              <img
                onClick={onClickCustom}
                src={!runProgram ? ChevronLeft : ChevronLeftDisabled}
                alt="random"
                className={runProgram ? "disabled" : ""}
              />

              <img
                onClick={onClickCustom}
                src={!runProgram ? ChevronRigth : ChevronRigthDisabled}
                alt="random"
                className={runProgram ? "disabled" : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  runProgram: bool.isRequired,
  onClickPause: func.isRequired,
  onClickStart: func.isRequired,
  onClickClear: func.isRequired,
  onClickCustom: func.isRequired,
};

export default Header;
