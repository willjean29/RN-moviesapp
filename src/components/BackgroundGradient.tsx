import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {UiContext} from 'context/UiState';
import useFade from 'hooks/useFade';

export interface BackgroundGradientProps {
  children: React.ReactNode;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({children}) => {
  const {colors, prevColors, setPrevColors} = useContext(UiContext);
  const {opacity, fadeIn, fadeOut} = useFade();
  useEffect(() => {
    fadeIn(() => {
      setPrevColors(colors);
      fadeOut(0);
    });
  }, [colors]);
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default BackgroundGradient;
