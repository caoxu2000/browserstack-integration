import Page from './page';

class Step extends Page {

	get addNewStepLnk() {
		return browser.element('[title="Add Step"]');
	}

	get firstStepBox() {
		return browser.element('.activities > .box:nth-child(1)');
	}

	get newStepBox() {
		return browser.element('.activities > .box:nth-child(2)');
	}

	get contextMenu() {
		return browser.element('.context-items');
	}

	get noAccessPopup() {
		return browser.element('.modal-content');
	}
}

export default new Step();