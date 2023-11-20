import { Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { showToastSuccess, showToastError } from '../../../../services/showToasts';
import { patchSaveJourney } from '../../../../services/patchSaveJourney';
import styles from './styles';

const SaveJourneyButton = () => {
  const users = useSelector((state) => state.users) || [];
  const user = users[0];
  const journeys = useSelector((state) => state.journeys) || [];

  const saveJourneySuccess = "Itinerário salvo com sucesso";
  const emptyJourneyError = "Itinerário está vazio";
  const userNotLoggedIn = "Faça o login para salvar o itinerário";

  const saveJourney = async () => {
    if (journeys.length > 0 && user?.isLoggedIn) {
        showToastSuccess(saveJourneySuccess);
        await patchSaveJourney({...user, Journey: journeys});
    } else if (journeys.length === 0) {
        showToastError(emptyJourneyError);
    } else {
        showToastError(userNotLoggedIn);
    }
  };

  return (
    <Pressable
      style={[styles.button, styles.buttonSave]}
      onPress={saveJourney}
    >
      <Text style={styles.textStyle}>Salvar</Text>
    </Pressable>
  );
};

export default SaveJourneyButton;
