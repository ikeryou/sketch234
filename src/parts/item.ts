
import { Func } from "../core/func";
import { MyDisplay } from "../core/myDisplay";
import { Scroller } from "../core/scroller";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _id:number;
  private _div:HTMLElement;
  private _tag:Array<string> = [];
  private _nowTag:string | undefined;
  private _txt:Array<string> = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'];

  constructor(opt:any) {
    super(opt)

    this._id = opt.id;
    this._c = ~~(this._id * 0);

    this._div = document.createElement('div');
    this.getEl().append(this._div);

    for(let l = 0; l < 20; l++) {
      let tag = '';
      for(let i = 0; i < 20; i++) {
        tag += this._txt[(l + i) % this._txt.length]
      }
      this._tag.push(tag);
    }
  }


  protected _update(): void {
    // super._update();

    if(this._nowTag != undefined) {
      this._div.classList.remove(this._nowTag);
    }

    // let mx = Util.instance.map(Mouse.instance.normal.y, 0, this._tag.length - 1, -1, 1);
    // mx = ~~(mx);
    let scroll = Scroller.instance.val.y;
    let rate = Util.instance.map(scroll, 0, 100, 0, Func.instance.sh() * 4);
    rate = ~~(rate);

    const c = this._c + rate;
    this._nowTag = this._tag[c % this._tag.length];
    this._div.classList.add(this._nowTag);
  }
}