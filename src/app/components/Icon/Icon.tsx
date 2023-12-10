// Dependencies
import * as React from 'react';

// Icons
import {
  Hamburger
} from './Icons/icons';

export interface IIconProps {
  type: string;
}

export default function Icon({ type }: IIconProps): JSX.Element {
  switch (type) {
    case 'hamburger':
      return <Hamburger />;
    default:
      return <Hamburger />;
  }
}