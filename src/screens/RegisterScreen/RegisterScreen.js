import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TransformText,
    TextInput,
} from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";

import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { RadioButton } from 'react-native-paper';

const items = [
    // this is the parent or 'item'
    {
        name: 'Favourite topic',
        id: 0,
        // these are the children or 'sub items'
        children: [
            {
                name: 'IT',
                id: 11,
            },
            {
                name: 'Law',
                id: 12,
            },
            {
                name: 'Language',
                id: 13,
            },
            {
                name: 'Business',
                id: 14,
            },
            {
                name: 'Business 1',
                id: 15,
            },
            {
                name: 'Business 2',
                id: 16,
            },
            {
                name: 'Business 3',
                id: 17,
            },
            {
                name: 'Business 4',
                id: 18,
            },
            {
                name: 'Business 3',
                id: 19,
            },
            {
                name: 'Business 3',
                id: 20,
            },
            {
                name: 'Business 3',
                id: 21,
            },
            {
                name: 'Business 3',
                id: 22,
            },
            {
                name: 'Business 3',
                id: 23,
            },
            {
                name: 'Business 3',
                id: 24,
            },
            {
                name: 'Business 3',
                id: 25,
            },
            {
                name: 'Business 3',
                id: 26,
            },
            {
                name: 'Business 3',
                id: 27,
            },
            {
                name: 'Business 3',
                id: 28,
            },
            {
                name: 'Business 3',
                id: 29,
            },
            {
                name: 'Business 3',
                id: 30,
            },
            {
                name: 'Business 3',
                id: 31,
            },
            {
                name: 'Business 3',
                id: 32,
            },
            {
                name: 'Business 3',
                id: 33,
            },
            {
                name: 'Business 3',
                id: 34,
            },
            {
                name: 'Business 3',
                id: 35,
            },
            {
                name: 'Business 3',
                id: 36,
            },
        ],
    },
];

const RegisterScreen = ({ navigation }) => {

    const [checked, setChecked] = React.useState('first');

    const [selectedItem, setSelectedItem] = useState([]);

    const onSelectItemChange = (selectedItem) => {
        setSelectedItem(selectedItem);
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text>Register Screen</Text>
                <TextInput
                    placeholder='Email' />
                <TextInput
                    placeholder='Password' />
                <TextInput
                    placeholder='Fullname' />
                <TextInput
                    placeholder='Phone' />
                <TextInput
                    placeholder='Address' />



                <TextInput
                    placeholder='Role' />
                <View style={{ flexDirection: 'row', alignContent: 'center' }} >
                    <Text style={{ alignSelf: 'center' }}>Male</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text style={{ alignSelf: 'center' }}>Female</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text style={{ alignSelf: 'center' }}>Other</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                    />
                </View>

            </View>
            <View>
                <SectionedMultiSelect
                    items={items}
                    IconRenderer={Icon}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Pick your favourite topic"
                    searchPlaceholderText="Search favourite topic"
                    showDropDowns={true}
                    readOnlyHeadings={true}
                    onSelectedItemsChange={onSelectItemChange}
                    selectedItems={selectedItem}
                />
            </View>
        </View >
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center'
    },
})