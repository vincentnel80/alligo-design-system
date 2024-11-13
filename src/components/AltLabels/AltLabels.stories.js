import React, { useEffect } from 'react';
import { AltLabel } from './AltLabel';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { version = 'Desktop', size = 'alt-label-lg', summary, marginBottom = 'None' } = args;  // Default values
  const marginBottomClass = marginBottom !== 'None' ? marginBottom : '';

  // Join classes and filter out any empty strings to avoid extra spaces
  const classNames = [size, marginBottomClass].filter(Boolean).join(' ');

  return `<p class="${classNames}">${summary}</p>`;
};


export default {
  //title: 'Typography/Alt Label',
  title: 'Foundation/Typography/Components/Alt Label',
  component: AltLabel,
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
    },
    breakpoint: {
      description: '', 
      table: {
        type: { summary: 'Information' },
       defaultValue: '',
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
  // Custom logic to enable or disable the modifier based on fontName
  /// there are no modifiers for this vin
    /// there are no modifiers for this vin
      /// there are no modifiers for this vin
        /// there are no modifiers for this vin
  decorators: [
    (Story, context) => {
      const { version } = context.args;
      const { args } = context;

      useEffect(() => {
        // Update breakpoint description based on the selected version
        context.argTypes.breakpoint.description = version === 'Desktop' 
          ? 'breakpoint-md & breakpoint-lg'
          : 'breakpoint-xs & breakpoint-sm';
      }, [version]);

      return <Story {...args} />;
    },
  ],
  tags: ['autodocs'],
};

const summaryText = 'NAME OF COMPANY SIGNATORY CONTACT PERSON';

const Template = (args) => <AltLabel {...args} />;


// Dynamic generation of the Default story - now replaced with body x large
export const AltLabelLarge = Template.bind({});
AltLabelLarge.args = {
  version: 'Desktop',
  breakpoint: '',
  size: 'alt-label-lg',  // Set a default fontName
  summary: summaryText,
  marginBottom: 'None',  // Set a default marginBottom
};

AltLabelLarge.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};


export const AltLabelMedium = Template.bind({});
AltLabelMedium.args = {
  //...Default.args, // will change all of this
  ...AltLabelMedium.args, // will change all of this
  size: 'alt-label-md',
  summary: summaryText,
};
AltLabelMedium.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
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
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};
