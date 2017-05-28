export class Problem {

	id: number;
	name: string;
	desc: string;
	difficulty: string;

	constructor(id,name,desc,difficulty) {
		this.id=id;
		this.name=name;
		this.desc=desc;
		this.difficulty=difficulty;
	}

}