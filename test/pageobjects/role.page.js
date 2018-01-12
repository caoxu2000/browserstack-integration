import Page from './page';

class Role extends Page {

	get roleText() {
		return browser.element('.user-role');
	}

}

export default new Role();