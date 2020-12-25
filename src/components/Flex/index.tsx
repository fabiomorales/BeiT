import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';

type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type AlignSelf =
  | 'auto'
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';
type Display = 'none' | 'flex';
type Flex = number;
type FlexBasis = 'auto' | string | number;
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexFlow = 'row wrap' | 'row nowrap' | 'column nowrap';
type FlexGrow = number;
type FlexShrink = number;
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
export interface FlexProps extends ViewProps {
  display?: Display;
  flex?: Flex;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  flexBasis?: FlexBasis;
  flexDirection?: FlexDirection;
  flexFlow?: FlexFlow;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
}

const Flex: FC<FlexProps> = ({
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
  style,
  children,
}) => {
  return (
    <View
      style={[
        {
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
        },
        style,
      ]}>
      {children}
    </View>
  );
};

Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
};

export default Flex;
