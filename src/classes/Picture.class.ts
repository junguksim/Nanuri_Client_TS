export class Picture {
  pictureIdx : number;
  uri : string;
  width : number;
  height : number;

  constructor(pictureIdx : number, uri: string, width: number, height : number) {
    this.pictureIdx = pictureIdx,
    this.uri = uri
    this.width = width
    this.height = height
  }
}