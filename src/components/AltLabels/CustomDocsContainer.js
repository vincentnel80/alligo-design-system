import React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks'; // needed
import { DocsPage } from '@storybook/addon-docs'; // needed
import DocResourcesContainer from './DocResourcesContainer';

const CustomDocsContainer = ({ context }) => {
  return (
    <DocsContainer context={context}>
      <DocsPage />
      <DocResourcesContainer />
    </DocsContainer>
  );
};

export default CustomDocsContainer;
