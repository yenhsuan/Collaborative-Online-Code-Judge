import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-problem-detail', 
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  currentProblem : Problem;
  sessionId:string;


  constructor(
  	@Inject('data') private data,
    @Inject('authV2') private auth,
  	private route: ActivatedRoute
  ) {}
  // [!] Service type? any?
  // [v] pre-defined in app,module

  ngOnInit() {
    
  	this.route.params.subscribe(input => {
  		this.data.getProblem(+input["id"])
        .then(p=> this.currentProblem=p);
  	})
  }

}
