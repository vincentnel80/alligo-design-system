import React from 'react';
import { Meta } from '@storybook/react';

import { Requirements } from "../components/Requirements";

export default {
  title: 'App Test',
  component: Requirements,
} as Meta;

export const App = () => <Requirements />;
