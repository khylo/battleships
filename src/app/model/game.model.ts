import { GameMode } from "./game-mode";

export class Game{
    mode:GameMode;
    isDone:boolean;
    dateCreated: Date;
    dateDue: Date;

    constructor(mode:GameMode){
      this.mode=mode;
      this.isDone=false;
      this.dateCreated=new Date();
      this.dateDue=new Date();
      this.dateDue.setTime(this.dateCreated.getTime()+24*60*60*1000);
    }
  }