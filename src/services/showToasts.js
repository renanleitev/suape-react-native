import Toast from 'react-native-toast-message';

export const showToastSuccess = (sucess) => {
    Toast.show({
        type: 'success',
        text1: sucess,
    });
};

export const showToastInfo = (info) => {
    Toast.show({
        type: 'info',
        text1: info,
    });
};

export const showToastError = (error) => {
    Toast.show({
        type: 'error',
        text1: error,
    });
};
