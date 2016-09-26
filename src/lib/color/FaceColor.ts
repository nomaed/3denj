import {RGBA} from "./RGBA";

export class FaceColor {
  public static defaultStroke = new RGBA(0, 0, 0, .3);
  public static defaultFill = new RGBA(0, 150, 255, 0.3);

  public fill: RGBA;
  public stroke: RGBA;

  constructor(fill?: RGBA, stroke?: RGBA) {
    this.fill = fill || FaceColor.defaultFill;
    this.stroke = stroke || FaceColor.defaultStroke;
  }
}
