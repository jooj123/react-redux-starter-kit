import chai from 'chai';
import jsdom from 'jsdom';
import chaiEnzyme from 'chai-enzyme';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };

chai.use(chaiEnzyme());

// for convenience in tests
global.chai = chai;
global.expect = chai.expect;
global.should = chai.should();
