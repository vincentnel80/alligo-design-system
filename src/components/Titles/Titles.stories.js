import React, { useEffect } from 'react';
import { Title } from './Title';
import CustomDocsContainer from './CustomDocsContainer';

const generateHtmlSnippet = (args) => {
  const { size = 'title-lg', summary, modifier = 'None', marginBottom = 'None' } = args;
  const classes = [size];

  if (modifier !== 'None') classes.push(modifier);

  const divTag = marginBottom !== 'None' ? `<div class="${marginBottom}">` : `<div>`;

  return `${divTag}<p class="${classes.join(' ')}">${summary}</p></div>`;
};


export default {
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
      options: ['None', 'margin-bottom-16-small', 'margin-bottom-24-small', 'margin-bottom-32-large'], 
      control: { type: 'select' },
      defaultValue: 'None',
    },
  },
  decorators: [
    (Story, context) => {
      const { version } = context.args;

      useEffect(() => {
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

export const Default = Template.bind({});
Default.args = {
  version: 'Desktop',
  breakpoint: '',
  size: 'title-lg',
  summary: summaryText,
  marginBottom: 'None',
};

Default.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

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
