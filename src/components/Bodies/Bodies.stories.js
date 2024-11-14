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

  // Only add modifier and marginBottom if they are not 'None'
  if (modifier !== 'None') classes.push(modifier);
  if (marginBottom !== 'None') classes.push(marginBottom);

  return `<p class="${classes.join(' ')}">${summary}</p>`;
};


const fontModifiers = {
  'body-sm': ['None', 'body-sm--italic', 'body-sm--underline', 'body-sm--strikethrough', 'body-sm--bold', 'body-sm-bold--italic', 'body-sm-bold--underline', 'body-sm-bold--strikethrough'],
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
      options: ['None', 'space-16-small', 'space-24-small', 'space-32-large'],  
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
