import Page from './page';

class Experiment extends Page {

	get experimentLnk() {
		return browser.element('.process-info.experiment-menu.ready');
	}
	get createExptLnk() {
		return browser.element('.expanded-dropdown-menu-actions td:nth-child(1)');
	}

	get modalOverlay() {
		return browser.element('.modal-overlay.showing');
	}

	get createExptBtn() { return browser.element('.action-button'); }

	get exptName() { return browser.element('.experiment-name-field'); }
	get exptPurpose() { return browser.element('.experiment-purpose-field'); }

	runTableRow(tr_index, td_index) { 
		return browser.element(`.resource-details-table tbody > 
			tr:nth-child(${tr_index}) > td:nth-child(${td_index})`);
	}

}

export default new Experiment();