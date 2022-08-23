import { switchCodeColor } from "./switchCodeColor";

const handlerColor = (str) => {
  const classes = ["red", "green", "yellow"];

  const colorCode = {
    green: 1,
    yellow: 2,
    red: 4,
  };

  const uniqArrClasses = str.split(" ").reduce((total, value) => {
    if (total.indexOf(value) === -1) {
      total.push(value);
    }
    return total.filter((item) => classes.includes(item));
  }, []);

  const uniqArrBadClasses = str
    .split(" ")
    .reduce((total, value) => {
      if (total.indexOf(value) === -1) {
        total.push(value);
      }
      return total.filter((item) => !classes.includes(item));
    }, [])
    .join(" ");

  const sum = uniqArrClasses.reduce((prev, cur) => {
    if (colorCode[cur] !== undefined) {
      return (prev += colorCode[cur]);
    }
  }, 0);

  if (switchCodeColor[sum] === undefined) {
    console.log("некоректные данные!!!");
    return 0;
  }

  return {
    sum,
    uniqArrBadClasses,
  };
};

export default handlerColor;
