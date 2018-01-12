import Page from './page';

class Home extends Page {

	get videoWrapper() { return browser.element('.video-player-wrapper'); }
	get closeVideoBtn() { return browser.element('.video-player-wrapper button.close'); }
	get closeBrowserSize() { return browser.element('.modal-content button'); }
	get createProcessLink() { return browser.element('.create-entity.create-Process'); }
	get libraryTable() { return browser.element('.library-browse-table'); }
	get appTitleText() { return browser.element('.app-title-text.title'); }
}

export default new Home();