import LoginPage from '../pageobjects/login.page';
import Home from '../pageobjects/home.page';
import Process from '../pageobjects/process.page';
import getRandomName from '../helpers/get_random_name';

const config = require('config');


describe('Create a process test', function() {

	it('Should create a process', function() {

		LoginPage.login(config.app.admin.username, config.app.admin.password);

		// click away the promot video and browser size suggestion modal
		Home.closeVideoBtn.waitForExist();
		browser.pause(2000);
		Home.closeVideoBtn.click();
		browser.waitUntil(function() {
			return !Home.closeVideoBtn.isExisting();
		}, 3000, 'Video overlay should go away in 3 second');
		
		Home.closeBrowserSize.waitForExist();
		Home.closeBrowserSize.click();

		Home.createProcessLink.waitForEnabled();
		Home.createProcessLink.click();

		browser.waitUntil(function() {
			return Process.createProcessBtn.isEnabled();
		}, 3000, 'Process modal takes longer than 3 seconds to load');

		const randomName = getRandomName();
		Process.processName.waitForVisible();
		Process.processName.setValue(randomName);
		Process.processDesc.waitForVisible();
		Process.processDesc.setValue('test description');
		Process.createProcessBtn.click();

		browser.waitUntil(function() {
			return browser.getTabIds()[1] !== undefined;
		}, 5000, 'new process tab takes longer than 5 seconds to load');
		browser.switchTab(browser.getTabIds()[1]);

		browser.waitForExist('.main-panel');
		expect(browser.getUrl()).to.contain('process');
		expect(browser.getTitle()).to.equal(randomName);
		expect(Home.appTitleText.getText()).to.equal(randomName);
	});

});
