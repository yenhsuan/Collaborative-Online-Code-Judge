webpackJsonp([1,5],{

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 149;


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(183);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
// src/app/app.component.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { AuthService } from './services/auth.service';
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(265),
        styles: [__webpack_require__(241)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_problem_list_problem_list_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_problem_detail_problem_detail_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_v2_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_collaboration_service__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_new_problem_new_problem_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_callback_callback_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_my_profile_my_profile_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_editor_editor_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_filter_pipe_pipe__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_home_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { AuthService} from './services/auth.service';












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_problem_list_problem_list_component__["a" /* ProblemListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_new_problem_new_problem_component__["a" /* NewProblemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_my_profile_my_profile_component__["a" /* MyProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_filter_pipe_pipe__["a" /* FilterPipePipe */],
            __WEBPACK_IMPORTED_MODULE_19__components_home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routing */]
        ],
        providers: [{
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */]
            },
            // {
            //   provide: 'auth',
            //   useClass: AuthService
            // },
            {
                provide: 'auth-guard',
                useClass: __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuardService */]
            },
            {
                provide: 'authV2',
                useClass: __WEBPACK_IMPORTED_MODULE_8__services_auth_v2_service__["a" /* AuthV2Service */]
            },
            {
                provide: 'collaboration',
                useClass: __WEBPACK_IMPORTED_MODULE_10__services_collaboration_service__["a" /* CollaborationService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_my_profile_my_profile_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var route = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__["a" /* ProblemListComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'problems/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */],
        canActivate: ['auth-guard']
    },
    {
        path: 'myprofile',
        component: __WEBPACK_IMPORTED_MODULE_3__components_my_profile_my_profile_component__["a" /* MyProfileComponent */],
        canActivate: ['auth-guard']
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
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(route);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
        console.log(localStorage);
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-callback',
        template: __webpack_require__(266),
        styles: [__webpack_require__(242)]
    }),
    __metadata("design:paramtypes", [])
], CallbackComponent);

//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditorComponent = (function () {
    function EditorComponent(colab, route, data, auth) {
        this.colab = colab;
        this.route = route;
        this.data = data;
        this.auth = auth;
        this.randomSID = "";
        this.joinSID = "";
        this.validJoinSID = false;
        this.redirectProblemMsg = false;
        this.numUsers = "1";
        this.langSeleted = 'Java';
        this.languages = ['Java', 'C++', 'Python'];
        this.modeFile = {
            'Java': 'java',
            'C++': 'c_cpp',
            'Python': 'python'
        };
        this.defaultContent = {
            'Java': "public class Mycode {\n\tpublic static void main(String[] args) { \n\t  // Type your Java code here \n\t} \n}",
            'C++': "#include <iostream> \nusing namespace std; \nint main() { \n  // Type your C++ code here \n  return 0; \n}",
            'Python': "class Solution: \n       def mycode(): \n           # Write your Python code here"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.numUsersSub = this.colab.getRoomUserNum().subscribe(function (num) {
            _this.numUsers = num;
        });
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/monokai');
        this.editor.setFontSize(14);
        this.editor.$blockScrolling = Infinity;
        this.setEditor();
        this.generateRandomSessionId();
        this.session_id = this.randomSID;
        this.colab.coEditorSocketInit(this.editor, this.session_id);
        this.editor.lastAppliedChange = null;
        // Listening users inputs
        this.editor.on('change', function (e) {
            var strChange = JSON.stringify(e);
            if (_this.editor.lastAppliedChange != e) {
                _this.colab.changeText(JSON.stringify(e));
            }
        });
        // Listening users cursor
        this.editor.getSession().getSelection().on('changeCursor', function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            _this.colab.moveCursor(JSON.stringify(cursor));
        });
        // Loading current editor contents
        this.colab.loadContents();
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        jQuery('.selectpicker').selectpicker();
    };
    EditorComponent.prototype.setEditor = function () {
        this.editor.setValue(this.defaultContent[this.langSeleted]);
        console.log("ace/mode/" + this.modeFile[this.langSeleted]);
        this.editor.getSession().setMode("ace/mode/" + this.modeFile[this.langSeleted]);
        this.editor.clearSelection();
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        this.results = null;
        var codes = this.editor.getValue();
        var submittedCode = {
            userCode: codes,
            lang: this.langSeleted.toLowerCase()
        };
        jQuery('#submitBtn').button('loading');
        this.data.buildRunCode(submittedCode)
            .then(function (res) {
            _this.results = res;
            console.log(res);
            jQuery('#submitBtn').button('reset');
        });
    };
    EditorComponent.prototype.setLanguage = function (langSeleted) {
        this.setEditor();
    };
    EditorComponent.prototype.generateRandomSessionId = function () {
        var _this = this;
        this.route.params.subscribe(function (input) {
            var nickname = _this.auth.getProfile().nickname;
            _this.randomSID = input["id"] + '-' + nickname + Math.floor((Math.random() * 10000) + 10000);
            console.log(_this.randomSID);
        });
    };
    EditorComponent.prototype.joinRoom = function () {
        this.colab.disconnect();
        this.setEditor();
        this.session_id = this.joinSID;
        this.randomSID = this.joinSID;
        this.colab.coEditorSocketInit(this.editor, this.session_id);
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
    };
    EditorComponent.prototype.checkJoinSID = function () {
        var _this = this;
        console.log(this.joinSID.match(/\d+-\w+\d+/));
        this.route.params.subscribe(function (input) {
            if (_this.joinSID.match(/\d+-\w+\d+/g)) {
                var hidx = _this.joinSID.indexOf('-');
                var pid = _this.joinSID.substring(0, hidx);
                console.log(pid + ' ' + input["id"]);
                if (pid == input["id"]) {
                    _this.validJoinSID = true;
                    _this.redirectProblemMsg = false;
                }
                else {
                    _this.validJoinSID = false;
                    _this.redirectProblemMsg = true;
                }
            }
            else {
                _this.validJoinSID = false;
                _this.redirectProblemMsg = false;
            }
        });
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editor',
        template: __webpack_require__(267),
        styles: [__webpack_require__(243)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('collaboration')),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('authV2')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, Object, Object])
], EditorComponent);

