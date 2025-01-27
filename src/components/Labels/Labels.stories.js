import { Label } from './Label';
import CustomDocsContainer from './CustomDocsContainer';
import React, { useEffect } from 'react';

// Dynamic HTML snippet generator function
/*
const generateHtmlSnippet = (args) => {
  const { size = 'label-lg', summary, modifier = 'None', marginBottom = 'None' } = args;  // Default values
  const modifierClass = modifier !== 'None' ? modifier : '';
  const marginBottomClass = marginBottom !== 'None' ? marginBottom : '';

  // Join classes and filter out any empty strings to avoid extra spaces
  const classNames = [size, modifierClass, marginBottomClass].filter(Boolean).join(' ');

  return `<p class="${classNames}">${summary}</p>`;
};*/

const generateHtmlSnippet = (args) => {
  const { size = 'label-lg', summary, modifier = 'None', marginBottom = 'None' } = args;
  const classes = [size];

  // Only add modifier if it is not 'None'
  if (modifier !== 'None') classes.push(modifier);

  // Determine if the <div> needs a class
  const divTag = marginBottom !== 'None' ? `<div class="${marginBottom}">` : `<div>`;

  return `${divTag}<p class="${classes.join(' ')}">${summary}</p></div>`;
};

export default {
  title: 'Foundation/Typography/Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      container: CustomDocsContainer,
      description: {
        component: `

Labels are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling form fields and user info. Label styles are a bolder version of Alt-Label and therefore higher empasis than the Alt version.

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
      description: '', // Initially empty; dynamically set in the decorator
      table: {
        type: { summary: 'Information' },
      },
      control: false, // No direct control, purely informational
    },
    size: {
      control: { type: 'select' },
      options: ['label-sm', 'label-md', 'label-lg'],
      defaultValue: 'label-lg',
    },
    modifier: {
      control: { type: 'select' },
      options: ['None', 'label-lg--underline'],
      defaultValue: 'None',
      table: {
        disable: false, // Modifier control visible by default
      },
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['None', 'margin-bottom-16-small', 'margin-bottom-24-medium', 'margin-bottom-32-large'],  
      defaultValue: 'None',
    },
  },
  decorators: [
    (Story, context) => {
      const { args } = context;
      const modifierControl = context.argTypes.modifier;

      useEffect(() => {
        // Update breakpoint description based on the selected version
        context.argTypes.breakpoint.description = args.version === 'Desktop' 
          ? 'breakpoint-md & breakpoint-lg'
          : 'breakpoint-xs & breakpoint-sm';
      }, [args.version]);

      // Existing logic for modifier options based on size
      if (args.size === 'label-sm') {
        if (args.modifier !== 'None' && modifierControl.options[0] !== 'None') {
          args.modifier = 'None';
        }
        modifierControl.options = ['None', 'label-sm--badge'];
        modifierControl.table.disable = false;
      } else if (args.size === 'label-lg') {
        if (args.modifier !== 'None' && modifierControl.options[0] !== 'None') {
          args.modifier = 'None';
        }
        modifierControl.options = ['None', 'label-lg--underline'];
        modifierControl.table.disable = false;
      } else {
        args.modifier = 'None';
        modifierControl.table.disable = true; // Hide modifier for label-md
      }

      return <Story {...args} />;
    },
  ],
  tags: ['autodocs'],
};

const summaryText = 'Surname';

const Template = (args) => <Label {...args} />;

export const LabelLarge = Template.bind({});
LabelLarge.args = {
  version: 'Desktop',
  breakpoint: '',
  size: 'label-lg',
  summary: summaryText,
  marginBottom: 'None',
  modifier: 'None',
};

LabelLarge.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

// NB add in modifier and then only on actual stories for that do it
export const LabelMedium = Template.bind({});
LabelMedium.args = {
  ...LabelLarge.args,
  size: 'label-md',
  modifier: 'None',
};

LabelMedium.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const LabelSmall = Template.bind({});
LabelSmall.args = {
  ...LabelLarge.args,
  size: 'label-sm',
};

LabelSmall.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const LabelSmallBadge = Template.bind({});
LabelSmallBadge.args = {
  ...LabelLarge.args,
  size: 'label-sm',
  modifier: 'label-sm--badge',
};

LabelSmallBadge.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const LabelLargeUnderline = Template.bind({});
LabelLargeUnderline.args = {
  ...LabelLarge.args,
  size: 'label-lg',
  modifier: 'label-lg--underline',
};

LabelLargeUnderline.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};
