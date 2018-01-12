import Page from './page';

class ResourceToolbar extends Page {

	get createNewRunPlus() {
		return browser.element('[title="Create Runs"]');
	}

	get runCounter() {
		return browser.element('.run-count');
	}

	get runPrefixName() {
		return browser.element('input.form-control.run-name');
	}

	get createRunBtn() {
		return browser.element('button=Create Runs')
	}

	get resourceToolbar() {
		return browser.element('.resource-details-toolbar');
	}

}

export default new ResourceToolbar();