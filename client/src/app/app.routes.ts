import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { CallbackComponent} from './components/callback/callback.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HomeComponent } from './components/home/home.component';


const route: Routes = [

	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'problems',
		component: ProblemListComponent

	},
	{
		path: 'home',
		component: HomeComponent

	},
	{
		path: 'problems/:id',
		component: ProblemDetailComponent,
		canActivate:['auth-guard']

	},
	{
		path: 'myprofile',
		component: MyProfileComponent,
		canActivate:['auth-guard']

	},
	// {
	// 	path: 'callback',
	// 	component: CallbackComponent
	// },
	{
		path: '**',
		redirectTo: 'home'
	},

];

export const routing = RouterModule.forRoot(route);