var _a;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var NavbarComponent = (function () {
    function NavbarComponent(auth, data) {
        this.auth = auth;
        this.data = data;
        this.title = "Online Code Judge ";
        this.username = "test";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nicknameSub = this.auth.getNickName().subscribe(function (nick) {
            _this.username = nick;
        });
        if (this.auth.authenticated()) {
            this.profile = this.auth.getProfile();
            this.username = this.profile.user_metadata.nickname;
        }
    };
    NavbarComponent.prototype.login = function () {
        var _this = this;
        this.auth.login()
            .then(function (p) {
            _this.profile = p;
            //console.log("p=" + p);
            _this.username = _this.profile.user_metadata.nickname;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent.prototype.sendQuery = function () {
        this.data.userSearch(this.textSearch);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(270),
        styles: [__webpack_require__(246)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('authV2')), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object, Object])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProblemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy',
});
var NewProblemComponent = (function () {
    function NewProblemComponent(data, authGuard) {
        this.data = data;
        this.authGuard = authGuard;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.data.addProblem(this.newProblem)
            .then(function () { return console.log('Problem Added'); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    return NewProblemComponent;
}());
NewProblemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-problem',
        template: __webpack_require__(271),
        styles: [__webpack_require__(247)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth-guard')),
    __metadata("design:paramtypes", [Object, Object])
], NewProblemComponent);

//# sourceMappingURL=new-problem.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(274),
        styles: [__webpack_require__(250)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROBLEMS; });
var PROBLEMS = [
    {
        id: 1,
        name: "Two Sum",
        desc: "Given an array of integers, find two numbers such that they add up to a specific target number.\n\nThe function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
        difficulty: "easy"
    },
    {
        id: 2,
        name: "3Sum",
        desc: "Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
        difficulty: "medium"
    },
    {
        id: 3,
        name: "4Sum",
        desc: "Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?\n\nFind all unique quadruplets in the array which gives the sum of target.",
        difficulty: "medium"
    },
    {
        id: 4,
        name: "Triangle Count",
        desc: "Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose three edges length is the three numbers that we find?",
        difficulty: "hard"
    },
    {
        id: 5,
        name: "Sliding Window Maximum",
        desc: "Given an array of n integer with duplicate number, and a moving window(size k), move the window at each iteration from the start of the array, find the maximum number inside the window at each moving.",
        difficulty: "super"
    }
];
//# sourceMappingURL=mock-problems.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipePipe = (function () {
    function FilterPipePipe() {
    }
    FilterPipePipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            console.log(value);
            return value.filter(function (el) {
                return el.name.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    return FilterPipePipe;
}());
FilterPipePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterPipe'
    })
], FilterPipePipe);

