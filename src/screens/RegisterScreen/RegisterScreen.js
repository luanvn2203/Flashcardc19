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

import DateTimePickerModal from "react-native-modal-datetime-picker";

import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import { RadioButton } from 'react-native-paper';
import topicAPI from '../../apis/topic.api';
import authAPI from '../../apis/auth.api'

// var width = Dimensions.get('window').width; //full width

const RegisterScreen = ({ navigation }) => {

    const [listTopic, setListTopic] = useState([]);

    const [interestTopicThis, setInterestTopicThis] = useState([]);

    const getData = async () => {
        const res = await topicAPI.getAllTopic();
        // console.log(res);
        const items = [
            {
                name: "Topics",
                id: 0,
                children: []
            }
        ];
        if (res.listTopic.length > 0) {
            const listTop = res.listTopic;
            for (let index = 0; index < listTop.length; index++) {
                const item = {
                    name: listTop[index].topicName,
                    id: listTop[index].topicId
                }
                items[0].children.push(item);
            }
            setListTopic(items);
            console.log(items);
        }
    }

    useEffect(() => {

        getData();
    }, [])

    const [data, setData] = React.useState({
        email: '',
        password: '',
        fullname: '',
        phone: '',
        address: '',
        gender: 'male',
        role: '1',
        dob: '',
        interestTopic: [''],
        check_handleEmailChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidFullname: true,
        isValidPhone: false,
        emailOK: false,
        passwordOK: false,
    });

    const handleEmailChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_handleEmailChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_handleEmailChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true,
                passwordOK: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false,
                passwordOK: false
            });
        }
    }

    const handleFullnameChange = (val) => {
        if (val.trim().length >= 0) {
            setData({
                ...data,
                fullname: val,
                isValidFullname: true,
            });
        } else {
            setData({
                ...data,
                fullname: val,
                isValidFullname: false,
            });
        }
    }

    const handlePhoneChange = (val) => {
        if (val.trim().length === 10) {
            setData({
                ...data,
                phone: val,
                isValidPhone: true,
            });
        } else {
            setData({
                ...data,
                phone: val,
                isValidPhone: false,
            });
        }
    }

    const handleAddressChange = (val) => {
        setData({
            ...data,
            address: val,
        });
    }

    const updateSecuteTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleGenderChange = (val) => {
        setData({
            ...data,
            gender: val,
        })
    }

    const handleDOBChange = (val) => {
        setData({
            ...data,
            dob: val
        })
    }

    // const [selectedRole, setSelectedRole] = useState("student");

    const handleRoleChange = (val) => {
        console.log("roleeee: " + val)
        setData({
            ...data,
            role: val,
        })
    }

    const handleInterestTopicChange = (val) => {
        setInterestTopicThis(val);
        // setData({
        //     ...data,
        //     interestTopic: val,
        // })
    }

    console.log(listTopic);

    const handleSubmit = async () => {
        console.log(data);
        console.log(interestTopicThis)
        const response = await authAPI.register({
            email: data.email,
            password: data.password,
            fullName: data.fullname,
            roleId: data.role,
            phone: data.phone,
            address: data.address,
            DOB: data.dob,
            gender: data.gender,
            interestTopic: interestTopicThis
        })
        if (response.status === "Success") {
            // console.log(response);
            Alert.alert('Signup Success', `${response.message}`, [
                { text: 'OK' }
            ]);
            // setTimeout(() => {
            //     navigation.navigate("SignIn");
            // }, 2000);
            navigation.navigate("SignIn");
        } else {
            // console.log(response)
            Alert.alert('Signup Failed', `${response.message}`, [
                { text: 'Ok' }
            ]);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <View style={{ alignItems: 'center' }}>
                    <ScrollView>
                        {/* Email here */}
                        <Text style={styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                keyboardType='email-address'
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handleEmailChange(val)}
                            />
                            {data.check_textInputChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}
                                    />
                                </Animatable.View>
                                : null}
                        </View>
                        {/* Password here */}
                        <Text style={[styles.text_footer, {
                            // color: colors.text,
                            marginTop: 10
                        }]}>Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                // color={colors.text}
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                placeholderTextColor="#666666"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={[styles.textInput, {
                                    // color: colors.text
                                }]}
                                autoCapitalize="none"
                                onChangeText={(val) => handlePasswordChange(val)}
                            />
                            <TouchableOpacity
                                onPress={updateSecuteTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        {/* Fullname here */}
                        <Text style={[styles.text_footer, { marginTop: 10 }]}>Fullname</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Your Fullname"
                                // keyboardType='email-address'
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handleFullnameChange(val)}
                            />
                        </View>
                        {/* Phone Here */}
                        <Text style={[styles.text_footer, { marginTop: 10 }]}>Phone</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Your Phone Number"
                                keyboardType='numeric'
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handlePhoneChange(val)}
                            />
                        </View>
                        {/* Address here */}
                        <Text style={[styles.text_footer, { marginTop: 10 }]}>Address</Text>
                        <View style={styles.action}>

                            <TextInput
                                placeholder="Your Address"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handleAddressChange(val)}
                            />
                        </View>
                        {/* Dob here */}
                        <Text style={[styles.text_footer, { marginTop: 10 }]}>DOB</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Your dob"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handleDOBChange(val)}
                            />
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
                        {listTopic.length > 0 &&
                            <View>
                                <SectionedMultiSelect
                                    items={listTopic}
                                    IconRenderer={Icon}
                                    uniqueKey="id"
                                    subKey="children"
                                    selectText="Pick your favourite topic"
                                    searchPlaceholderText="Search favourite topic"
                                    showDropDowns={true}
                                    readOnlyHeadings={true}
                                    onSelectedItemsChange={handleInterestTopicChange}
                                    selectedItems={interestTopicThis}
                                />
                            </View>
                        }
                        {/* Button action */}
                        <TouchableOpacity
                            // onPress={() => { loginHandle(data.username, data.password) }}
                            // disabled={!data.emailOK && !data.passwordOK}
                            // onPress={() => navigation.navigate("SignIn")}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                            onPress={handleSubmit}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                            onPress={() => { navigation.navigate("SignIn"); }}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Back To Login</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Animatable.View >
        </View >
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#009387'
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
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});