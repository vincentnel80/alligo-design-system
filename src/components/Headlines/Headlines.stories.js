import { Headline } from './Headline';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { size = 'headline-lg', summary, marginBottom = '' } = args;  // Default values
  return `<div class="${size} ${marginBottom}">${summary}</div>`;
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
    size: {
      control: { type: 'select' },
      options: ['headline-sm', 'headline-md', 'headline-lg', 'headline-xl'],
      defaultValue: 'headline-lg',
    },
    /// there is only 1 mofifier --- so how to handle
    modifier: {
      control: { type: 'select' },
      options: ['', 'blockquote'],
      //defaultValue: 'blockquote',
      defaultValue: 'blockquote',
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
      const { args } = context;
      const modifierControl = context.argTypes.modifier;
      modifierControl.table.disable = args.size !== 'headline-md';
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
  size: 'headline-lg',  // Set a default size
  summary: summaryText,
  marginBottom: '',  // Set a default marginBottom
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
  size: 'headline-md headline-md--blockquote',
};
HeadlineMediumModifier.parameters = {
  docs: {
    code: null,  // This will hide the "Show Code" button
  },
};
