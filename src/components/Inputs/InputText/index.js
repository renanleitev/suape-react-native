import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { corCinzaPrincipal } from '../../../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const InputText = (props) => {
  const placeholder = props.placeholder;
  const onChangeText = props.onChangeText;
  const secureTextEntry = props.secureTextEntry;
  const defaultValue = props.defaultValue;
  const [showPassword, setShowPassword] = useState(true);
  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={corCinzaPrincipal}
        secureTextEntry={secureTextEntry && showPassword}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
      />
      {secureTextEntry && (
        <View>
          <Icon
            name={showPassword ? 'eye' : 'eye-slash'}
            size={20}
            style={styles.icon}
            onPress={onShowPassword}
          />
        </View>
      )}
    </View>
  );
};

export default InputText;
