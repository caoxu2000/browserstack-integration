import LoginPage from '../pageobjects/login.page';
import Home from '../pageobjects/home.page';
import Step from '../pageobjects/step.page';
import Role from '../pageobjects/role.page';

const config = require('config');


describe('Verify User Role Test', function() {

	it('Org Admin should have access to context menu in Process Flow Chart', function() {

		let isExisting;
		LoginPage.login(config.app.admin.username, config.app.admin.password);
		browser.waitUntil(function() {
			isExisting = Home.libraryTable.isExisting()
			return isExisting;
		}, 10000, 'login takes more than 10 seconds to load the library element');

		browser.url('processes/FxDfPvotkQWc4jPen');
		browser.waitUntil(function() {
			return browser.getTitle() === 'Components and Properties';
		}, 10000, 'title takes more than 10 seconds to change');
		Home.closeBrowserSize.waitForVisible();
		Home.closeBrowserSize.waitForEnabled();
		browser.pause(600);
		Home.closeBrowserSize.click();

		// grab the text of the user role on upper right corner
		let isAdmin = Role.roleText.getText().includes('Admin');
		expect(isAdmin).to.be.true;
		// do a right click on 1st step
		Step.firstStepBox.rightClick();
		browser.pause(600);
		let isContextMenuExisting = Step.contextMenu.isExisting();
		expect(isContextMenuExisting).to.be.true;

	});

	it('Non Admin users should not have access to context menu in Process Flow Chart', function() {

		let isExisting;
		browser.refresh();
		browser.pause(5000);
		Home.closeBrowserSize.click();
		LoginPage.logout();
		LoginPage.login(config.app.non_admin.username, config.app.non_admin.password);
		browser.waitUntil(function() {
			isExisting = Home.libraryTable.isExisting()
			return isExisting;
		}, 10000, 'login takes more than 10 seconds to load the library element');

				browser.url('processes/FxDfPvotkQWc4jPen');
		browser.waitUntil(function() {
			return browser.getTitle() === 'Components and Properties';
		}, 10000, 'title takes more than 10 seconds to change');
		Home.closeBrowserSize.waitForVisible();
		Home.closeBrowserSize.waitForEnabled();
		browser.pause(600);
		Home.closeBrowserSize.click();

		// grab the text of the user role on upper right corner
		let isAdmin = Role.roleText.getText().includes('Admin');
		expect(isAdmin).to.be.false;
		// do a right click on 1st step
		Step.firstStepBox.rightClick();
		browser.pause(600);
		let isPopupExisting = Step.noAccessPopup.isExisting();
		expect(isPopupExisting).to.be.true;

	});

});