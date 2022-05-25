// Icon Reference - https://oblador.github.io/react-native-vector-icons/

import React from 'react';
import {Text} from 'react-native';
import {IconType, IIconParams} from '../interfaces/global';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../constants/colors';

const iconRenderer = (iconParams: IIconParams) => {
  switch (iconParams.iconType) {
    case IconType.FONT_AWESOME:
      return (
        <FontAwesome
          name={iconParams.iconName}
          size={iconParams.size ? iconParams.size : 30}
          color={
            iconParams.color ? iconParams.color : colors.defaultIconColor
          }></FontAwesome>
      );

    case IconType.ANT_DESIGN:
      return (
        <AntDesign
          name={iconParams.iconName}
          size={iconParams.size ? iconParams.size : 30}
          color={
            iconParams.color ? iconParams.color : colors.defaultIconColor
          }></AntDesign>
      );

    default:
      break;
  }
};

const CustomIcon = (iconParams: IIconParams) => {
  return (
    <>
      <Text>{iconRenderer(iconParams)}</Text>
    </>
  );
};

export default CustomIcon;
