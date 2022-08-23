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

  const uniqArrBadClasses = str.split(" ").reduce((total, value) => {
    if (total.indexOf(value) === -1) {
      total.push(value);
    }
    return total.filter((item) => !classes.includes(item));
  }, []);

  const sum = uniqArrClasses.reduce((prev, cur) => {
    if (colorCode[cur] !== undefined) {
      return (prev += colorCode[cur]);
    }
  }, 0);

  console.log(uniqArrBadClasses, sum, switchCodeColor[sum]);

  // if (switchCodeColor[sum] !== undefined) {
  //   return str;
  // } else {
  //   return 333;

  // return {
  //   uniqArrClasses,
  //   uniqArrBadClasses,
  // };
  return str;
};

export default handlerColor;
