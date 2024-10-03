import { AltLabel } from './AltLabel';
import CustomDocsContainer from './CustomDocsContainer';

const generateHtmlSnippet = (args) => {
  const { fontName = 'alt-label-lg', summary, modifier = '', marginBottom = '' } = args;  // Default values
  
  // Conditionally add modifier and marginBottom if they have values
  const classes = [fontName];
  if (modifier) classes.push(modifier);
  if (marginBottom) classes.push(marginBottom);

  // Join the classes array into a string, filtering out any empty values
  return `<p class="${classes.join(' ')}">${summary}</p>`;
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
    viewport: {
      control: { type: 'select' }, 
      options: ['Desktop', 'Mobile'],
      defaultValue: 'Desktop',
    },
    fontName: {
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

const summaryText = 'NAME OF COMPANY SIGNATORY CONTACT PERSON';

const Template = (args) => <AltLabel {...args} />;

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
export const AltLabelLarge = Template.bind({});
AltLabelLarge.args = {
  summary: summaryText,
  fontName: 'alt-label-lg',  // Set a default fontName
  marginBottom: '',  // Set a default marginBottom
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
  summary: summaryText,
  fontName: 'alt-label-md',
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
  summary: summaryText,
  fontName: 'alt-label-sm',
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
