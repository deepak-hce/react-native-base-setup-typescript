import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {
  FieldTypes,
  IFormFieldParams,
  IFormFieldValidators,
  IFormParams,
  ValidatorTypes,
} from '../interfaces/global';
import CustomButton from './CustomButton';

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
          <View key={index} style={styles.fieldContainer}>
            <Text> {field.label}</Text>
            <Controller
              control={control}
              rules={validators}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={field.placeholder}
                  secureTextEntry={
                    field.fieldType === FieldTypes.PASSWORD ? true : false
                  }
                />
              )}
              name={field.fieldName}
            />
            {errors[field.fieldName] && (
              <Text> {validatorErrorMap[errors[field.fieldName].type]} </Text>
            )}
          </View>
        );
      })}

      <CustomButton {...formInput.submitButton} />

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {},
  fieldContainer: {},
});

export default Form;
