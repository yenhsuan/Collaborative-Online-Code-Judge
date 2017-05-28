
let express = require('express');
let router = express.Router();

let problemService = require('../services/problemService');


let bodyParser=require('body-parser');
let jsonParser=bodyParser.json();

let nodeRestClient = require('node-rest-client').Client;
let restClient = new nodeRestClient();


EXECUTOR_SERVER_URL = "http://localhost:5000/build_and_run";
restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');


router.get('/problems',(req,res)=>{

	problemService.getProblems()
		.then( p=>res.json(p) );
});

router.get('/problems/:id',(req,res)=>{

	problemService.getProblemById(req.params.id)
		.then( p=>res.json(p));
});

router.post('/problems',jsonParser,(req,res)=>{

	problemService.addProblem(req.body)
		.then( p=>res.json(p), ()=>res.send('error in adding new proble'));
});


router.post('/build',jsonParser,(req,res)=>{

	let userCode = req.body.userCode;
	let lang = req.body.lang;
	console.log(`(Build) received: ${userCode}`);
	//res.json({'text':'code received'});

	restClient.methods.build_and_run(
		{
			data:{
				code:userCode,
				lang:lang
			},
			headers: {'Content-Type': 'application/json'}
		},

		(result,response) => {
			console.log(`Execution: ${JSON.stringify(result)}`);
			let text = `Build results: ${result['build']} Execute output: ${result['run']}`;
			result['build'] = result['build'];
			result['run'] = result['run'];

			result['text'] = text;
			res.json(result);
		}
	);

});


module.exports = router;