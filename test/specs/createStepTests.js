import LoginPage from '../pageobjects/login.page';
import Home from '../pageobjects/home.page';
import Step from '../pageobjects/step.page';

const config = require('config');


describe('Create Step Test', function() {

	it('Should create a new step in Process Flow Chart', function() {

		let isExisting;
		LoginPage.login(config.app.admin.username, config.app.admin.password);
		browser.waitUntil(function() {
			isExisting = Home.libraryTable.isExisting()
			return isExisting;
		}, 10000, 'login takes more than 10 seconds to load the library element');

		browser.url('processes/BEx6mqg8BHkzAXydF');
		browser.waitUntil(function() {
			return browser.getTitle().includes('Process Rename Test');
		}, 10000, 'title takes more than 10 seconds to change');
		Home.closeBrowserSize.waitForVisible();
		Home.closeBrowserSize.waitForEnabled();
		browser.pause(600);
		Home.closeBrowserSize.click();

		// navigate to process page and click on add new step plus sign on the upper left corner
		Step.addNewStepLnk.click();
		browser.pause(600);
		let isNewStepExisting = Step.newStepBox.isExisting();
		expect(isNewStepExisting).to.be.true;

	});

});