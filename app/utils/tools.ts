export default class Tools {
  static getRand(min : number, max : number) : number {
    return Math.round((Math.random() * (max - min))) + min;
  }
}
