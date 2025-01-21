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
      description: {
        component: `

Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components.

Consider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.

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
