import React, { Component } from 'react';
import { styles } from './styles';

import {
    StyleSheet,
    Text,
    TextInput,
    ListView,
    Button,
    View
} from 'react-native';


class ExpensesListComponent extends Component {

    constructor() {
        super();
        this.listDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }
    componentWillUpdate(nextProps) {
        console.log('componentWillUpdate', nextProps.expenses)
        this.listDataSource = this.listDataSource.cloneWithRows(nextProps.expenses || [])
    }
    render() {

        return <View style={styles.container}>
            <View style={styles.inlinedChildren}>
                <View style={{ margin: 3 }}>
                    <Button
                        onPress={this.props.onAddNewPress}
                        title="Add Expense"
                        style={styles.button}
                        accessibilityLabel="Click to add expense"
                        />
                </View>
                <View style={{ margin: 3 }}>
                    <Button
                        onPress={this.props.onDeleteAllClick}
                        title="Delete all"
                        style={styles.button}
                        accessibilityLabel="Click to delete all"
                        />
                </View>
            </View>
            <ListView
                dataSource={this.listDataSource}
                initialListSize={3}
                enableEmptySections={true}
                renderRow={(rowData, sectionId, rowID) =>
                    <View style={styles.inlinedChildren}>
                        <TextInput onChangeText={(text) => { this.props.onUpdateExpense(rowID, 'Description$', text) } } placeholder="Description" style={{ width: 150 }}>{rowData.HelloWorld.Description$}</TextInput>
                        <TextInput onChangeText={(text) => { this.props.onUpdateExpense(rowID, 'Amount$', text) } } style={{ width: 50 }} value={rowData.HelloWorld.Amount$ + ""}></TextInput>
                    </View>
                }
                />
        </View>
    }
}
export default ExpensesListComponent;