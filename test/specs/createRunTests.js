import LoginPage from '../pageobjects/login.page';
import Home from '../pageobjects/home.page';
import Experiment from '../pageobjects/experiment.page';
import ResourceToolbar from '../pageobjects/resource.toolbar.page';
import getRandomName from '../helpers/get_random_name';

const config = require('config');


describe('Experiment Run Test', function() {

	it('Should create a new run', function() {

		let isExisting;
		LoginPage.login(config.app.admin.username, config.app.admin.password);
		browser.waitUntil(function() {
			isExisting = Home.libraryTable.isExisting()
			return isExisting;
		}, 10000, 'login takes more than 10 seconds to load the library element');

		browser.url('experiments/tbag7H5YvaYLQXXvp');
		browser.waitUntil(function() {
			return browser.getTitle() === 'E3 | 3 - One step uploaded';
		}, 10000, 'title takes more than 10 seconds to change');
		Home.closeBrowserSize.waitForVisible();
		Home.closeBrowserSize.waitForEnabled();
		browser.pause(600);
		Home.closeBrowserSize.click();

		browser.waitUntil(function() {
			return Experiment.runTableRow(1, 2).isExisting();
		}, 10000, 'first run table row takes more than 10 seconds to load');

		ResourceToolbar.createNewRunPlus.waitForExist();
		ResourceToolbar.createNewRunPlus.click();
		browser.pause(2000);
		ResourceToolbar.runCounter.setValue('1');
		ResourceToolbar.runPrefixName.setValue(getRandomName());
		ResourceToolbar.createRunBtn.click();
		browser.pause(2000);
		let newRun= Experiment.runTableRow(4, 2).isExisting();
		expect(newRun).to.be.true;

	});

});