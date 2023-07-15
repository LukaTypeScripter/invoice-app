import { useContext } from "react";
import styled from "styled-components";
import Buttons from "./Reusable/Button";
import { DarkModeContext } from "../contexts";

interface DelateProps {
  onDelate: () => void;
  onCancel: () => void;
  id: string;
}
function Delate({ onDelate, onCancel, id }: DelateProps) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Tooltip darkMode={darkMode}>
      <div className="tool-tip__cont">
        <p className="tool-tip-title">Confirm Deletion</p>
        <p className="tool-tip__text">
          Are you sure you want to delete invoice #{id} This action cannot be
          undone.
        </p>
        <div className="tool-tip_btn-cont">
          <Buttons
            text={"Cancel"}
            bgColor={"#f9fafe"}
            padding="17px 24px"
            color="#7e88c3"
            onCLick={onCancel}
          />
          <Buttons
            text={"Delate"}
            bgColor={"#ec5757"}
            padding="17px 24px"
            color="#fff"
            onCLick={onDelate}
          />
        </div>
      </div>
    </Tooltip>
  );
}

const Tooltip = styled.div<{ darkMode: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: 100%;
  &::before {
    background: #000;
    bottom: 0;
    content: "";
    left: 0;
    mix-blend-mode: normal;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  .tool-tip__cont {
    align-items: flex-start;
    background: ${(props) => (props.darkMode ? "#1E2139" : "white")};
    border-radius: 8px;
    box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 13px;
    justify-content: center;
    max-width: 480px;
    padding: 48px;
    width: 100%;
  }
  .tool-tip-title {
    color: ${(props) => (props.darkMode ? "white" : "#0c0e16")};
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 32px;
    font-style: normal;
    margin: 0;
  }
  .tool-tip__text {
    color: #888eb0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.25px;
    line-height: 22px;
  }
  .tool-tip_btn-cont {
    align-items: center;
    align-self: flex-end;
    display: flex;
    gap: 8px;
    justify-content: center;
  }
`;

export default Delate;