//# sourceMappingURL=filter-pipe.pipe.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.authenticated()) {
            return this.auth.authenticated();
        }
        this.router.navigate(['/problems']);
        return false;
    };
    AuthGuardService.prototype.isAdmin = function () {
        return this.auth.authenticated() && this.auth.getProfile().roles.includes('admin');
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('authV2')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthV2Service; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Auth0 Setting
var options = {
    theme: {
        logo: '../../assets/mylogo.png',
        primaryColor: '#2b2b2b'
    },
    languageDictionary: {
        title: "Log in"
    },
    rememberLastLogin: false,
    popupOptions: { width: 30, height: 40, left: 30, top: 30 },
    redirect: false,
    auth: {
        redirect: false,
        sso: false,
        responseType: 'token',
        params: {
            scope: 'openid'
        },
    },
    additionalSignUpFields: [{
            name: "nickname",
            placeholder: "Enter your nickname"
        },
        {
            name: "full_name",
            placeholder: "Enter your full name"
        }]
};
var AuthV2Service = (function () {
    function AuthV2Service(router, http) {
        this.router = router;
        this.http = http;
        // Configure Auth0
        this.clientId = 'HnJnTRY0i2MqJN6mMksZtGRB5v5ChEY8';
        this.domain = 'terryccc.auth0.com';
        this.lock = new Auth0Lock(this.clientId, this.domain, options);
        this.nickname = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]("");
    }
    AuthV2Service.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.lock.on("authenticated", function (authResult) {
                _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    localStorage.setItem('accessToken', authResult.accessToken);
                    localStorage.setItem('id_token', authResult.idToken);
                    localStorage.setItem('profile', JSON.stringify(profile));
                    _this.profile = profile;
                    //console.log('here');
                    resolve(profile);
                    //this.router.navigate(['/ugihuih']);
                    setTimeout(function () { _this.lock.hide(); }, 1300);
                });
            });
            _this.lock.show();
        });
    };
    AuthV2Service.prototype.getNickName = function () {
        return this.nickname.asObservable();
    };
    AuthV2Service.prototype.sendNickName = function (nick) {
        this.nickname.next(nick);
    };
    AuthV2Service.prototype.authenticated = function () {
        // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        // return localStorage.getItem('profile') && new Date().getTime() < expiresAt;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthV2Service.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('profile');
        //localStorage.removeItem('expires_at');
        localStorage.removeItem('id_token');
        this.router.navigate(['/']);
    };
    AuthV2Service.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('profile'));
    };
    AuthV2Service.prototype.updateInfo = function (info) {
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        header.append('content-type', 'application/json');
        header.append('Accept', 'application/json');
        header.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        var url = 'https://' + 'terryccc.auth0.com' + '/api/v2/users/' + this.getProfile()['user_id'];
        //console.log(url);
        return this.http.patch(url, info, { headers: header })
            .toPromise()
            .then(function (response) {
            return response['_body'];
        });
    };
    return AuthV2Service;
}());
AuthV2Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _b || Object])
], AuthV2Service);

var _a, _b;
//# sourceMappingURL=auth-v2.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_color__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollaborationService = (function () {
    function CollaborationService() {
        this.clientNum = 0;
        this.clients = {};
        this.roomUserNum = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]("1");
    }
    CollaborationService.prototype.getRoomUserNum = function () {
        return this.roomUserNum.asObservable();
    };
    CollaborationService.prototype.coEditorSocketInit = function (editor, sessionId) {
        var _this = this;
        // HandShaking
        this.coEditorSocket = io(window.location.origin, { query: "sessionId=" + sessionId });
        // Listen text changes (receive)
        this.coEditorSocket.on('change', function (delta) {
            console.log('receive editor changed:' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        // Listen cursor changes(receive)
        this.coEditorSocket.on('cursor', function (curMove) {
            console.log('receive cursor change' + curMove);
            var cur = JSON.parse(curMove);
            var x = cur.row;
            var y = cur.column;
            var coUserId = cur.socketId;
            var editorSession = editor.getSession();
            if (coUserId in _this.clients) {
                editorSession.removeMarker(_this.clients[coUserId]['marker']);
            }
            else {
                _this.clients[coUserId] = {};
                // [!] css
                var css = document.createElement('style');
                css.type = 'text/css';
                css.innerHTML = '.editor_cursor_' + coUserId
                    + '{ position: absolute; background: ' + __WEBPACK_IMPORTED_MODULE_1__assets_color__["a" /* COLORS */][_this.clientNum] + ';'
                    + 'z-index: 100; width: 3px !important; }';
                document.body.appendChild(css);
                _this.clientNum++;
            }
            // [!] New cursor
            var Range = ace.require('ace/range').Range;
            var newMarker = editorSession.addMarker(new Range(x, y, x, y + 1), "editor_cursor_" + coUserId, true);
            _this.clients[coUserId]['marker'] = newMarker;
        });
        this.coEditorSocket.on('userNum', function (num) {
            _this.roomUserNum.next(num);
            console.log(num + ' user(s) in the room');
        });
    };
    // Send text changes
    CollaborationService.prototype.changeText = function (delta) {
        this.coEditorSocket.emit('change', delta);
    };
    // Send cursor changes
    CollaborationService.prototype.moveCursor = function (curMove) {
        console.log(curMove);
        this.coEditorSocket.emit('cursor', curMove);
    };
    CollaborationService.prototype.loadContents = function () {
        this.coEditorSocket.emit('getContent');
    };
    CollaborationService.prototype.disconnect = function () {
        this.coEditorSocket.disconnect();
    };
    return CollaborationService;
}());
CollaborationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CollaborationService);

