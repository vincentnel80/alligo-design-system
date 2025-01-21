import React, { useEffect } from 'react';
import { ButtonsUpdated } from './ButtonsUpdated';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const {title, marginBottom = '' } = args;
  
  // Return HTML snippet with dynamic values
  return `
    <div class="blockq-container">
      <div class="blockq-container-inner" style="border-left:">
        <div class="headline-md headline-md--blockquote">
        </div>
        <div class="bottom-text-wrapper">
          <span class="body-sm">${title}</span>
        </div>
      </div>
    </div>`;
};

export default {
  title: 'Components/Button Updated',
  component: ButtonsUpdated,
  parameters: {
    layout: 'centered',
    docs: {
      container: CustomDocsContainer,
      source: {
        transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
      },
    },
  },
  argTypes: { 
    version: {
      control: { type: 'select' }, 
      options: ['Desktop', 'Mobile'],
      defaultValue: 'Desktop',
      description: 'The version size for the component',
    },
    breakpoint: {
      description: '', 
      table: {
        type: { summary: 'Information' },
       // defaultValue: { summary: 'breakpoint-md & breakpoint-lg' },
       defaultValue: '',
      },
      control: false, 
    },
    buttonType: {
      control: { type: 'select' },
      options: [
        'DefaultInitialNone',
        'primary',
        'primary-with-icon',
        'primary-inverted',
        'primary-inverted-with-icon',
        'secondary',
        'secondary-with-icon',
        'secondary-inverted',
        'secondary-inverted-with-icon',
        'blank',
        'blank-with-icon',
        'blank-inverted',
        'blank-inverted-with-icon'
      ],
      defaultValue: '',
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'Toggle to enable or disable the component',
    },
    background: {
      control: { type: 'select' },
      options: [
        'Primary',
        'Secondary',
        'Dark'
      ],
      defaultValue: 'Secondary',
    },
    title: {
      control: 'text',
      description: 'Button text with label-lg font size',
      defaultValue: 'Button Text',
    },
  },
  decorators: [
    (Story, context) => {
      const { version } = context.args;

      useEffect(() => {
        // Update breakpoint description based on the selected version
        context.argTypes.breakpoint.description = version === 'Desktop' 
          ? 'breakpoint-md & breakpoint-lg'
          : 'breakpoint-xs & breakpoint-sm';
      }, [version]);

      return <Story {...context.args} />;
    },
  ],
  tags: ['autodocs'],
};

const Template = (args) => <ButtonsUpdated {...args} />;

export const ButtonsUpdatedDesktop = Template.bind({});
ButtonsUpdatedDesktop.args = {
  version: 'Desktop',  // Default vversioniewport
  breakpoint: '',
  title: 'Button Text',
};

ButtonsUpdatedDesktop.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

// New Mobile Component Example
export const ButtonsUpdatedMobile = Template.bind({});
ButtonsUpdatedMobile.args = {
  version: 'Mobile'  // Set to Mobile for this variant
};

ButtonsUpdatedMobile.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};
