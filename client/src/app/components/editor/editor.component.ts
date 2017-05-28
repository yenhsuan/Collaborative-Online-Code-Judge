import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Subscription} from 'rxjs/Subscription';


declare let ace:any;
declare let jQuery:any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit,AfterViewInit {
	
	randomSID:string="";
	joinSID:string="";

	validJoinSID:boolean=false;
	redirectProblemMsg:boolean=false;

	numUsersSub:Subscription;
	numUsers:string="1";



	session_id:string;
	editor:any;
	langSeleted:string = 'Java';
	languages:string[] = ['Java', 'C++', 'Python'];

	results:object;

	modeFile = {
		'Java':'java',
		'C++':'c_cpp',
		'Python':'python'
	};

	defaultContent = {
	    'Java': `public class Mycode {
	public static void main(String[] args) { 
	  // Type your Java code here 
	} 
}`,
		    'C++': `#include <iostream> 
using namespace std; 
int main() { 
  // Type your C++ code here 
  return 0; 
}`, 
        'Python': `class Solution: 
       def mycode(): 
           # Write your Python code here`
};

  constructor(@Inject('collaboration') private colab, private route:ActivatedRoute,
  			  @Inject ('data') private data,
  			  @Inject('authV2') private auth) { }
  
  ngOnInit() {

  	this.numUsersSub = this.colab.getRoomUserNum().subscribe((num:string)=>{
  		this.numUsers=num;
  	});


	this.editor = ace.edit('editor');
  	this.editor.setTheme('ace/theme/monokai');
  	this.editor.setFontSize(14);
    this.editor.$blockScrolling = Infinity;
    this.setEditor();
    this.generateRandomSessionId();

    this.session_id=this.randomSID;

    this.colab.coEditorSocketInit(this.editor,this.session_id);
    this.editor.lastAppliedChange = null; 

    // Listening users inputs

    this.editor.on('change', e=>{

    	let strChange:string = JSON.stringify(e);

    	if (this.editor.lastAppliedChange !=e ) {
    		this.colab.changeText(JSON.stringify(e));
    	}

    });

    // Listening users cursor

    this.editor.getSession().getSelection().on('changeCursor', ()=> {

    	let cursor = this.editor.getSession().getSelection().getCursor();
    	this.colab.moveCursor(JSON.stringify(cursor));

    });

    // Loading current editor contents

    this.colab.loadContents();
    


  }

  ngAfterViewInit(): void {
   	jQuery('.selectpicker').selectpicker();
  }



  setEditor() {
  	this.editor.setValue(this.defaultContent[this.langSeleted]);
  	console.log(`ace/mode/${this.modeFile[this.langSeleted]}`);
  	this.editor.getSession().setMode(`ace/mode/${this.modeFile[this.langSeleted]}`);
  	this.editor.clearSelection();
  }

  submit() {
  	this.results=null;
  	let codes:string = this.editor.getValue();

  	let submittedCode = {
  		userCode: codes,
  		lang:this.langSeleted.toLowerCase()
  	};

    jQuery('#submitBtn').button('loading');
  	this.data.buildRunCode(submittedCode)
  		.then (res => {
  			this.results=res;
  			console.log(res);
        jQuery('#submitBtn').button('reset');
  		});
  }

  setLanguage(langSeleted:string) {
  	this.setEditor();
  }


  generateRandomSessionId():void {

  	this.route.params.subscribe(input => {
	    const nickname = this.auth.getProfile().nickname;
	    this.randomSID = input["id"]+'-'+nickname + Math.floor((Math.random() * 10000) + 10000);
	 	console.log(this.randomSID);
  	});
  }

  joinRoom():void {	
  	this.colab.disconnect();
  	this.setEditor();


	this.session_id=this.joinSID;
	this.randomSID=this.joinSID;

    this.colab.coEditorSocketInit(this.editor,this.session_id);
    this.editor.lastAppliedChange = null; 

    // Listening users inputs

    // this.editor.on('change', e=>{

    // 	let strChange:string = JSON.stringify(e);

    // 	if (this.editor.lastAppliedChange !=e ) {
    // 		this.colab.changeText(JSON.stringify(e));
    // 	}

    // });

    // // Listening users cursor

    // this.editor.getSession().getSelection().on('changeCursor', ()=> {

    // 	let cursor = this.editor.getSession().getSelection().getCursor();
    // 	this.colab.moveCursor(JSON.stringify(cursor));

    // });

    // Loading current editor contents

    this.colab.loadContents();

  }

  checkJoinSID():void {
  	console.log(this.joinSID.match(/\d+-\w+\d+/));


  	this.route.params.subscribe(input => {

	  	if (this.joinSID.match(/\d+-\w+\d+/g)) {
	  		let hidx= this.joinSID.indexOf('-');
	  		let pid=this.joinSID.substring(0,hidx);

	  		console.log(pid+' '+input["id"]);
	  		if (pid==input["id"]) {
	  			
	  			this.validJoinSID=true;
	  			this.redirectProblemMsg=false;
	  		}
	  		else {
	  			this.validJoinSID=false;
	  			this.redirectProblemMsg=true;
	  		}
	  	} else {	  		
	  			this.validJoinSID=false;
	  			this.redirectProblemMsg=false;
	  	}
  	});
  }




}
