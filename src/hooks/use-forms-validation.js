import { showToastError } from "../services/showToasts";

export const useEmailValidation = (email) => {
  if (!email || email.length === 0) {
    showToastError('Email não pode ser vazio');
    return false;
  }

  const isEmailValid = /@/.test(email);
  if (!isEmailValid) {
    showToastError('Email inválido');
    return false;
  }

  return true;
};

export const usePasswordValidation = (password, repeatPassword) => {
  const minCharacter = 6;
  if (!password) {
    showToastError('Senha não pode ser vazia');
    return false;
  } else if (!repeatPassword) {
    showToastError('Repetir senha não pode ser vazia');
    return false;
  } else if (password !== repeatPassword) {
    showToastError('Senhas devem ser iguais');
    return false;
  } else if (
    password.length < minCharacter ||
    repeatPassword.length < minCharacter
  ) {
    showToastError(`Senha deve ter mais de ${minCharacter} caracteres`);
    return false;
  }
  return true;
};
