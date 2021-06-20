import moment from "moment";
import create from "zustand";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

const getBackground = (counter) => {
  if (counter >= 10) return "#e74c3c";
  else if (counter <= -10) return " #27ae60";
  else return "#fff";
};

const getCounter = (counter, action, times) => {
  if (counter === action)
    return { counter: counter, action: action * 2, times: times * 2 };
  else return { counter, action, times };
};

const useStore = create((set) => ({
  counter: getLocalStorage("counter") || 0,
  bg: getLocalStorage("bg") || "#fff",
  times: getLocalStorage("times") || 1,
  action: getLocalStorage("action") || 30,
  date: null,
  counterUp: () =>
    set((state) => {
      let { counter, action, times } = getCounter(
        state.counter,
        state.action,
        state.times
      );

      setLocalStorage("counter", counter + times);
      setLocalStorage("action", action);
      setLocalStorage("times", times);
      setLocalStorage("bg", getBackground(counter + times));

      return {
        counter: counter + times,
        bg: getBackground(counter + times),
        action: action,
        times: times,
      };
    }),
  counterDown: () =>
    set((state) => {
      let { counter, action, times } = getCounter(
        state.counter,
        state.action,
        state.times
      );

      setLocalStorage("counter", counter - times);
      setLocalStorage("action", action);
      setLocalStorage("times", times);
      setLocalStorage("bg", getBackground(counter - times));

      return {
        counter: counter - times,
        bg: getBackground(counter - times),
        action: action,
        times: times,
      };
    }),
  setDate: (date) =>
    set((state) => {
      if (moment().diff(date, "years", false) >= 18) {
        setLocalStorage("counter", 0);
        setLocalStorage("action", 30);
        setLocalStorage("times", 1);
        setLocalStorage("bg", "#fff");

        return { date, counter: 0, times: 1, action: 30, bg: "#fff" };
      } else return { date };
    }),
}));

export default useStore;
