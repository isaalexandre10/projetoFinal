import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  content: {
    width: '100%',
    maxWidth: 450,
    alignSelf: 'center',
  },

  logoArea: {
    alignItems: 'center',
    marginBottom: 40,
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },

  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
    marginBottom: 18,
  },

  inputFocused: {
    borderColor: '#4F46E5',
    borderWidth: 2,
  },

  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: -8,
    marginBottom: 24,
  },

  linkText: {
    color: '#4F46E5',
    fontSize: 14,
    fontWeight: '600',
  },

  loginButton: {
    backgroundColor: '#4F46E5',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 4,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },

  createAccountText: {
    color: '#6B7280',
    fontSize: 14,
  },

  createAccountLink: {
    color: '#4F46E5',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 5,
  },
});