import React, { useEffect } from 'react';
import { Title } from './Title';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
/*
const generateHtmlSnippet = (args) => {
  const { size = 'title-lg', summary, marginBottom = '' } = args; 
  return `<div class="${size} ${marginBottom}">${summary}</div>`;
}; 
*/
const generateHtmlSnippet = (args) => {
  const { size = 'title-lg', summary, marginBottom = 'None' } = args; 
  
  // Only add marginBottom if it's not 'None'
  const classes = [size];
  if (marginBottom !== 'None') classes.push(marginBottom);

  return `<div class="${classes.join(' ')}">${summary}</div>`;
};


export default {
 // title: 'Typography/Title',
  title: 'Foundation/Typography/Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
    docs: {
      container: CustomDocsContainer,
      // Using a function here to dynamically update the source code
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
      options: ['title-sm', 'title-md', 'title-lg'],
      control: { type: 'select' },
      defaultValue: 'title-lg',
    },
    marginBottom: {
      options: ['None', 'space-4-small', 'space-8-small', 'space-12-small'],
      control: { type: 'select' },
      defaultValue: 'None',
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

const summaryText = 'Swedol caters to the needs of professional users as a multispecialist';

const Template = (args) => <Title {...args} />;

// Dynamic generation of the Default story
export const Default = Template.bind({});
Default.args = {
  version: 'Desktop',
  breakpoint: '',
  size: 'title-lg',  // Set a default size
  summary: summaryText,
  marginBottom: 'None',  // Set a default marginBottom
};

Default.parameters = {
  docs: {
    // Pass args to dynamically generate code for the current state
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

// Other variants like TitleLarge, TitleMedium, etc.
export const TitleLarge = Template.bind({});
TitleLarge.args = {
  ...Default.args,
  size: 'title-lg',
};
TitleLarge.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const TitleMedium = Template.bind({});
TitleMedium.args = {
  ...Default.args,
  size: 'title-md',
};
TitleMedium.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const TitleSmall = Template.bind({});
TitleSmall.args = {
  ...Default.args,
  size: 'title-sm',
};
TitleSmall.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};
