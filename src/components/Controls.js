import React, { PropTypes } from 'react';
import styles from '../styles/style';

import {
    View,
    Button
} from 'react-native';

const Controls = ({ onSave, onCancel, onDeleteAll }) => (
    <View style={styles.inlinedChildren}>
        <Button title="Save" onPress={onSave} />
        <Button title="Cancel" onPress={onCancel} />
        <Button title="Delete All" onPress={onDeleteAll} />
    </View>
)

Controls.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDeleteAll: PropTypes.func.isRequired
}

export default Controls;