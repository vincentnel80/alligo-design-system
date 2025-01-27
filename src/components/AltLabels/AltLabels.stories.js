import React, { useEffect } from 'react';
import { AltLabel } from './AltLabel';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function

const generateHtmlSnippet = (args) => {
  const { size = 'alt-label-lg', summary, modifier = 'None', marginBottom = 'None' } = args;
  const classes = [size];

  // Only add modifier if it is not 'None'
  if (modifier !== 'None') classes.push(modifier);

  // Determine if the <div> needs a class
  const divTag = marginBottom !== 'None' ? `<div class="${marginBottom}">` : `<div>`;

  return `${divTag}<p class="${classes.join(' ')}">${summary}</p></div>`;
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
      options: ['None', 'margin-bottom-16-small', 'margin-bottom-24-small', 'margin-bottom-32-large'],  
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
