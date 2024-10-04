import { BlockQuote } from './BlockQuote';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { summary, name, title, marginBottom = '', theme = 'Swedol' } = args;
  
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
  title: 'Foundation/Typography/Components/BlockQuote',
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
    viewport: {
      control: { type: 'select' }, 
      options: ['Desktop', 'Mobile'],
      defaultValue: 'Desktop',
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['', 'space-16-small', 'space-24-small', 'space-32-large'],
      defaultValue: '',
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

export const BlockQuoteSwedol = Template.bind({});
BlockQuoteSwedol.args = {
  summary: 'It has to start somewhere, it has to start sometime. What better place than here, what better time than now?',
  name: 'NAME SURNAME',
  title: 'Title',
  theme: 'Swedol',
  marginBottom: '',
};

BlockQuoteSwedol.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const BlockQuoteTools = Template.bind({});
BlockQuoteTools.args = {
  summary: 'It has to start somewhere, it has to start sometime. What better place than here, what better time than now?',
  name: 'NAME SURNAME',
  title: 'Title',
  theme: 'Tools',
  marginBottom: '',
};

BlockQuoteTools.parameters = {
  docs: {
    disable: false,
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};
