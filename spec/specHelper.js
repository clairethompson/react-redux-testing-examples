import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

chai.use(sinonChai);

configure({ adapter: new Adapter() });

let sandbox;

beforeEach(() => {
  sandbox = sinon.sandbox.create();
});

afterEach(() => {
  sandbox.restore();
});

export {sandbox, shallow, expect, React};
