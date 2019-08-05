import { Robot } from "./Robot";
import Validator from "./helpers/Validator";
import { ITable } from "./interfaces/ITable";
import { FaceObject } from "./objects/FaceObject";

export default class RobotManager {
  /**
   * createRobot
   */
  public createRobot(
    tableSize: number,
    x: number,
    y: number,
    face: string
  ): any {
    let validator = new Validator();
    let validateFaceError = validator.validateFace(face);
    if (Object.keys(validateFaceError).length > 0) {
      console.log(validateFaceError.message);
      return;
    }
    const table: ITable = { size: tableSize };
    const faceObj = this.getFaceObjByStringKey(face); // sorry for this but i face an issue with getting obj by string key , there must be different way
    return new Robot(x, y, faceObj, table);
  }

  private getFaceObjByStringKey(face: string): any {
    const faceObjectValues = Object.values(FaceObject);
    let robotFace = {};
    for (let index = 0; index < faceObjectValues.length; index++) {
      const faceObj = faceObjectValues[index];
      if (faceObj.name == face) {
        robotFace = faceObj;
      }
    }
    return robotFace;
  }
}
