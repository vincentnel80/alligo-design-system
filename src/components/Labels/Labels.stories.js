import { Label } from './Label';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { fontName = 'label-lg', summary, modifier = '', marginBottom = '' } = args;  // Default values
  return `<p class="${fontName} ${fontName}--${modifier} ${marginBottom}">${summary}</p>`;
};

export default {
  // title: 'Typography/Label',
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
    viewport: {
      control: { type: 'select' }, 
      options: ['Desktop', 'Mobile'],
      defaultValue: 'Desktop',
    },
    fontName: {
      control: { type: 'select' },
      options: ['label-sm', 'label-md', 'label-lg'],
      defaultValue: 'label-lg',
    },
    modifier: {
      control: { type: 'select' },
      options: ['', 'label-sm--badge'],
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
      modifierControl.table.disable = args.fontName !== 'label-lg';
      return <Story {...args} />;
    },
  ],
  tags: ['autodocs'],
};

const summaryText = 'Surname';

const Template = (args) => <Label {...args} />;

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
export const LabelLarge = Template.bind({});
LabelLarge.args = {
  summary: summaryText,
  fontName: 'label-lg',  // Set a default fontName
  marginBottom: '',  // Set a default marginBottom
};

LabelLarge.parameters = {
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

export const LabelMedium = Template.bind({});
LabelMedium.args = {
  //...Default.args, // will change all of this
  ...LabelLarge.args, // will change all of this
  fontName: 'label-md',
};
LabelMedium.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const LabelSmall = Template.bind({});
LabelSmall.args = {
  ...LabelLarge.args,
  fontName: 'label-sm',
};
LabelSmall.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};


// body LG modifiers
