const { JSDOM } = require('jsdom');

const page = new JSDOM('<!DOCTYPE html><html lang="en"><body></body></html>');
const mockHtmlEl = page.window.document.createElement('div');
page.window.document.body.append(mockHtmlEl);
mockHtmlEl.innerHTML = '<input type=text value="test">';

module.exports = page;