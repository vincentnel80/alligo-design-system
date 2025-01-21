import React, { useEffect } from 'react';
import { AltLabel } from './AltLabel';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { version = 'Desktop', size = 'alt-label-lg', summary, marginBottom = 'None' } = args;  // Default values
  const marginBottomClass = marginBottom !== 'None' ? marginBottom : '';

  const classNames = [size, marginBottomClass].filter(Boolean).join(' ');

  return `<p class="${classNames}">${summary}</p>`;
};


export default {
  title: 'Foundation/Typography/Components/Alt Label',
  component: AltLabel,
  parameters: {
    layout: 'centered',
    docs: {
      container: CustomDocsContainer,
      description: {
        component: `
 Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, labeling formfields and user info. 
 The style should be considered as a compliment to the Label style.
        `,
      },
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
    },
    breakpoint: {
      description: '', 
      table: {
        type: { summary: 'Information' },
       defaultValue: 'breakpoint-md & breakpoint-lg',
      },
      control: false, 
    },
    size: {
      control: { type: 'select' },
      options: ['alt-label-sm', 'alt-label-md', 'alt-label-lg'],
      defaultValue: 'alt-label-lg',
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['None', 'space-16-small', 'space-24-small', 'space-32-large'], // go over
      defaultValue: 'None',
    },
  },

  decorators: [
    (Story, context) => {
      const { version } = context.args;
      const { args } = context;

      useEffect(() => {
        context.argTypes.breakpoint.description = version === 'Desktop' 
          ? 'breakpoint-md & breakpoint-lg'
          : 'breakpoint-xs & breakpoint-sm';
      }, [version]);

      return <Story {...args} />;
    },
  ],
  tags: ['autodocs'],
};

const summaryText = 'Name of company signatory contact person';

const Template = (args) => <AltLabel {...args} />;

export const AltLabelLarge = Template.bind({});
AltLabelLarge.args = {
  version: 'Desktop',
  breakpoint: '',
  size: 'alt-label-lg',
  summary: summaryText,
  marginBottom: 'None',
};

AltLabelLarge.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const AltLabelMedium = Template.bind({});
AltLabelMedium.args = {
  ...AltLabelMedium.args,
  size: 'alt-label-md',
  summary: summaryText,
};
AltLabelMedium.parameters = {
  docs: {
    disable: false,  
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const AltLabelSmall = Template.bind({});
AltLabelSmall.args = {
  ...AltLabelSmall.args,
  size: 'alt-label-sm',
  summary: summaryText,
};
AltLabelSmall.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};
