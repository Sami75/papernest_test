import React from "react";
import DatePicker from "react-date-picker";
import styles from "./Counter.module.scss";
import useStore from "./counterStore";

const Down = () => {
  const setDate = useStore((state) => state.setDate);
  const date = useStore((state) => state.date);

  function onDateChange(date) {
    setDate(date);
  }

  return (
    <>
      <DatePicker
        className={styles.datepicker}
        onChange={onDateChange}
        value={date}
      />
    </>
  );
};

export default Down;
