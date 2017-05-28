import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { Subscription} from 'rxjs/Subscription';
import {FilterPipePipe} from '../../pipes/filter-pipe.pipe';


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: Problem[];
  problemSubscribed:Subscription;
  searchSubscribed:Subscription;
  names:any;

  search:string;

  constructor(@Inject('data') private dataService,@Inject('authV2') private auth) { 
    this.names = ['Prashobh','Abraham','Anil','Sam','Natasha','Marry','Zian','karan']

  }

  ngOnInit() {
  	//this.problems=this.dataService.getProblems();
  	this.problemSubscribed = this.dataService.getProblems()
  		.subscribe(problems => {this.problems=problems});	

    this.searchSubscribed = this.dataService.subscribeSearch()
      .subscribe(text=>this.search=text);
  }

}
