import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Form from '../components/Form';
import {colors} from '../constants/colors';
import {
  ButtonColorSchemes,
  ButtonTypes,
  FieldTypes,
  IconType,
  IFormParams,
  NavigationProps,
} from '../interfaces/global';

const LoginScreen = (props: NavigationProps) => {
  const loginForm: IFormParams = {
    formName: 'loginForm',
    fields: [
      {
        fieldName: 'mobileNumber',
        label: '',
        placeholder: 'Enter your registered mobile number',
        fieldType: FieldTypes.NUMBER,
        width: 350,
        prefixIcon: {
          iconType: IconType.ANT_DESIGN,
          iconName: 'mobile1',
          size: 20,
        },
      },
    ],
    submitButton: {
      buttonName: 'Login',
      function: () => {},
      buttonType: ButtonTypes.FILL,
      buttonColor: ButtonColorSchemes.PRIMARY,
    },
  };

  console.log('-------------------', props.route.params);
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Form {...loginForm}></Form>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
    alignSelf: 'stretch',
  },
  formContainer: {},
  text: {
    backgroundColor: '#000',
  },
});

export default LoginScreen;
