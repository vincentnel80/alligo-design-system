import { Title } from './Title';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { fontName = 'title-lg', summary, marginBottom = '' } = args;  // Default values
  return `<div class="${fontName} ${marginBottom}">${summary}</div>`;
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
    viewport: {
      control: { type: 'select' }, 
      options: ['Desktop', 'Mobile'],
      defaultValue: 'Desktop',
    },
    fontName: {
      options: ['title-sm', 'title-md', 'title-lg'],
      control: { type: 'select' },
      defaultValue: 'title-lg',
    },
    marginBottom: {
      options: ['', 'space-4-small', 'space-8-small', 'space-12-small'],
      control: { type: 'select' },
      defaultValue: '',
    },
  },
  tags: ['autodocs'],
};

const summaryText = 'Swedol caters to the needs of professional users as a multispecialist';

const Template = (args) => <Title {...args} />;

// Dynamic generation of the Default story
export const Default = Template.bind({});
Default.args = {
  summary: summaryText,
  fontName: 'title-lg',  // Set a default fontName
  marginBottom: '',  // Set a default marginBottom
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
  fontName: 'title-lg',
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
  fontName: 'title-md',
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
  fontName: 'title-sm',
};
TitleSmall.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};
