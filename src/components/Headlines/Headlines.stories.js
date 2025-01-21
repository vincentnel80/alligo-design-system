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
      description: {
        component: `

Headline XL, L, M or S are best-suited for short high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines. Headline X-Large is well suited for H1 content.

Headline X-Large is never to be used in conjunction with Display Large or vice versa. Display Large always trumps Headline X-Large in a plain text context.

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
