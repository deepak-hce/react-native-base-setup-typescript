import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Form from './src/components/Form';
import {
  ButtonColorSchemes,
  ButtonTypes,
  FieldTypes,
  IconType,
  IFormParams,
  IIconParams,
  ValidatorTypes,
} from './src/interfaces/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomIcon from './src/components/CustomIcon';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  const formInput1: IFormParams = {
    formName: 'loginForm',
    submitButton: {
      buttonName: 'Submit',
      loader: true,
      buttonColor: ButtonColorSchemes.PRIMARY,
      function: loaderStatus => {
        setTimeout(() => {
          loaderStatus(false);
        }, 3000);
      },
      buttonType: ButtonTypes.OUTLINE,
    },
    fields: [
      {
        fieldName: 'mobileNumber',
        label: 'Mobile Number',
        placeholder: 'Enter your registered mobile number',
        fieldType: FieldTypes.TEXT,
        value: 'text',
        validations: [
          {
            validator: ValidatorTypes.REQUIRED,
            message: 'This field is required. not',
          },
          {
            validator: ValidatorTypes.MAX_LENGTH,
            message: 'Max length is set to 2',
            value: 2,
          },
        ],
        change: (value: any) => {
          console.log(value);
        },
      },
      {
        fieldName: 'password',
        label: 'Password Number',
        placeholder: 'Enter your password',
        fieldType: FieldTypes.PASSWORD,
        value: 'text',
      },
      {
        fieldName: 'mobileNumber1',
        label: 'Mobile Number',
        placeholder: 'Enter your registered mobile number',
        fieldType: FieldTypes.TEXT,
        value: 'text',
      },
      {
        fieldName: 'password1',
        label: 'Password Number',
        placeholder: 'Enter your password',
        fieldType: FieldTypes.PASSWORD,
      },
    ],
  };

  const rocketIcon: IIconParams = {
    iconName: 'rightcircle',
    iconType: IconType.ANT_DESIGN,
  };

  return <MainScreen></MainScreen>;
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
