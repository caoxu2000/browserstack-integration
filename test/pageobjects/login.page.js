import Page from './page';

class LoginPage extends Page {
	// define elements
	get username() { return browser.element('input[name="email"]'); }
	get password() { return browser.element('input[name="password"]'); }
	get signInBtn() { return browser.element('button[type="submit"]'); }
	get userInfo() {
		return browser.element('.context-items > li:nth-child(3) > a:nth-child(1)');
	}

	get logoutLnk() { return browser.element('.user-info'); }

	login(username, password) {

		this.username.waitForExist();
		this.username.setValue(username);
		this.password.waitForExist();
		this.password.setValue(password);
		this.signInBtn.click();

	}

	logout() {

		this.logoutLnk.waitForExist();
		this.logoutLnk.click();
		this.userInfo.waitForExist();
		this.userInfo.click();

	}

}

export default new LoginPage();