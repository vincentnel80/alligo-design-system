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
      description: {
        component: `

Display styles are intended for short, prominent text or numerals, helping to emphasize important content and establish clear hierarchy. These styles are particularly effective when used in banners, campaign headlines, or any content that needs to capture attention.

They can also be embedded within specific UI regions or components to delineate sections of content, such as banners or featured areas. However, it's important to use these styles sparingly to avoid overwhelming the design.

Display Large is typically used to present H1 content, especially at the top of a page or article. It is crucial to maintain consistency by never using Display Large in combination with Headline X-Large, as each serves a distinct role in the visual hierarchy.

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
