import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import styles from './styles';

const InputText = () => {
  const [text, onChangeText] = useState('Useless Text');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

export default InputText;