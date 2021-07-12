import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TransformText,
    TextInput,
    Platform,
    StatusBar,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import * as Animatable from 'react-native-animatable';

import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

import { RadioButton } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        password: '',
        newPassword: '',
        confirmNewPassword: '',
        isNewPasswordOK: false,
        isNewConfirmPasswordOK: '',
    });

    const today = new Date();
    const [date, setDate] = useState(today);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        // console.log(selectedDate);
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Profile</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <View style={{ alignItems: 'center' }}>
                    <ScrollView style={styles.scrollview}>
                        {/* Email here */}
                        <Text style={styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <Feather
                                name="mail"
                                // color={colors.text}
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                keyboardType='email-address'
                                style={styles.textInput}
                                autoCapitalize="none"
                            // onChangeText={(val) => handleEmailChange(val)}
                            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                            />
                            {/* {data.check_handleEmailChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}
                                    />
                                </Animatable.View>
                                : null} */}
                        </View>
                        {/* {data.isValidUser ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Email is incorrect</Text>
                            </Animatable.View>
                        } */}
                        {/* Password here */}

                        {/* Fullname here */}
                        <Text style={[styles.text_footer, { marginTop: 10 }]}>Fullname</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Fullname"
                                // keyboardType='email-address'
                                style={styles.textInput}
                                autoCapitalize="none"
                            // onChangeText={(val) => handleFullnameChange(val)}
                            />
                        </View>
                        {/* Phone Here */}
                        <Text style={[styles.text_footer, { marginTop: 10 }]}>Phone</Text>
                        <View style={styles.action}>
                            <Feather
                                name="phone"
                                // color={colors.text}
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Phone Number"
                                keyboardType='numeric'
                                style={styles.textInput}
                                autoCapitalize="none"
                            // onChangeText={(val) => handlePhoneChange(val)}
                            />
                        </View>
                        {/* Address here */}
                        <Text style={[styles.text_footer, { marginTop: 10 }]}>Address</Text>
                        <View style={styles.action}>
                            <Feather
                                name="map-pin"
                                // color={colors.text}
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Address"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handleAddressChange(val)}
                            />
                        </View>
                        {/* Dob here */}
                        {/* <Text style={[styles.text_footer, { marginTop: 10 }]}>DOB</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Your dob"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handleDOBChange(val)}
                            />
                        </View> */}

                        <View>
                            <Text style={[styles.text_footer, { marginTop: 10 }]}>Date Of Birth</Text>
                            <View>
                                <Button onPress={showDatepicker} title="Pick your DOB" />
                            </View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                />
                            )}
                        </View>

                        {/* ///////// */}
                        {/* Gender here */}
                        <View style={{ flexDirection: 'row', alignContent: 'center' }} >
                            <Text style={{ alignSelf: 'center' }}>Male</Text>
                            <RadioButton
                                style={{ flex: 1 }}
                                value="male"
                                status={data.gender === 'male' ? 'checked' : 'unchecked'}
                                onPress={() => handleGenderChange('male')}
                            />
                            <Text style={{ alignSelf: 'center' }}>Female</Text>
                            <RadioButton
                                style={{ flex: 1 }}
                                value="female"
                                status={data.gender === 'female' ? 'checked' : 'unchecked'}
                                onPress={() => handleGenderChange('female')}
                            />
                            <Text style={{ alignSelf: 'center' }}>Other</Text>
                            <RadioButton
                                style={{ flex: 1 }}
                                value="other"
                                status={data.gender === 'other' ? 'checked' : 'unchecked'}
                                onPress={() => handleGenderChange('other')}
                            />
                        </View>
                        {/* Role here */}
                        <View>
                            <Picker
                                selectedValue={data.role}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue) => handleRoleChange(itemValue)}
                            >
                                {/* <Picker.Item label="Role..." /> */}
                                <Picker.Item label="Student" value="1" />
                                <Picker.Item label="Donor" value="3" />
                            </Picker>
                        </View>
                        {/* Favourite topic */}
                        {/* Button action */}
                        <TouchableOpacity
                            // onPress={() => { loginHandle(data.username, data.password) }}
                            // disabled={!data.emailOK || !data.passwordOK || !data.fullnameOK || !data.phoneOK || !data.addressOK}
                            // onPress={() => navigation.navigate("SignIn")}
                            style={[styles.button_ac, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 50
                            }]}
                        // onPress={handleSubmit}
                        >
                            <Text style={[styles.textProfile, {
                                color: '#009387'
                            }]}>Update Profile</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Animatable.View >
        </View >
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#009387'
    },
    scrollview: {
        width: '100%'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        // paddingHorizontal: 20,
        // paddingBottom: 0,
        alignItems: 'center',
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS = 'ios' ? -13 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    button_ac: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textProfile: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});