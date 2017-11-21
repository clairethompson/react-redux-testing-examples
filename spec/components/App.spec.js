import {React, sandbox, expect, shallow} from '../specHelper';
import App from '../../src/components/App';

describe('App', () => {
  let props;

  beforeEach(() => {
    props = {
      count: 4,
      incrementCounter: sandbox.spy()
    }
  });

  it('renders the number of times the button has been clicked', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('p').text()).to.eql('This button has been clicked 4 times!');
  });

  describe('clicking the button', () => {
    it('calls the passed in action', () => {
      const wrapper = shallow(<App {...props} />);
      wrapper.find('button').simulate('click');
      expect(props.incrementCounter).to.have.been.called;
    });
  });
});
