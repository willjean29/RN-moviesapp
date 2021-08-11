import React, {createContext, useState} from 'react';
export interface ImageColors {
  primary: string;
  secondary: string;
}
export interface UiContextI {
  prevColors: ImageColors;
  colors: ImageColors;
  setPrevColors: (prevColors: ImageColors) => void;
  setColors: (colors: ImageColors) => void;
}

export const UiContext = createContext({} as UiContextI);

export interface UiStateProps {
  children: React.ReactNode;
}

const UiState: React.FC<UiStateProps> = ({children}) => {
  const [prevColorsImg, setPrevColorsImg] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [colorsImg, setColorsImg] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setPrevColors = (prevColors: ImageColors) => {
    setPrevColorsImg(prevColors);
  };

  const setColors = (colors: ImageColors) => {
    setColorsImg(colors);
  };

  return (
    <UiContext.Provider
      value={{
        prevColors: prevColorsImg,
        colors: colorsImg,
        setPrevColors,
        setColors,
      }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiState;
