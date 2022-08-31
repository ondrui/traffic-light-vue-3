import { switchCodeColor } from "./switchCodeColor";

const handlerColor = (str: string = "") => {
  const classes = ["red", "green", "yellow"];

  interface CodeColor {
    [index: string]: number;
    green: number;
    yellow: number;
    red: number;
  }

  const colorCode: CodeColor = {
    green: 1,
    yellow: 2,
    red: 4,
  };

  const uniqArrClasses = str.split(" ").reduce<string[]>((total, value) => {
    if (total.indexOf(value) === -1) {
      total.push(value);
    }
    return total.filter((item) => classes.includes(item));
  }, []);

  const uniqArrBadClasses = str
    .split(" ")
    .reduce<string[]>((total, value) => {
      if (total.indexOf(value) === -1) {
        total.push(value);
      }
      return total.filter((item) => !classes.includes(item));
    }, [])
    .join(" ");

  const sum = uniqArrClasses.reduce((prev, cur): number => {
    return (prev += colorCode[cur]);
  }, 0);

  return {
    sum,
    uniqArrBadClasses,
  };
};

export default handlerColor;
