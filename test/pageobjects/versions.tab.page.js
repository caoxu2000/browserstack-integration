import Page from './page';

class VersionsTab extends Page {

	get versionsTabLnk() {
		return browser.element('[data-tab-name="Versions"]');
	}
	get version001Lnk() {
		return browser.element('p=0.01');
	}

	get version100Lnk() {
		return browser.element('p=1.00');
	}

	get version101Lnk() {
		return browser.element('p=1.01');
	}

}

export default new VersionsTab();