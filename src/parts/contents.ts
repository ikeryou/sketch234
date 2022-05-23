import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  constructor(opt:any) {
    super(opt)

    for(let i = 0; i < 20; i++) {
      new Item({
        el:this.getEl(),
        id:i,
      })
    }

    this._resize();
  }
}