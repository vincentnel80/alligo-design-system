import { AltLabel } from './AltLabel';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { version = "Desktop", size = 'alt-label-lg', summary, modifier = '', marginBottom = '' } = args;  // Default values
  return `<p class="${size} ${size}--${modifier} ${marginBottom}">${summary}</p>`;
};

export default {
  //title: 'Typography/Alt Label',
  title: 'Foundation/Typography/Components/Alt Label',
  component: AltLabel,
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
      options: ['alt-label-sm', 'alt-label-md', 'alt-label-lg'],
      defaultValue: 'alt-label-lg',
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
      options: ['None', 'space-16-small', 'space-24-small', 'space-32-large'], // go over
      defaultValue: 'None',
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
      modifierControl.table.disable = args.size !== 'body-xl';
      return <Story {...args} />;
    },
  ],
  tags: ['autodocs'],
};

const summaryText = 'NAME OF COMPANY SIGNATORY CONTACT PERSON';

const Template = (args) => <AltLabel {...args} />;


// Dynamic generation of the Default story - now replaced with body x large
export const AltLabelLarge = Template.bind({});
AltLabelLarge.args = {
  version: 'Desktop',
  size: 'alt-label-lg',  // Set a default fontName
  summary: summaryText,
  marginBottom: 'None',  // Set a default marginBottom
};

AltLabelLarge.parameters = {
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

export const AltLabelMedium = Template.bind({});
AltLabelMedium.args = {
  //...Default.args, // will change all of this
  ...AltLabelMedium.args, // will change all of this
  size: 'alt-label-md',
  summary: summaryText,
};
AltLabelMedium.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const AltLabelSmall = Template.bind({});
AltLabelSmall.args = {
  ...AltLabelSmall.args,
  size: 'alt-label-sm',
  summary: summaryText,
};
AltLabelSmall.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};


// body LG modifiers
