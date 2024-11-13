import React, { useEffect } from 'react';
import { Display } from './Display';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function


/* const generateHtmlSnippet = (args) => {
  const { size = 'display-lg', summary, modifier = 'None', marginBottom = 'None' } = args; 
  
  const classes = [size];
  if (modifier) classes.push(modifier);
  if (marginBottom) classes.push(marginBottom);

  return `<p class="${classes.join(' ')}">${summary}</p>`;
}; */

const generateHtmlSnippet = (args) => {
  const { size = 'display-lg', summary, modifier = 'None', marginBottom = 'None' } = args;  // Default values
  
  // Conditionally add modifier and marginBottom if they are not 'None'
  const classes = [size];
  if (modifier !== 'None') classes.push(modifier);
  if (marginBottom !== 'None') classes.push(marginBottom);

  // Join the classes array into a string, filtering out any empty values
  return `<p class="${classes.join(' ')}">${summary}</p>`;
};


export default {
  title: 'Foundation/Typography/Components/Display',
  component: Display,
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
      options: ['display-sm', 'display-md', 'display-lg'],
      defaultValue: 'display-lg',
    },
    modifier: {
      control: { type: 'select' },
      options: ['None', 'preamble', 'underline', 'bold', 'strikethrough'],
      defaultValue: 'preamble',
      // Conditionally disable the modifier control based on the value of size
      table: {
        disable: true, // initially disabled in the docs table
      },
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['None', 'space-16-small', 'space-24-small', 'space-32-large'], // go over
      defaultValue: 'None',
    },
  },
  // Custom logic to enable or disable the modifier based on size
  /// there are no modifiers for this vin
    /// there are no modifiers for this vin
      /// there are no modifiers for this vin
        /// there are no modifiers for this vin
  decorators: [
    (Story, context) => {
      const { size, version } = context.args;
      const { args } = context;
      const modifierControl = context.argTypes.modifier;
      modifierControl.table.disable = args.size !== 'body-xl';

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



const Template = (args) => <Display {...args} />;

// Dynamic generation of the Default story
// after session with Erik, default is redundant and make an actual text
/*export const Default = Template.bind({});
Default.args = {
  summary: summaryText,
  size: 'body-xl',  // Set a default size
  marginBottom: '',  // Set a default marginBottom
};

Default.parameters = {
  docs: {
    disable: true,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
}; */

// Dynamic generation of the Default story - now replaced with body x large
export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
  version: 'Desktop',
  breakpoint: '',
  size: 'display-lg',
  summary: 'Clearance sale',
  marginBottom: 'None',
};

DisplayLarge.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

// Other variants like HeadlineLarge, HeadlineMedium, etc.
/*export const BodyXLarge = Template.bind({});
BodyXLarge.args = {
  ...Default.args,
  size: 'body-xl',
};
BodyXLarge.parameters = {
  docs: {
    disable: true,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args), // the above will hide this. to reactivate, delete "disable: true"
    },
  },
}; */

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
  size: 'display-md',
  summary: 'Up to 30% on everything from Milwaukee',
  marginBottom: 'None',
};
DisplayMedium.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
  size: 'display-sm',
  summary: 'Up to 30% on everything from Milwaukee',
  marginBottom: 'None',
};
DisplaySmall.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};


// body LG modifiers
