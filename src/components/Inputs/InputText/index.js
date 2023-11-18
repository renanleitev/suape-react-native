import { View, TextInput } from 'react-native';
import { corCinzaPrincipal } from '../../../config/colors';
import styles from './styles';

const InputText = (props) => {
  const placeholder = props.placeholder;
  const onChangeText = props.onChangeText;
  const secureTextEntry = props.secureTextEntry;

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={corCinzaPrincipal}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputText;
