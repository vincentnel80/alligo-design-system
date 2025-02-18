import React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { DocsPage } from '@storybook/addon-docs';
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
