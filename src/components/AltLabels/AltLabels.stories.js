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
      description: {
        component: `

 Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, labeling formfields and user info. 
 The style should be considered as a compliment to the Label style.

<div class="content-block content-block--callout callout-primary" role="alert">
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="12" r="9"></circle>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
      <polyline points="11 12 12 12 12 16 13 16"></polyline>
    </svg>
  </div>
  <div class="body-md content">
Disclaimer: The look of fonts in the Storybook Panel may appear slightly different from fonts registered on the live site (via css) due to a font rendering error / issue in Storybook.

Generally, in order for fonts to appear correctly on the live site, the font-weight needs to be "stepped down" by 100, from the font-weight value listed in Figma.
  </div>
</div>
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
