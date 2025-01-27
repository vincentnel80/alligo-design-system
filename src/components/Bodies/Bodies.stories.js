import React, { useEffect } from 'react';
import { Body } from './Body';
import CustomDocsContainer from './CustomDocsContainer';

/*const generateHtmlSnippet = (args) => {
  const { size = 'body-xl', summary, modifier = '', marginBottom = '' } = args;  
  const classes = [size];
  if (modifier) classes.push(modifier);
  if (marginBottom) classes.push(marginBottom);
  return `<p class="${classes.join(' ')}">${summary}</p>`;
}; */

const generateHtmlSnippet = (args) => {
  const { size = 'body-xl', summary, modifier = 'None', marginBottom = 'None' } = args;
  const classes = [size];

  // Only add modifier if it is not 'None'
  if (modifier !== 'None') classes.push(modifier);

  // Determine if the <div> needs a class
  const divTag = marginBottom !== 'None' ? `<div class="${marginBottom}">` : `<div>`;

  return `${divTag}<p class="${classes.join(' ')}">${summary}</p></div>`;
};




const fontModifiers = {
  'body-sm': ['None', 'body-sm--italic', 'body-sm--underline', 'body-sm--strikethrough', 'body-sm--bold', 'body-sm--bold-italic', 'body-sm--bold-underline', 'body-sm--bold-strikethrough'],
  'body-md': ['None', 'body-md--bold', 'body-md--italic', 'body-md--underline', 'body-md--strikethrough', 'body-md--bold-italic', 'body-md--bold-underline', 'body-md--bold-strikethrough'],
  'body-lg': ['None', 'body-lg--bold', 'body-lg--italic', 'body-lg--underline', 'body-lg--strikethrough', 'body-lg--bold-italic', 'body-lg--bold-underline', 'body-lg--bold-strikethrough'],
  'body-xl': ['None', 'body-xl--preamble', 'body-xl--bold', 'body-xl--italic', 'body-xl--underline', 'body-xl--strikethrough', 'body-xl--bold-italic', 'body-xl--bold-underline', 'body-xl--bold-strikethrough'],
};

export default {
  title: 'Foundation/Typography/Components/Body',
  component: Body,
  parameters: {
    layout: 'centered',
    docs: {
      container: CustomDocsContainer,
      description: {
        component: `

Body is used for longer passages of text in the UI, usually in order to populate paragraphs. The body style is adjusted to be readable at smaller sizes.

**Body X-Large** is used for short intro passages of longer texts and non-recurrent text passages.

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
       // defaultValue: { summary: 'breakpoint-md & breakpoint-lg' },
       defaultValue: '',
      },
      control: false, 
    },
    size: {
      control: { type: 'select' },
      options: ['body-sm', 'body-md', 'body-lg', 'body-xl'],  
      defaultValue: 'body-lg',
    },
    modifier: {
      control: { type: 'select' },
      options: fontModifiers['body-xl'],  
      defaultValue: 'None',
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['None', 'margin-bottom-16-small', 'margin-bottom-24-medium', 'margin-bottom-32-large'],  
      defaultValue: 'None',
    },

  },
  decorators: [
    (Story, context) => {
      const { size, version } = context.args;
      const modifierControl = context.argTypes.modifier;

      useEffect(() => {
        modifierControl.options = fontModifiers[size] || [''];
      }, [size]);  

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

const summaryText = 'Swedol caters to the needs of professional users as a multispecialist. We provide high quality goods and services in a straightforward and professional manner.';

const Template = (args) => <Body {...args} />;

export const BodyXLargeDesktop = Template.bind({});
BodyXLargeDesktop.args = {
  version: 'Desktop',
  breakpoint: '',
  summary: summaryText,
  size: 'body-xl',
  modifier: 'None',
  marginBottom: 'None',
};

export const BodyLargeDesktop = Template.bind({});
BodyLargeDesktop.args = {
  ...BodyXLargeDesktop.args,
  size: 'body-lg',
};

export const BodyMediumDesktop = Template.bind({});
BodyMediumDesktop.args = {
  ...BodyXLargeDesktop.args,
  size: 'body-md',
};

export const BodySmallDesktop = Template.bind({});
BodySmallDesktop.args = {
  ...BodyXLargeDesktop.args,
  size: 'body-sm',
};
