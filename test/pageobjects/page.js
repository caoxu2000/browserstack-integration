export default class Page {

	constructor() {
		this.title = 'Riffyn Page';
	}

	open(path) {
		browser.url(path);
	}

}