//# sourceMappingURL=collaboration.service.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_problems__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(httpObj) {
        this.httpObj = httpObj;
        this._problemSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]([]);
        this._problemSearch = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('');
        // [!] create this obj in constructor
        // [!] No type. WHY?
        this.problemSet = __WEBPACK_IMPORTED_MODULE_3__mock_problems__["a" /* PROBLEMS */];
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.httpObj.get('api/v1/problems')
            .toPromise()
            .then(function (response) {
            _this._problemSource.next(response.json());
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.httpObj.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (p) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
            'content-type': 'application/json'
        });
        return this.httpObj.post('api/v1/problems', p, header)
            .toPromise()
            .then(function (response) {
            _this.getProblems();
            console.log(response.json());
        })
            .catch(this.handleError);
    };
    DataService.prototype.buildRunCode = function (code) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
            'content-type': 'application/json'
        });
        return this.httpObj.post('api/v1/build', code, header)
            .toPromise()
            .then(function (response) {
            console.log("compiled: " + response);
            return (response.json());
        })
            .catch(this.handleError);
    };
    DataService.prototype.subscribeSearch = function () {
        return this._problemSearch.asObservable();
    };
    DataService.prototype.userSearch = function (text) {
        this._problemSearch.next(text);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error happened!');
        return Promise.reject(error.body || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
var COLORS = [
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00"
];
//# sourceMappingURL=color.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "router-outlet {\n\tmargin-bottom: 75px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "@media screen {\n\t\n\t.select {\n\t\tmargin-bottom: 5px;\n\t}\n\t\n\t#editor {\n        height:550px;\n        position: relative;\n        margin-bottom: 10px;\n        margin-top: 10px;\n\n    }\n}\n\n#submit {\n\tmargin-bottom: 10px;\n}\n\n\n#editorSec {\n\tmargin-bottom: 50px;\n}\n/*#invite {\n\tmargin-left:10px;\n}*/\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "img {\n\twidth:100%;\n}\n\n.jumbotron {\n\tcolor:white;\n\tbackground-color: #401F7C;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "#addform {\n\tmargin-bottom: 20px;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n\n.badge-warning {\n  background-color: #f89406;\n}\n.badge-warning:hover {\n  background-color: #c67605;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".footer-section {\n  \n  margin: 0 auto -50px;\n  padding: 0 0 50px;\n  width: 100%;\n  /*background-color: #ffffff;*/\n  height:50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<p>\n  callback works!\n</p>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<section id=\"editorSec\">\n\t\n\n\t  <div class=\"row\">\n\t\t<div class=\"col-sm-4\">\n  \t\t  <select class=\"selectpicker\" data-width=\"100%\" id=\"language\" [(ngModel)]=\"langSeleted\" (change)=\"setLanguage(langSeleted)\">\n  \t\t\t  <option *ngFor=\"let language of languages\" [value]=\"language\">{{language}}</option>\n\n  \t\t  </select>\n        \n\t\t</div>\n\n    <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal\">\n          <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n    </button>\n\n\n\n    <div class=\"col-sm-7 pull-right\">\n\n\n\n      <div class=\"btn-group  pull-right\">\n\n      <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#join\">\n        <span class=\"glyphicon glyphicon-plus\"></span>Join\n      </button>\n\n\n      <button id=\"invite\" type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#invitepop\">\n        <span class=\"glyphicon glyphicon-envelope\"></span> Invite\n      </button> \n\n\n\n      <button type=\"button\" class=\"btn btn-default\" *ngIf=\"numUsers=='1'\">\n      <span class=\"glyphicon glyphicon-user\"></span> {{numUsers}}\n      </button>\n\n\n      <button type=\"button\" class=\"btn btn-default\" *ngIf=\"numUsers!='1'\">\n      <span class=\"glyphicon glyphicon-user\" style=\"color: #ffaa00\"></span> {{numUsers}}\n      </button>\n\n\n      </div>\n    </div>\n\n\n      \n      <!-- Modal -->\n      <div id=\"invitepop\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Invite your friend with this code</h4>\n            </div>\n            <div class=\"modal-body\">\n\n              <div class=\"alert alert-success\" role=\"success\">\n                <span class=\"glyphicon glyphicon-ok pull-right\" aria-hidden=\"true\"></span>{{randomSID}}\n              </div>\n\n\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n      <!-- Modal -->\n      <div id=\"join\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Enter Invited Code</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                  <label for=\"usr\">Invited Code</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"joinSID\" (ngModelChange)=\"checkJoinSID()\">\n                </div>\n\n                <div class=\"alert alert-warning\" *ngIf=\"redirectProblemMsg\">\n                  You are not doing the same problem with your friend(s).\n                  <span class=\"glyphicon glyphicon-info-sign pull-right\"></span>\n                </div>\n\n\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"joinRoom()\" [disabled]=\"!validJoinSID\">Join</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n\t\t<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            \n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            \n            <h1 class=\"modal-title\" id=\"exampleModalLabel\">Reset?</h1>\n\n          </div>\n          <div class=\"modal-body\">\n            Are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" \n              (click)=\"setEditor()\">Reset</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\t  </div>\n\t\n      <div>\n    \t<div id=\"editor\"></div>\n    \t</div>\n\n\n\n    <div class=\"row\" id=\"submit\">\n      <div class=\"col-sm-12\">\t\n\t\t  <button type=\"button\" id=\"submitBtn\" data-loading-text=\"<i class='fa fa-spinner fa-spin'></i> Compiling\" class=\"btn btn-success pull-right\" (click)=\"submit()\">Submit</button>\n      </div>\n\t  </div>\n\n    <div>\n      <div class=\"alert alert-success\" *ngIf=\"results && results.build && results.build=='Compiled successfully'\">\n          <strong>Build:</strong> {{results.build}}\n      </div>\n\n\n      <div class=\"alert alert-danger\" *ngIf=\"results && results.build && results.build!='Compiled successfully'\">\n          <strong>Build:</strong> {{results.build}}\n      </div>\n\n\n      <div class=\"panel panel-default\" *ngIf=\"results && results.build && results.build=='Compiled successfully'\">\n          <div class=\"panel-heading\">Your Results</div>\n          <div class=\"panel-body\">\n          Console output: <br>\n          <div class=\"well\">{{results.run}}</div>\n          </div>\n      </div>\n\n\n\n    </div>\n\n\t\n\n</section>\n\n\n\n\n<!--     <select class=\"form-control pull-left lang-select\" id=\"language\" \n        name=\"language\" \n        [(ngModel)]=\"language\"\n        (change)=\"setLanguage(language)\" \n       >\n       <option *ngFor=\"let language of languages\" \n       [value]=\"language\">\n         {{language}}\n       </option>\n    </select>\n -->\n"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t<div class=\"col-xs-12 col-md-8\">\n\t\t<div class=\"jumbotron\">\n\t\t  <div class=\"container\">\n\t\t\t  <div class=\"row\">\n\t\t\t\t  <div class=\"col-xs-12\">\n\t\t\t\t  <h2>Code with Your Friends!</h2>\n\n\t\t\t\t  <h3>Project: Collaborative Online Code Judge System</h3>\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t  <div class=\"col-xs-1\">\n\t\t\t\t\t  <p> <span class=\"glyphicon glyphicon-ok\"></span></p>\n\t\t\t\t\t  </div>\n\n\t\t\t\t\t  <div class=\"col-xs-11\">\n\t\t\t\t\t  <p>Code, build, and excute source codes here.</p>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t  <div class=\"col-xs-1\">\n\t\t\t\t\t  <p> <span class=\"glyphicon glyphicon-ok\"></span></p>\n\t\t\t\t\t  </div>\n\n\t\t\t\t\t  <div class=\"col-xs-11\">\n\t\t\t\t\t  <p>Practice and take coding challange.</p>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t  <div class=\"col-xs-1\">\n\t\t\t\t\t  <p> <span class=\"glyphicon glyphicon-ok\"></span></p>\n\t\t\t\t\t  </div>\n\n\t\t\t\t\t  <div class=\"col-xs-11\">\n\t\t\t\t\t  <p>Invite your friend or join your friends' room to code together.</p>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <h3>Implementation</h3>\n\t\t\t\t  <pre>\nFrontend: \n - AngularJS 4, Bootstrap\nBackend: \n - Framework: ExpressJS, SocketIO, Flask\n - NodeJS, NginX, Docker\nDatabase: MongoDB, Redis\n\nBuilt on AWS EC2 (Ubuntu16.04 with Docker)</pre>\n\t\t\t\t  <a class=\"btn btn-primary btn-lg\" href=\"/problems\" role=\"button\">Try it</a>\n\t\t\t\t  </div>\n\n\t\t\t  </div>\n\t\t   </div>\n\t\t  \n\t\t  \n\t\t</div>\n\t</div>\n\n\t<div class=\"hidden-xs hidden-sm col-md-4\">\n\t\t<img src=\"../../../assets/mac.png\">\n\t</div>\n\n</div>"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-2 col-lg-offset-2 toppad\" >\n   \n             <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">My Profile</h3>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                \n                <div class=\"col-md-3 col-lg-3 \" align=\"center\"> \n                  \n                  <div id=pic>\n                    <img alt=\"User Pic\" src={{picUrl}} class=\"img-circle img-responsive\"> \n                  </div>\n\n                  <div id=role>\n                    <div class=\"label label-danger\" *ngIf=\"this.role=='admin'\">Admin</div>\n                    <div class=\"label label-info\" *ngIf=\"this.role!='admin'\">Free User</div>\n                  </div>\n\n                </div>\n\n                <div class=\" col-md-9 col-lg-9 \"> \n                  <table class=\"table table-user-information\">\n                    <tbody>\n                      <tr>\n                        <td>Nickname:</td>\n                        <td>{{nickname}}</td>\n                      </tr>\n\n                      <tr>\n                        <td>Full Name</td>\n                        <td>{{name}}</td>\n                      </tr>\n\n                      <tr>\n                        <td>E-mail</td>\n                        <td>{{email}}</td>\n                      </tr>\n                   \n                     \n                        \n                        <tr>\n                        <td>Since</td>\n                        <td>{{created}}</td>\n                        </tr>\n                        \n                        <tr>\n                        <td>Last Login</td>\n                        <td>{{lastlogin}}</td>\n                        </tr>\n                        \n                        <tr>\n                        <td>Email Verified</td>\n                        <td>\n                        <div class=\"label label-success\" *ngIf=\"this.verified\">Yes</div>\n                        <div class=\"label label-danger\" *ngIf=\"!this.verified\">No</div>\n                        </td>\n                        </tr>\n                    </tbody>\n                  </table>\n                  \n                  <button class=\"btn btn-primary pull-right\" data-toggle=\"modal\" data-target=\"#cpwd\">Change Password</button>\n                  <!-- Modal -->\n                      <div id=\"cpwd\" class=\"modal fade\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n\n                          <!-- Modal content-->\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                              <h4 class=\"modal-title\">Change Password</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                              <p>1. Go to login page</p>\n                              <p>2. Click \"Don't remember your password?\"</p>\n                              <p>3. Check your mailbox and reset password</p>\n                            </div>\n                            <div class=\"modal-footer\">\n                              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                          </div>\n\n                        </div>\n                      </div>\n                  \n                  \n                </div>\n              </div>\n            </div>\n                 <div class=\"panel-footer\">\n                        <a type=\"button\" href=\"mailto:yenhsuac@usc.edu\" class=\"btn btn-primary\" class=\"btn btn-sm btn-primary\"><span class=\"glyphicon glyphicon-envelope\"></span> Contact Author</a>\n                        <span class=\"pull-right\">\n                            \n                            <button class=\"btn btn-sm btn-warning\" data-toggle=\"modal\" data-target=\"#cnick\"><i class=\"glyphicon glyphicon-edit\"></i> Update</button>\n\n                            <!-- Modal -->\n                            <div id=\"cnick\" class=\"modal fade\" role=\"dialog\">\n                              <div class=\"modal-dialog\">\n\n                                <!-- Modal content-->\n                                <div class=\"modal-content\">\n                                  <div class=\"modal-header\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                    <h4 class=\"modal-title\">Change Nickname</h4>\n                                  </div>\n                                  <div class=\"modal-body\">\n                                      <div class=\"form-group\">\n                                        <label for=\"usr\">New Nickname:</label>\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newNick\">\n                                      </div>\n                                  </div>\n                                  <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"updateInfo()\" data-dismiss=\"modal\">Submit</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                  </div>\n                                </div>\n\n                              </div>\n                            </div>\n                        </span>\n                  </div>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <span class=\"navbar-brand\"><i class=\"fa fa-code\"></i> {{title}}</span>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      \n      <ul class=\"nav navbar-nav\">\n      <li><a href=\"/home\">Home</a></li>\n      <li><a href=\"/problems\">Problem list</a></li>\n      </ul>\n\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"input-group\">\n          <input name=\"searchProblem\" type=\"text\" class=\"form-control\" placeholder=\"Search for problems\" [(ngModel)]=\"textSearch\" (ngModelChange)=\"sendQuery()\">\n          <span class=\"input-group-btn\">\n          <button type=\"submit\" class=\"btn btn-default\" [routerLink]=\"['/problems']\">Search</button>\n          </span>\n        </div>\n        \n      </form>\n\n      <ul class=\"nav navbar-nav navbar-right\" >\n        <li *ngIf=\"!auth.authenticated()\">\n        \t<form class=\"navbar-form\" *ngIf=\"!auth.authenticated()\">\n        \t\t<button style=\"margin-left: 10px\" class=\"btn btn-primary\" name=\"signin\" (click)=\"login()\" >Sign in</button>\n        \t</form>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"auth.authenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" >{{username}}<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a [routerLink]=\"['/myprofile']\">My Profile</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a>Subscription:<br><strong>Free User</strong></a></li>\n            <li><a></a></li>\n           \n                           \n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\" (click)=\"logout()\">Log out</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<form id=\"addform\" #f=\"ngForm\" *ngIf=\"authGuard.isAdmin()\">\n  <div class=\"form-group\">\n   \t<label for=\"pname\">Problem name</label>\n    <input #pname=\"ngModel\" name=\"pname\" type=\"text\"  class=\"form-control\" placeholder=\"Enter problem name\" required [(ngModel)]=\"newProblem.name\">\n  </div>\n\n  <div class=\"form-group\">\n   \t<label for=\"pdesc\">Problem description</label>\n    <textarea name=\"pdesc\" class=\"form-control\" placeholder=\"Enter problem description\" required [(ngModel)]=\"newProblem.desc\" row=\"3\">\n    </textarea>\n  </div>\n\n  <div class=\"form-group\">\n  \t<select class=\"form-control\" name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\">\n  \t\t<option value=\"easy\">Easy</option>\n  \t\t<option value=\"medium\">Medium</option>\n  \t\t<option value=\"hard\">Hard</option>\n  \t\t<option value=\"super\">Super</option>\n  \t</select>\n\n  </div>\n\n  <div class=\"row\">\n  \t<div class=\"col-md-12\">\n  \t\t<button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"!f.form.valid\" (click)=\"addProblem()\">Add problem</button>\n  \t</div>\n  </div>\n</form>"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container\" *ngIf=\"currentProblem\">\n\t<div class=row>\n\t<div class=\"col-xs-12 col-md-4\">\n\n\t\t<div class=\"panel panel-primary\">\n\t\t  <div class=\"panel-heading\"><h4>{{currentProblem.id}}. {{currentProblem.name}}</h4></div>\n\t\t  <div class=\"panel-body\">{{currentProblem.desc}}</div>\n\t\t  <div class=\"panel-footer\">\n\t\t  \t<span [ngClass]=\"{'label-primary':currentProblem.difficulty=='super','label-warning':currentProblem.difficulty=='medium','label-danger':currentProblem.difficulty=='hard','label-success':currentProblem.difficulty=='easy','label':true}\">{{currentProblem.difficulty}}</span>\n\t\t  </div>\n\n\t\t</div>\n\t</div>\n\t<div class=\"hidden-xs col-sm-12 col-md-8\">\n    \t<app-editor></app-editor>\n  \t</div>\n  \t</div>\n</div>"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "\n<div class='container'>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-10 col-md-offset-1\">\n\t\t<app-new-problem></app-new-problem>\n\t\t\n\t\t<div class=\"alert alert-success alert-dismissable fade in\">\n   \t\t<a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n    \t<strong>Demo Account: </strong><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> <kbd>demo@demo.demo</kbd> | <i class=\"fa fa-lock\" aria-hidden=\"true\"></i> <kbd>demo</kbd> \n  \t\t</div>\n\t\t\n\t\t<div class='list-group'>\n\t\t\t<li class=\"list-group-item active\">Problem list</li>\n\t\t\t<li class=\"list-group-item\" *ngIf=\"(problems | filterPipe:search).length === 0\"><i class=\"fa fa-exclamation-triangle text-warning\" aria-hidden=\"true\"></i> No problems found</li>\n\n\t\t\t\n\n\n\t\t\t<a class='list-group-item' *ngFor=\"let problem of problems | filterPipe:search\" [routerLink]=\"['/problems',problem.id]\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-1\">\n\n\t\t\t\t<span [ngClass]=\"{'label-primary':problem.difficulty=='super','label-warning':problem.difficulty=='medium','label-danger':problem.difficulty=='hard','label-success':problem.difficulty=='easy','label':true}\">{{problem.difficulty}}</span>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-11\">\n\t\t\t\t<strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n\t\t\t\t<span *ngIf=\"!auth.authenticated()\" class=\"badge badge-warning pull-right\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n\t\t\t\t</div>\n\n\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t</a>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-section\">\n<div class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container\">\n      <p class=\"navbar-text text-center\">© 2017 - Project built by Yenhsuan Chen (Terry)\n      </p>\n\n      <a href=\"https://www.linkedin.com/in/yenhsuan-terry-chen-477a99134\" class=\"navbar-btn btn-primary btn-sm pull-right\">\n      <span class=\"fa fa-linkedin-square\"></span>  My LinkedIn</a>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(150);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(268),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var MyProfileComponent = (function () {
    function MyProfileComponent(auth) {
        this.auth = auth;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated()) {
            this.readProfile();
        }
    };
    MyProfileComponent.prototype.readProfile = function () {
        this.profile = this.auth.getProfile();
        console.log(this.profile);
        this.nickname = this.profile.user_metadata.nickname;
        this.newNick = this.nickname;
        this.email = this.profile.email;
        this.picUrl = this.profile.picture;
        this.created = this.profile.created_at.substring(0, 10);
        this.lastlogin = this.profile.updated_at.substring(0, 10);
        this.role = 'Free User';
        if (this.profile.roles.length != 0) {
            this.role = this.profile.roles[0];
        }
        this.name = this.profile.user_metadata.full_name;
        this.verified = (this.profile.email_verified);
    };
    MyProfileComponent.prototype.updateInfo = function () {
        var _this = this;
        var data = JSON.stringify({ user_metadata: { nickname: this.newNick, full_name: this.name } });
        this.auth.updateInfo(data)
            .then(function (p) {
            var tmp = JSON.parse(p);
            _this.profile.user_metadata.nickname = tmp['user_metadata'].nickname;
            localStorage.setItem('profile', JSON.stringify(_this.profile));
            _this.auth.sendNickName(tmp['user_metadata'].nickname);
            _this.readProfile();
        });
    };
    return MyProfileComponent;
}());
MyProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-my-profile',
        template: __webpack_require__(269),
        styles: [__webpack_require__(245)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('authV2')),
    __metadata("design:paramtypes", [Object])
], MyProfileComponent);

