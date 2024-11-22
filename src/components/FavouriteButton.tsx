import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const FavouriteButton: React.FC = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handlePress = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <TouchableOpacity
      style={styles.button} // Apply styles conditionally
      onPress={handlePress} // Handle button press
    >
      <View>
        <Svg width="22" height="22" viewBox="0 0 18 16" fill="none">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.87175 1.898L8.76603 1.81126C7.68678 0.925726 6.53166 0.476562 5.31295 0.476562C2.7681 0.476562 0.705078 2.53957 0.705078 5.08442C0.705078 8.60367 3.30553 12.0626 8.504 15.4995L8.87159 15.7426L9.23925 15.4995C14.4378 12.0626 17.0384 8.60367 17.0384 5.08442C17.0384 2.53956 14.9754 0.476562 12.4306 0.476562C11.2118 0.476562 10.0567 0.925727 8.97746 1.81126L8.87175 1.898ZM8.87175 3.74382L9.34116 3.27847C10.3327 2.2954 11.3547 1.8099 12.4306 1.8099C14.239 1.8099 15.7051 3.27594 15.7051 5.08442C15.7051 8.00414 13.4544 11.0135 8.96562 14.0772L8.87166 14.1413L8.77771 14.0772C4.28899 11.0135 2.03841 8.00414 2.03841 5.08442C2.03841 3.27595 3.50447 1.8099 5.31295 1.8099C6.38882 1.8099 7.41083 2.2954 8.40242 3.27848L8.87175 3.74382Z"
            fill={isFavorited ? '#FF0000' : '#6E7E96'} // Изменение цвета в зависимости от состояния
          />
          <Path
            d="M9.34116 3.27847L8.87175 3.74382L8.40242 3.27848C7.41083 2.2954 6.38882 1.8099 5.31295 1.8099C3.50447 1.8099 2.03841 3.27595 2.03841 5.08442C2.03841 8.00414 4.28899 11.0135 8.77771 14.0772L8.87166 14.1413L8.96562 14.0772C13.4544 11.0135 15.7051 8.00414 15.7051 5.08442C15.7051 3.27594
           14.239 1.8099 12.4306 1.8099C11.3547 1.8099 10.3327 2.2954 9.34116 3.27847Z"
            fill="transparent"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent', // Цвет фона кнопки
    height: 40,
    width: 40,
    alignItems: 'center', // Центрирование содержимого по горизонтали
    justifyContent: 'center', // Центрирование содержимого по вертикали
  },
  favoritedButton: {
    backgroundColor: '#FFDDDD', // Цвет фона, когда кнопка "избранная"
  },
  buttonText: {
    color: '#FFFFFF', // Цвет текста
    fontSize: 16, // Размер текста
    fontWeight: 'bold', // Жирный текст
  },
  disabledButton: {
    backgroundColor: '#A9A9A9', // Цвет фона, когда кнопка отключена
  },
});

export default FavouriteButton;
