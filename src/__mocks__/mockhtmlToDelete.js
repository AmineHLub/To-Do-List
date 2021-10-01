const { JSDOM } = require('jsdom');

const pageDel = new JSDOM('<!DOCTYPE html><html lang="en"><body></body></html>');
const mockHtmlEl = pageDel.window.document.createElement('div');
pageDel.window.document.body.append(mockHtmlEl);
mockHtmlEl.innerHTML = '<ul>'
+ '<li id="0">'
    + '<input class="checkbox" type="checkbox" checked>'
    + '<input class="list-items noborder-input" value="dummy todo 1" type="text">'
    + '<a class="list-menu"><img src="doesntexist.png"></a>'
+ '</li>'
+ '<li id="1">'
    + '<input class="checkbox" type="checkbox">'
    + '<input class="list-items noborder-input" value="dummy todo 2" type="text">'
    + '<a class="list-menu"><img src="doesntexist.png"></a>'
+ '</li>'
+ '<li id="2"><input class="checkbox" type="checkbox" checked>'
    + '<input class="list-items noborder-input" value="dummy todo 3" type="text">'
    + '<a class="list-menu"><img src="doesntexist.png"></a>'
+ '</li>'
+ '</ul>';

module.exports = pageDel;