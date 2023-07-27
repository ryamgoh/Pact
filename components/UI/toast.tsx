import Toast from 'react-native-toast-message';

export const loginErrorToast = () => {
  Toast.show({
    type: 'error',
    text1: 'Login Error',
    text2: 'Invalid email or password',
    autoHide: true,
    visibilityTime: 2000,
  });
};

export const createAccountErrorToast = () => {
  Toast.show({
    type: 'error',
    text1: 'Create Account Error',
    text2: 'Please enter valid details!',
    autoHide: true,
    visibilityTime: 2000,
  });
};

export const createAccountSuccessToast = () => {
  Toast.show({
    type: 'success',
    text1: 'Account Created',
    text2: 'Please login to continue',
    autoHide: true,
    visibilityTime: 2000,
  });
};

export const invalidEmailResetPassword = () => {
  Toast.show({
    type: 'error',
    text1: 'Invalid Email',
    text2: 'Please enter a valid email',
    autoHide: true,
    visibilityTime: 2000,
  });
}