import Page from './page';

class Process extends Page {

	get layers() { return browser.element('.layers'); }
	get canvas() { return browser.element('.canvas'); }
	get processName() { return browser.element('.process-name-field'); }
	get processDesc() { return browser.element('.process-desc-field'); }
	get createProcessBtn() { return browser.element('.update-process'); }

	get processNameOnLibraryRow() {
		return browser.element('td*=Process Rename Test')
		// return browser.element('.library-table.table > tbody > tr > td:nth-of-type(1)');
	}

	get addTagLinkContextMnu() {
		return browser.element('li.context-menu-item:nth-of-type(9)');
	}

	get tagNameField() {
		return browser.element('input.search-box');
	}

	get tagUpdateBtn() {
		return browser.element('button.tag-button');
	}

	get tagPill() {
		return browser.element('.tag-pill')
	}

	get processTitle() {
		return browser.element('div.app-title-text.title');
	}

	get randomName() {
		return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5).toUpperCase();
	}

}

export default new Process();