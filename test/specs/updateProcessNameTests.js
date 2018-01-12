import LoginPage from '../pageobjects/login.page';
import Home from '../pageobjects/home.page';
import Process from '../pageobjects/process.page';
import getRandomName from '../helpers/get_random_name';

const config = require('config');


describe('Update a process name test', function() {

	it('Should rename the process name', function() {

		LoginPage.login(config.app.admin.username, config.app.admin.password);

		// click away the prompt video and browser size suggestion modal
		Home.closeVideoBtn.waitForExist();
		browser.pause(2000);
		Home.closeVideoBtn.click();
		browser.waitUntil(function() {
			return !Home.closeVideoBtn.isExisting();
		}, 3000, 'Video overlay should go away in 3 second');
		
		Home.closeBrowserSize.waitForExist();
		Home.closeBrowserSize.click();

		browser.url('processes/BEx6mqg8BHkzAXydF');
		browser.waitUntil(function() {
			return browser.getTitle().includes('Process Rename Test');
		}, 10000, 'title takes more than 10 seconds to change');

		browser.pause(2000);
		Home.closeBrowserSize.waitForExist();
		Home.closeBrowserSize.click();		
		Process.processTitle.click();
		const randomName = getRandomName();
		Process.processName.waitForVisible();
		Process.processName.clearElement();
		Process.processName.setValue(`Process Rename Test ${randomName}`);
		Process.processDesc.waitForVisible();
		Process.processDesc.clearElement();
		Process.processDesc.setValue('test description');
		Process.createProcessBtn.click();

		let isProcessTitleChanged = Process.processTitle.getText().includes('PROCESS RENAME TEST');
		expect(isProcessTitleChanged).to.be.true;

	});

});
