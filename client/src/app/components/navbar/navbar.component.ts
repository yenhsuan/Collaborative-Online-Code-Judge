import { Component, OnInit, Inject } from '@angular/core';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title:string="Online Code Judge ";
  username:string="test";	
  profile: any;

  textSearch:string;

  nicknameSub:Subscription;

  constructor(@Inject('authV2') private auth,@Inject('data') private data) { }

  ngOnInit() {


    this.nicknameSub = this.auth.getNickName().subscribe( (nick:string)=>{
      this.username=nick;
    });

  	if (this.auth.authenticated()) {
  	  this.profile=this.auth.getProfile();
  	  this.username=this.profile.user_metadata.nickname;
  	}
  }

  login() {
  	this.auth.login()
  		.then(p=>{
  			this.profile=p;
        //console.log("p=" + p);
  			this.username=this.profile.user_metadata.nickname;
  		});
  }

  logout() {
 	this.auth.logout();
  }


  sendQuery():void {
    this.data.userSearch(this.textSearch);

  }
}
