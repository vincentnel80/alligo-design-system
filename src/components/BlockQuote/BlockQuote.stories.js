import { BlockQuote } from './BlockQuote';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { summary, name, title, marginBottom = '', theme = 'Swedol', alignment = 'left' } = args;
  
  // Return HTML snippet with dynamic values
  return `
    <div class="blockq-container">
      <div class="blockq-container-inner" style="border-left: ${theme === 'Swedol' ? '#C7D300' : '#CD1125'};">
        <div class="headline-md headline-md--blockquote">
          "${summary}"
        </div>
        <div class="bottom-text-wrapper">
          <span class="label-sm">${name}</span>
          <span class="body-sm">${title}</span>
        </div>
      </div>
    </div>`;
};

export default {
  title: 'Components/Block Quote',
  component: BlockQuote,
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
      description: 'The version size for the component',
    },
    summary: {
      control: 'text',
      description: 'The main quote text to display',
      defaultValue: 'It has to start somewhere, it has to start sometime. What better place than here, what better time than now?',
    },
    name: {
      control: 'text',
      description: 'The name to display',
      defaultValue: 'NAME SURNAME',
    },
    title: {
      control: 'text',
      description: 'The title to display',
      defaultValue: 'Title',
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['None', 'space-16-small', 'space-24-small', 'space-32-large'],
      defaultValue: '',
    },
    alignment: {
      control: { type: 'select' }, 
      options: ['left', 'center', 'right'],
      defaultValue: 'left',
      description: 'alignment for the component',
    },
    theme: {
      control: { type: 'select' },
      options: ['Swedol', 'Tools'],
      defaultValue: 'Swedol',
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <BlockQuote {...args} />;

export const BlockQuoteDesktop = Template.bind({});
BlockQuoteDesktop.args = {
  version: 'Desktop',  // Default version
  summary: 'It has to start somewhere, it has to start sometime. What better place than here, what better time than now?',
  name: 'Name Surname',
  title: 'Title',
  theme: 'Swedol',
  marginBottom: 'None',
  alignment: 'left',
};

BlockQuoteDesktop.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

// New Mobile Component Example
export const BlockQuoteMobile = Template.bind({});
BlockQuoteMobile.args = {
  summary: 'It has to start somewhere, it has to start sometime. What better place than here, what better time than now?',
  name: 'NAME SURNAME',
  title: 'Title',
  theme: 'Swedol',
  marginBottom: 'None',
  version: 'Mobile',  // Set to Mobile for this variant
};

BlockQuoteMobile.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};
