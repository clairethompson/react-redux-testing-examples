import {React, expect, mount} from '../specHelper';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppContainer from '../../src/components/AppContainer';
import reducer from '../../src/reducers/reducer';

describe('Integration - App', () => {
  it('increments the counter when the button is clicked', () => {
    const store = createStore(reducer);

    const wrapper = mount(
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );

    expect(wrapper.find('p').text()).to.eql('This button has been clicked 0 times!');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).to.eql('This button has been clicked 1 times!');
  });
});
