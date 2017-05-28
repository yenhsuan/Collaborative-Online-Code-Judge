import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Http,Response, Headers} from '@angular/http';

import { PROBLEMS } from '../mock-problems'; 
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

  private _problemSource = new BehaviorSubject<Problem[]>([]);
  private _problemSearch = new BehaviorSubject<string>('');
  // [!] create this obj in constructor
  // [!] No type. WHY?

  problemSet:Problem[]=PROBLEMS;
  constructor(private httpObj:Http) { }

  getProblems(): Observable<Problem[]> {
    this.httpObj.get('api/v1/problems')
        .toPromise()
        .then( (response:Response)=>{
            this._problemSource.next(response.json())
        })
        .catch(this.handleError);

        return this._problemSource.asObservable();
  }

  getProblem(id:number): Promise<Problem> {

    return this.httpObj.get(`api/v1/problems/${id}`)
            .toPromise()
            .then( (response:Response)=>response.json())
            .catch(this.handleError);
  }

  addProblem(p:Problem) {
    let header = new Headers({
      'content-type':'application/json'
    });

    return this.httpObj.post('api/v1/problems',p,header)
              .toPromise()
              .then( (response:Response)=>{
                this.getProblems();
                console.log(response.json());
              })
              .catch(this.handleError);
  }

  buildRunCode(code:Object): Promise<Object> {
    let header = new Headers({
      'content-type':'application/json'
    });

    return this.httpObj.post('api/v1/build',code,header)
              .toPromise()
              .then( (response:Response)=>{
                console.log(`compiled: ${response}`);
                return (response.json());
              })
              .catch(this.handleError);
  }

  subscribeSearch() {

    return this._problemSearch.asObservable();
  }

  userSearch(text:string) {
    this._problemSearch.next(text);
  }



  private handleError(error:any):Promise<any> {
    console.error('An error happened!');
    return Promise.reject(error.body || error);
  }




}
