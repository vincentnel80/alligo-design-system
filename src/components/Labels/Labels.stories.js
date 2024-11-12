import { Label } from './Label';
import CustomDocsContainer from './CustomDocsContainer';
import React, { useEffect } from 'react';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { size = 'label-lg', summary, modifier = 'None', marginBottom = 'None' } = args;  // Default values
  const modifierClass = modifier !== 'None' ? modifier : '';
  const marginBottomClass = marginBottom !== 'None' ? marginBottom : '';

  // Join classes and filter out any empty strings to avoid extra spaces
  const classNames = [size, modifierClass, marginBottomClass].filter(Boolean).join(' ');

  return `<p class="${classNames}">${summary}</p>`;
};

export default {
  title: 'Foundation/Typography/Components/Label',
  component: Label,
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
      options: ['None', 'space-16-small', 'space-24-small', 'space-32-large'],
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
