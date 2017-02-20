import React, { PropTypes } from 'react';
import styles from '../styles/style';

import {
    View,
    Button
} from 'react-native';

const Controls = ({ onSave, onCancel, onDeleteAll, onAddNew }) => (
    <View style={styles.inlinedChildren}>
        <View style={{ margin: 2 }} >
            <Button title="Save" onPress={onSave} />
        </View>
        <View style={{ margin: 2 }} >
            <Button title="Cancel" onPress={onCancel} />
        </View>
        <View style={{ margin: 2 }} >
            <Button title="Delete All" onPress={onDeleteAll} />
        </View>
        <View style={{ margin: 2 }} >
            <Button title="Add" onPress={onAddNew} />
        </View>
    </View>
)

Controls.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDeleteAll: PropTypes.func.isRequired,
    onAddNew: PropTypes.func.isRequired
}

export default Controls;