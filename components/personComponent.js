import React, { Component } from 'react';
import { styles } from './styles';

import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View
} from 'react-native';

class PersonComponent extends Component {
    render() {

        return <View style={styles.container}>
            <TextInput
                style={{ height: 40, width: 300 }}
                onChangeText={(text) => this.props.onUpdate({ FirstName$: text })}
                value={this.props.firstName}
                />
            <TextInput
                style={{ height: 40, width: 300 }}
                onChangeText={(text) => this.props.onUpdate({ LastName$: text })}
                value={this.props.lastName}
                />
            <View style={styles.inlinedChildren}>
                <View style={{ margin: 3 }}>
                    <Button
                        onPress={this.props.onSaveClick}
                        title="Save"
                        style={styles.button}
                        accessibilityLabel="Click to save"
                        />
                </View>
                <View style={{ margin: 3 }}>
                    <Button
                        onPress={() => { this.props.onSave() } }
                        title="Cancel"
                        style={styles.button}
                        accessibilityLabel="Click to cancel"
                        />
                </View>
            </View>
        </View>
    }
}
export default PersonComponent;