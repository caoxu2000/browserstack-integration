import LoginPage from '../pageobjects/login.page';
import Home from '../pageobjects/home.page';
import Process from '../pageobjects/process.page';
import getRandomName from '../helpers/get_random_name';

const config = require('config');


describe('Add a new tag to a process test', function() {

	it('Should add the tag only to that the selected process', function() {

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

		Process.processNameOnLibraryRow.rightClick();
		Process.addTagLinkContextMnu.click();
		browser.pause(1000);
		browser.keys(['Clear']);
		Process.tagNameField.setValue(getRandomName());
		browser.keys(['Enter']);
		Process.tagUpdateBtn.click();

		let isTagAdded = Process.tagPill.isExisting();
		expect(isTagAdded).to.be.true;

	});

});
