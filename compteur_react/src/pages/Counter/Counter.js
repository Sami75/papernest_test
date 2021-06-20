import React from "react";
import { Minus, Plus, RotateCcw } from "react-feather";
import { useHistory } from "react-router-dom";
import useStore from "../../components/Counter/counterStore";
import Down from "../../components/Counter/Down";
import Reset from "../../components/Counter/Reset";
import Up from "../../components/Counter/Up";
import styles from "./Counter.module.scss";

const Counter = ({ up, down, reset }) => {
  const counter = useStore((state) => state.counter);
  const bg = useStore((state) => state.bg);
  const history = useHistory();

  return (
    <div className={styles.counter} style={{ background: bg }}>
      {up && <Up />}
      {down && <Down />}
      {reset && <Reset />}
      <svg className={styles.counter_value} viewBox="0 0 56 18">
        <text x="0" y="15">
          {counter}
        </text>
      </svg>
      <div className={styles.counter_menu}>
        <div
          className={styles.counter_link_up}
          onClick={() => history.push("/up")}
        >
          Counter Up <Plus />
        </div>
        <div
          className={styles.counter_link_reset}
          onClick={() => history.push("/reset")}
        >
          Reset <RotateCcw />
        </div>
        <div
          className={styles.counter_link_down}
          onClick={() => history.push("/down")}
        >
          Counter Down <Minus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
