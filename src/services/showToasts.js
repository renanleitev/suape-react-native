import { Toast } from "toastify-react-native";

export const showSuccess = (sucess) => {
    Toast.success(sucess);
}

export const showInfo = (info) => {
    Toast.info(info);
}

export const showError = (error) => {
    Toast.error(error);
}