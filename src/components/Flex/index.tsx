import React, { FC } from 'react';
import { FlexStyle, View } from 'react-native';

const Flex: FC<FlexStyle> = ({
  display,
  flex,
  alignContent,
  alignItems,
  alignSelf,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  children,
}) => {
  return (
    <View
      style={{
        display,
        flex,
        alignContent,
        alignItems,
        alignSelf,
        flexBasis,
        flexDirection,
        flexGrow,
        flexShrink,
        flexWrap,
        justifyContent,
      }}>
      {children}
    </View>
  );
};

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
