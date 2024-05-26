export class NumberUtils {
  getPadNumber = (number: number) => {
    return number < 10 ? "0" + number : number.toString();
  };
}
