import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/colors';
import {
  ButtonColorSchemes,
  ButtonTypes,
  IButtonParams,
} from '../interfaces/global';

const CustomButton = (buttonInput: IButtonParams) => {
  const [loader, loaderStatus] = useState(false);

  const handleLoader = (status: boolean) => {
    loaderStatus(status);
  };

  const handleSubmit = (event: any) => {
    buttonInput.function(handleLoader);
    handleLoader(true);
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor:
          buttonInput.buttonType === ButtonTypes.FILL &&
          buttonInput.buttonColor === ButtonColorSchemes.PRIMARY
            ? colors.primaryButtonColor
            : buttonInput.buttonType === ButtonTypes.FILL &&
              buttonInput.buttonColor === ButtonColorSchemes.SECONDARY
            ? colors.secondaryButtonColor
            : undefined,
      }}
      onPress={handleSubmit}>
      <View style={styles.mainContainer}>
        <Text style={styles.text}> {buttonInput.buttonName} </Text>

        {loader ? (
          <ActivityIndicator style={styles.loader} color="#fff" size="small" />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    paddingLeft: 5,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomButton;
