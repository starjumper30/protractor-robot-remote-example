import { browser, by, element } from 'protractor';
import {KeywordLibrary} from 'robotremote';
import {CommonPO} from './common.po';
import {keyword} from 'protractor-robot-remote';

export class AppPage implements CommonPO {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

const instance: AppPage = new AppPage();

export const appPageKeywordLibrary: KeywordLibrary = {
  appPageGetParagraphText: keyword(() => instance.getParagraphText(), 'Get the first paragraph of text')
};
