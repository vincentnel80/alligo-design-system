import React from 'react';
import { DocsContainer, DocsContext } from '@storybook/addon-docs/blocks';
import { DocsPage } from '@storybook/addon-docs';
import CustomDiv from './CustomDiv';

const CustomDocsContainer = ({ context }) => {
  return (
    <DocsContainer context={context}>
      {/* Custom Div goes here <CustomDiv /> */}
      
      <DocsPage />
      <CustomDiv />
    </DocsContainer>
  );
};

export default CustomDocsContainer;
