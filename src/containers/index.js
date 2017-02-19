import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainContainer from './MainContainer';
import reducers from '../reducers';
import styles from '../styles/style';
import PuppetContainer from '../puppet/PuppetContainer';

import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

let store = createStore(reducers);
PuppetContainer(store);

export default class App extends Component {
    
    render() {
        return (
            <Provider store={store}>
                <MainContainer />
            </Provider>
        );
    }
}
