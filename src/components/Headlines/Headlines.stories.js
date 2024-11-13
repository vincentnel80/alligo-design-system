import React, { useEffect } from 'react';
import { Headline } from './Headline';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
/*
const generateHtmlSnippet = (args) => {
  const { size = 'headline-lg', summary, marginBottom = '' } = args;  
  return `<div class="${size} ${marginBottom}">${summary}</div>`;
};
*/
// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { size = 'headline-lg', summary, modifier = 'None', marginBottom = 'None' } = args;  // Default values
  
  // Conditionally add modifier and marginBottom if they are not 'None'
  const classes = [size];
  if (modifier !== 'None') classes.push(modifier);
  if (marginBottom !== 'None') classes.push(marginBottom);

  // Join the classes array into a string, filtering out any empty values
  return `<p class="${classes.join(' ')}">${summary}</p>`;
};



export default {
  //title: 'Typography/Headline',
  title: 'Foundation/Typography/Components/Headline',
  component: Headline,
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
      options: ['headline-sm', 'headline-md', 'headline-lg', 'headline-xl'],
      defaultValue: 'headline-lg',
    },

    modifier: {
      control: { type: 'select' },
      options: ['None', 'headline-md--blockquote'],
      defaultValue: 'None',
      // Conditionally disable the modifier control based on the value of size
      table: {
        disable: true, // initially disabled in the docs table
      },
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['None', 'space-8-small', 'space-12-small', 'space-16-small'],
      defaultValue: 'None',
    },
  },
  // Custom logic to enable or disable the modifier based on size
  decorators: [
    (Story, context) => {
      const { version } = context.args;
      const { args } = context;
      const modifierControl = context.argTypes.modifier;
      modifierControl.table.disable = args.size !== 'headline-md';

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

const summaryText = 'Swedol caters to the needs of the professionals';

const Template = (args) => <Headline {...args} />;

// Dynamic generation of the Default story
export const Default = Template.bind({});
Default.args = {
  version: 'Desktop',
  breakpoint: '',
  size: 'headline-lg',  // Set a default size
  summary: summaryText,
  marginBottom: 'None',  // Set a default marginBottom
  modifier: 'None',
};

Default.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

// Other variants like HeadlineLarge, HeadlineMedium, etc.
export const HeadlineXLarge = Template.bind({});
HeadlineXLarge.args = {
  ...Default.args,
  size: 'headline-xl',
  modifier: 'None',
};
HeadlineXLarge.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const HeadlineLarge = Template.bind({});
HeadlineLarge.args = {
  ...Default.args,
  size: 'headline-lg',
};
HeadlineLarge.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const HeadlineMedium = Template.bind({});
HeadlineMedium.args = {
  ...Default.args,
  size: 'headline-md',
};
HeadlineMedium.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const HeadlineSmall = Template.bind({});
HeadlineSmall.args = {
  ...Default.args,
  size: 'headline-sm',
};
HeadlineSmall.parameters = {
  docs: {
    code: null,  // This will hide the "Show Code" button
  },
};

export const HeadlineMediumModifier = Template.bind({});
HeadlineMediumModifier.args = {
  ...Default.args,
  size: 'headline-md',
  modifier: 'headline-md--blockquote',
};
HeadlineMediumModifier.parameters = {
  docs: {
    code: null,  // This will hide the "Show Code" button
  },
};
