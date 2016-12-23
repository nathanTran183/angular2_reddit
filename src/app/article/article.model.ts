export class Article{
	title: string;
	link: string;
	votes: number;

/*	constructor() {
		this.title = 'Angular 2';
		this.link = 'http://angular.io';
		this.votes = 10;
	}*/

	constructor(title: string, link: string, votes?: number){
		this.title = title;
		this.link = link;
		this.votes = votes || 0;
	}

	voteUp(): void{
		this.votes +=1;
	}

	voteDown(): void{
		this.votes -=1;
	}

	domain(): string {
		try{
			const link: string = this.link.split('//')[1];
			return link.split('/')[0];
		} catch (err){
			return null;
		}
	}
}