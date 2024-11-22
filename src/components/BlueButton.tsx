import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]} // Apply styles conditionally
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4485f9',
    padding: 4,
    height: 32,
    borderRadius: 8, // Rounded corners
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    marginRight: 8,
    width: 'auto',
    flex: 1,
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 16, // Text size
    fontWeight: 'bold', // Text weight
  },
  disabledButton: {
    backgroundColor: '#A9A9A9', // Background color when disabled
  },
});

export default CustomButton;
