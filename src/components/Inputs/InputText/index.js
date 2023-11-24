import { View, TextInput } from 'react-native';
import { corCinzaPrincipal } from '../../../config/colors';
import styles from './styles';

const InputText = (props) => {
  const placeholder = props.placeholder;
  const onChangeText = props.onChangeText;
  const secureTextEntry = props.secureTextEntry;
  const defaultValue = props.defaultValue;

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={corCinzaPrincipal}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default InputText;
