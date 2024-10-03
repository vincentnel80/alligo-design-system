import { Body } from './Body';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { fontName = 'body-xl', summary, modifier = '', marginBottom = '' } = args;  // Default values
  return `<p class="${fontName} ${fontName}--${modifier} ${marginBottom}">${summary}</p>`;
};

export default {
  //title: 'Typography/Body',
  title: 'Foundation/Typography/Components/Body',
  component: Body,
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
      options: ['body-sm', 'body-md', 'body-lg', 'body-xl'],
      defaultValue: 'body-xl',
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

const summaryText = 'Swedol caters to the needs of professional users as a multispecialist. We provide high quality goods and services in a straightforward and professional manner.';

const Template = (args) => <Body {...args} />;

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
export const BodyXLarge = Template.bind({});
BodyXLarge.args = {
  summary: summaryText,
  fontName: 'body-xl',  // Set a default fontName
  marginBottom: '',  // Set a default marginBottom
};

BodyXLarge.parameters = {
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

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  //...Default.args, // will change all of this
  ...BodyXLarge.args, // will change all of this
  fontName: 'body-lg',
};
BodyLarge.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const BodyMedium = Template.bind({});
BodyMedium.args = {
  ...BodyXLarge.args,
  fontName: 'body-md',
};
BodyMedium.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  ...BodyXLarge.args,
  fontName: 'body-sm',
};
BodySmall.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    code: null,  // This will hide the "Show Code" button
  },
};

export const BodyXLargeModifierPreamble = Template.bind({});
BodyXLargeModifierPreamble.args = {
  ...BodyXLarge.args,
  fontName: 'body-xl body-xl--preamble',
};
BodyXLargeModifierPreamble.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    code: null,  // This will hide the "Show Code" button
  },
};

export const BodyXLargeModifierUnderline = Template.bind({});
BodyXLargeModifierUnderline.args = {
  ...BodyXLarge.args,
  fontName: 'body-xl body-xl--underline',
};
BodyXLargeModifierUnderline.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    code: null,  // This will hide the "Show Code" button
  },
};

export const BodyXLargeModifierBold = Template.bind({});
BodyXLargeModifierBold.args = {
  ...BodyXLarge.args,
  fontName: 'body-xl body-xl--bold',
};
BodyXLargeModifierBold.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    code: null,  // This will hide the "Show Code" button
  },
};

export const BodyLargeModifierUnderline = Template.bind({});
BodyLargeModifierUnderline.args = {
  ...BodyXLarge.args,
  fontName: 'body-lg body-lg--underline',
};
BodyLargeModifierUnderline.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    code: null,  // This will hide the "Show Code" button
  },
};

export const BodyLargeModifierBold = Template.bind({});
BodyLargeModifierBold.args = {
  ...BodyXLarge.args,
  fontName: 'body-lg body-lg--bold',
};
BodyLargeModifierBold.parameters = {
  docs: {
    disable: false,  // This will hide this story from the Docs page and ovverrides the below - it is to hide stories in docs page but - still show on actual stories page
    code: null,  // This will hide the "Show Code" button
  },
};

// body LG modifiers
