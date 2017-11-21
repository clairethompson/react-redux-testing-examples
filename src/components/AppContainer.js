import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from './App';
import incrementCounter from '../actions/incrementCounter.js';

const mapStateToProps = state => ({ count: state.count });

const mapDispatchToProps = dispatch => bindActionCreators({incrementCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
