import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 28,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,

    elevation: 3,
  },

  fieldContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },

  required: {
    color: '#DC2626',
  },

  input: {
    minHeight: 50,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#111827',
  },

  inputFocused: {
    borderColor: '#4F46E5',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
  },

  textArea: {
    minHeight: 120,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#111827',
    textAlignVertical: 'top',
  },

  inputError: {
    borderColor: '#DC2626',
    backgroundColor: '#FEF2F2',
  },

  errorText: {
    color: '#DC2626',
    fontSize: 12,
    marginTop: 6,
    fontWeight: '500',
  },

  helperText: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 6,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 28,
  },

  saveButton: {
    flex: 1,
    height: 52,
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,

    elevation: 3,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  cancelButton: {
    flex: 1,
    height: 52,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelButtonText: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '600',
  },

  disabledButton: {
    opacity: 0.5,
  },
});