//# sourceMappingURL=my-profile.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProblemDetailComponent = (function () {
    function ProblemDetailComponent(data, auth, route) {
        this.data = data;
        this.auth = auth;
        this.route = route;
    }
    // [!] Service type? any?
    // [v] pre-defined in app,module
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (input) {
            _this.data.getProblem(+input["id"])
                .then(function (p) { return _this.currentProblem = p; });
        });
    };
    return ProblemDetailComponent;
}());
ProblemDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-problem-detail',
        template: __webpack_require__(272),
        styles: [__webpack_require__(248)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('authV2')),
    __metadata("design:paramtypes", [Object, Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ProblemDetailComponent);

var _a;
//# sourceMappingURL=problem-detail.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProblemListComponent = (function () {
    function ProblemListComponent(dataService, auth) {
        this.dataService = dataService;
        this.auth = auth;
        this.names = ['Prashobh', 'Abraham', 'Anil', 'Sam', 'Natasha', 'Marry', 'Zian', 'karan'];
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.problems=this.dataService.getProblems();
        this.problemSubscribed = this.dataService.getProblems()
            .subscribe(function (problems) { _this.problems = problems; });
        this.searchSubscribed = this.dataService.subscribeSearch()
            .subscribe(function (text) { return _this.search = text; });
    };
    return ProblemListComponent;
}());
ProblemListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-problem-list',
        template: __webpack_require__(273),
        styles: [__webpack_require__(249)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('authV2')),
    __metadata("design:paramtypes", [Object, Object])
], ProblemListComponent);

//# sourceMappingURL=problem-list.component.js.map

/***/ })

},[540]);
//# sourceMappingURL=main.bundle.js.map