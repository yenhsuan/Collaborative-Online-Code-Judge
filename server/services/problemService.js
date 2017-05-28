let problemModel = require('../models/problemModel');

let getProblems = ()=> {

	return new Promise( (resolve,reject)=>{

		problemModel.find({}, (err,problem)=> {
			if (err) {
				reject(err);
			}
			else {
				resolve(problem);
			}
		});
	});
};

let getProblemById = id=>{
	return new Promise( (resolve,reject)=>{
		problemModel.findOne({id:id}, (err,problem)=>{

			if (err) {
				reject(err);
			}
			else {
				resolve(problem);
			}
		});
	});
};

let addProblem = newP => {
	return new Promise( (resolve,reject) =>{
		problemModel.findOne({name:newP.name}, (err,problem)=>{

			if (problem) {
				reject('The problem is already in the list');
			}
			else {
				problemModel.count({}, (err,num)=>{
					newP.id=num+1;
					let newProblemModel = new problemModel(newP);
					newProblemModel.save();
					resolve(newProblemModel);
				});
			}

		});
	});

}



module.exports = {
	getProblems:getProblems,
	getProblemById:getProblemById,
	addProblem
}





