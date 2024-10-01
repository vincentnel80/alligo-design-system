import { Display } from './Display';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { fontName = 'body-xl', summary, modifier = '', marginBottom = '' } = args;  // Default values
  return `<p class="${fontName} ${fontName}--${modifier} ${marginBottom}">${summary}</p>`;
};

export default {
  //title: 'Typography/Display',
  title: 'Foundation/Typography/Components/Display',
  component: Display,
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
    viewport: {
      control: { type: 'select' }, 
      options: ['Desktop', 'Mobile'],
      defaultValue: 'Desktop',
    },
    fontName: {
      control: { type: 'select' },
      options: ['display-sm', 'display-md', 'display-lg'],
      defaultValue: 'display-lg',
    },
    modifier: {
      control: { type: 'select' },
      options: ['', 'preamble', 'underline', 'bold', 'strikethrough'],
      defaultValue: 'preamble',
      // Conditionally disable the modifier control based on the value of fontName
      table: {
        disable: true, // initially disabled in the docs table
      },
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['', 'space-16-small', 'space-24-small', 'space-32-large'], // go over
      defaultValue: '',
    },
  },
  // Custom logic to enable or disable the modifier based on fontName
  /// there are no modifiers for this vin
    /// there are no modifiers for this vin
      /// there are no modifiers for this vin
        /// there are no modifiers for this vin
  decorators: [
    (Story, context) => {
      const { args } = context;
      const modifierControl = context.argTypes.modifier;
      modifierControl.table.disable = args.fontName !== 'body-xl';
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
  fontName: 'body-xl',  // Set a default fontName
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
  fontName: 'display-lg',
  summary: 'Clearance sale',
  marginBottom: '',
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
  fontName: 'body-xl',
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
  fontName: 'display-md',
  summary: 'Up to 30% on everything from Milwaukee',
  marginBottom: '',
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
  fontName: 'display-sm',
  summary: 'Up to 30% on everything from Milwaukee',
  marginBottom: '',
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
