import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

import { DataService} from './services/data.service';
//import { AuthService} from './services/auth.service';
import { AuthV2Service} from './services/auth-v2.service';
import { AuthGuardService} from './services/auth-guard.service';
import { CollaborationService } from './services/collaboration.service';



import { routing } from './app.routes';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { EditorComponent } from './components/editor/editor.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    CallbackComponent,
    MyProfileComponent,
    EditorComponent,
    FooterComponent,
    FilterPipePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ {
    provide: 'data',
    useClass: DataService
  },
  // {
  //   provide: 'auth',
  //   useClass: AuthService
  // },
  {
    provide: 'auth-guard',
    useClass: AuthGuardService
  },
  {
    provide: 'authV2',
    useClass: AuthV2Service
  },
  {
    provide: 'collaboration',
    useClass: CollaborationService
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
