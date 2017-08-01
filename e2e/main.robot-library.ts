import {AppPage, appPageKeywordLibrary} from './app.po';
import {KeywordLibrary} from 'robotremote';
import {CommonPO} from './common.po';
import {keyword, runProtractorRobotServer} from 'protractor-robot-remote';

export const pageObjects = {
  current: undefined,

  App: new AppPage(),

  getPO(poName: string): CommonPO {
    this.current = this[poName];
    return this.current;
  }
};

export const commonLib: KeywordLibrary = {
  navigateToPage: keyword((poName: string) => pageObjects.getPO(poName).navigateTo(),
    'Sets current page object and does any necessary browser navigation to get there.')
};

// Run this keyword library if the library itself is called explicitly.
if (!module.parent) {
  runProtractorRobotServer([commonLib, appPageKeywordLibrary]);
}
