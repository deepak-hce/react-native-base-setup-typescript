import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Form from './src/components/Form';
import {
  ButtonTypes,
  FieldTypes,
  IconType,
  IFormParams,
  IIconParams,
  ValidatorTypes,
} from './src/interfaces/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomIcon from './src/components/CustomIcon';

const App = () => {
  const formInput1: IFormParams = {
    formName: 'loginForm',
    submitButton: {
      buttonName: 'Submit',
      loader: true,
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>
          <CustomIcon {...rocketIcon}> </CustomIcon>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
