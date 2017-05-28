import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';


const DEFAULT_PROBLEM:Problem = Object.freeze( {
	id:0,
	name:'',
	desc:'',
	difficulty:'easy',
}); 

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  
  newProblem:Problem = Object.assign({},DEFAULT_PROBLEM);
  constructor(@Inject('data') private data, @Inject('auth-guard') private authGuard) { }

  ngOnInit() {
  }

  addProblem() {
  	
  	this.data.addProblem(this.newProblem)
      .then(()=>console.log('Problem Added'));

    this.newProblem = Object.assign({},DEFAULT_PROBLEM);
  }

}
