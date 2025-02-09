import React from 'react';
import { DocsPage } from '@storybook/addon-docs';

const SimpleDiv = ({ text }) => {
  return (
    <div style={{ padding: '16px', backgroundColor: '#e0f7fa', border: '1px solid #00acc1' }}>
        
      <h3>{text}</h3>
    </div>
  );
};

export default SimpleDiv;


