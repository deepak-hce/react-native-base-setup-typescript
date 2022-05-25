import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {Helper} from '../classes/Helper';
import {colors} from '../constants/colors';
import {
  ButtonColorSchemes,
  ButtonTypes,
  FieldTypes,
  IFormFieldParams,
  IFormFieldValidators,
  IFormParams,
  ValidatorTypes,
} from '../interfaces/global';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';

const Form = (formInput: IFormParams) => {
  const defaultValues: any = {};

  formInput.submitButton.function = () => {};

  formInput.fields.map((field: IFormFieldParams) => {
    defaultValues[field.fieldName] = field.value;
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.formContainer}>
      {formInput.fields.map((field: IFormFieldParams, index: number) => {
        const validators: any = {};
        const validatorErrorMap: any = {};
        field.validations?.map((validator: IFormFieldValidators) => {
          validators[validator.validator] =
            validator.validator === ValidatorTypes.REQUIRED
              ? true
              : validator.value;
          validatorErrorMap[validator.validator] = validator.message;
        });

        if (field.change) {
          field.change(watch(field.fieldName));
        }

        return (
          <View key={index} style={{width: field.width ? field.width : 100}}>
            <Text style={styles.label}> {field.label}</Text>
            <Controller
              control={control}
              rules={validators}
              render={({field: {onChange, onBlur, value}}) => (
                <View style={styles.fieldContainer}>
                  {field.prefixIcon ? (
                    <View style={styles.prefixIcon}>
                      <CustomIcon {...field.prefixIcon}></CustomIcon>
                    </View>
                  ) : null}

                  <TextInput
                    style={styles.textInput}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder={field.placeholder}
                    secureTextEntry={
                      field.fieldType === FieldTypes.PASSWORD ? true : false
                    }
                    placeholderTextColor={colors.secondaryTextColor}
                  />
                </View>
              )}
              name={field.fieldName}
            />
            {errors[field.fieldName] && (
              <Text> {validatorErrorMap[errors[field.fieldName].type]} </Text>
            )}
          </View>
        );
      })}

      <View
        style={{
          ...styles.submitButton,
        }}>
        <CustomButton {...formInput.submitButton} />
      </View>

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {},
  fieldContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  textInput: {
    marginLeft: 5,
    fontSize: 16,
  },
  label: {},
  submitButton: {
    marginTop: 15,
  },
  prefixIcon: {
    marginLeft: 12,
  },
});

export default Form;
