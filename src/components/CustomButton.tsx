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
import {IButtonParams} from '../interfaces/global';

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
    <TouchableOpacity style={styles.container} onPress={handleSubmit}>
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
    borderRadius: 5,
    backgroundColor: '#4630EB',
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
  },
});

export default CustomButton;
