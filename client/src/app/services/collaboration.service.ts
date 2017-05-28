import { Injectable } from '@angular/core';
import { COLORS } from '../../assets/color';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

declare let io:any; // Socket.io
declare let ace:any; // Ace Editor

@Injectable()
export class CollaborationService {
  coEditorSocket : any;

  clientNum:number = 0;
  clients:Object = {};

  roomUserNum = new BehaviorSubject<string>("1");

  constructor() { }

  getRoomUserNum() {
    return this.roomUserNum.asObservable();
  }

  coEditorSocketInit(editor:any, sessionId:string) :void {
  	
    // HandShaking
    this.coEditorSocket = io(window.location.origin, {query: `sessionId=${sessionId}`});

    // Listen text changes (receive)
  	this.coEditorSocket.on('change', (delta:string)=>{
  		console.log('receive editor changed:'+delta);
  		delta = JSON.parse(delta);
  		editor.lastAppliedChange = delta;

  		editor.getSession().getDocument().applyDeltas([delta]);
    });

    // Listen cursor changes(receive)

    this.coEditorSocket.on('cursor', (curMove:string)=>{
      console.log('receive cursor change' + curMove);
      let cur:any = JSON.parse(curMove);

      let x:any = cur.row;
      let y:any = cur.column;

      let coUserId:any = cur.socketId;

      let editorSession = editor.getSession();


      if (coUserId in this.clients) {
        editorSession.removeMarker(this.clients[coUserId]['marker']);
      } else {
        this.clients[coUserId] = {};

        // [!] css
        let css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.editor_cursor_' + coUserId
          + '{ position: absolute; background: ' + COLORS[this.clientNum] + ';'
          + 'z-index: 100; width: 3px !important; }';
        document.body.appendChild(css);
        this.clientNum++;
      }

      // [!] New cursor

      let Range = ace.require('ace/range').Range;
      let newMarker = editorSession.addMarker(new Range(x, y, x, y+1),
                                        `editor_cursor_${coUserId}`,
                                        true);
      this.clients[coUserId]['marker'] = newMarker;
    });
    
      this.coEditorSocket.on('userNum', (num:string)=>{
        this.roomUserNum.next(num);
        console.log(num+' user(s) in the room');

      });

  }

  // Send text changes
  changeText(delta:string):void {
  	this.coEditorSocket.emit('change',delta);
  }


  // Send cursor changes
  moveCursor(curMove:string) :void {
    console.log(curMove);
    this.coEditorSocket.emit('cursor',curMove);

  }


  loadContents():void {
    this.coEditorSocket.emit('getContent');
  }

  disconnect():void {
    this.coEditorSocket.disconnect();
  }

}

