import { Bullet } from './Bullet';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { variant = '', levels = 3, marginBottom = 'None', listLevel1, listLevel2, listLevel3 } = args;

  // Determine if the variant is for a numbered list
  const isNumberVariant = variant.includes('number');

  // Generate list item content based on the levels
  const generateListItems = (level, text) => `
    <li>
      <div class="list-wrapper">
        ${!isNumberVariant && variant.includes('check') ? `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959"/>
          </svg>
        ` : ''}
        ${!isNumberVariant && variant.includes('dot') ? `
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="black"/>
          </svg>
        ` : ''}
        <span class="body-lg">${text}</span>
      </div>
      ${level < levels ? `<${isNumberVariant ? 'ol' : 'ul'} class="list-level-${level + 1}">
        ${generateListItems(level + 1, args[`listLevel${level + 1}`])}
      </${isNumberVariant ? 'ol' : 'ul'}>` : ''}
    </li>
  `;

  // Conditionally add the marginBottom class if it's not 'None'
  const marginBottomClass = marginBottom !== 'None' ? ` ${marginBottom}` : '';

  // Return a string of HTML dynamically based on variant, levels, and marginBottom
  return `
    <div class="outercontainer bullet-list ${variant}${marginBottomClass}">
      <${isNumberVariant ? 'ol' : 'ul'} class="list-level-1">
        ${generateListItems(1, listLevel1)}
      </${isNumberVariant ? 'ol' : 'ul'}>
    </div>
  `;
};




export default {
  title: 'Components/Bullet Lists',
  component: Bullet,
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
      defaultValue: 'Desktop',  // Set Desktop as the default viewport
      description: 'Select the viewport type to switch between desktop and mobile layouts.',
    },
    variant: {
      control: { type: 'select' },
      options: ['check-desktop-large', 'check-desktop-medium', 'dot-desktop-large', 'dot-desktop-medium', 'number-desktop-large', 'number-desktop-medium'],  // Default to Desktop variants initially
      defaultValue: 'dot-desktop-large',  // Set default variant for Desktop
      description: 'The variant styles that will be applied to the bullet list.',
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['None', 'space-16-small', 'space-24-small', 'space-32-large'],
      defaultValue: 'None',
      description: 'Used to create bottom margin on the bullet list, in various sizes.',
    },
    levels: {
      control: { type: 'select' },  
      options: [1, 2, 3],  
      defaultValue: 3,
      description: 'The numbers of nested levels within the list.',
    },
    listLevel1: {
      control: 'text',
      defaultValue: 'List Item Level 1',
      description: 'Text of the first bullet level.',
    },
    listLevel2: {
      control: 'text',
      defaultValue: 'List Item Level 2',
      description: 'Text of the second bullet level.',
    },
    listLevel3: {
      control: 'text',
      defaultValue: 'List Item Level 3',
      description: 'Text of the third bullet level.',
    },
  },
  decorators: [
    (Story, context) => {
      const { viewport } = context.args;

      // Define the variant options based on the selected viewport
      const variantOptions = {
        Desktop: [
          'dot-desktop-large',
          'dot-desktop-medium',
          'check-desktop-large',
          'check-desktop-medium',
          'number-desktop-large',
          'number-desktop-medium',
        ],
        Mobile: [
          'dot-mobile-large',
          'dot-mobile-medium',
          'check-mobile-large',
          'check-mobile-medium',
          'number-mobile-large',
          'number-mobile-medium',
        ],
      };

      // Dynamically update the variant control options based on viewport
      context.argTypes.variant.options = variantOptions[viewport];

      // Ensure the correct default variant is selected based on the viewport
      if (!variantOptions[viewport].includes(context.args.variant)) {
        context.args.variant = variantOptions[viewport][0];  // Set the first variant of the selected viewport as default
      }

      return <Story {...context.args} />;
    },
  ],
  tags: ['autodocs'],
};

const Template = (args) => <Bullet {...args} />;

export const DesktopLargeCheck = Template.bind({});
DesktopLargeCheck.args = {
  viewport: 'Desktop',
  variant: 'dot-desktop-large',
  marginBottom: 'None',  // Set a default marginBottom
  levels: 3,
  listLevel1: 'List Item Level 1',
  listLevel2: 'List Item Level 2',
  listLevel3: 'List Item Level 3',
};

DesktopLargeCheck.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};


export const DesktopMediumCheck = Template.bind({});
DesktopMediumCheck.args = {
  viewport: 'Desktop',
  variant: 'check-desktop-medium',
  marginBottom: 'None',  // Set a default marginBottom
  levels: 3,
  listLevel1: 'List Item Level 1',
  listLevel2: 'List Item Level 2',
  listLevel3: 'List Item Level 3',
};

DesktopMediumCheck.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const DesktopLargeDot = Template.bind({});
DesktopLargeDot.args = {
  viewport: 'Desktop',
  variant: 'dot-desktop-large',
  marginBottom: 'None',  // Set a default marginBottom
  levels: 3,
  listLevel1: 'List Item Level 1',
  listLevel2: 'List Item Level 2',
  listLevel3: 'List Item Level 3',
};

DesktopLargeDot.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};
// it's up to you process the information and see the items go into the control. We will see you there in the future and not get into
// the habit to be controlled intot he vertical shift
// we will not be there
// we will not do that.
// Coljander coljander loop deur die bos my ma en pa eet lekker kos, die kinders verstuk aan 
// ** ** ** ** ** ** ** ** ** ** ** **


export const DesktopMediumDot = Template.bind({});
DesktopMediumDot.args = {
  viewport: 'Desktop',
  variant: 'dot-desktop-medium',
  marginBottom: 'None',  // Set a default marginBottom
  levels: 3,
  listLevel1: 'List Item Level 1',
  listLevel2: 'List Item Level 2',
  listLevel3: 'List Item Level 3',
};

DesktopMediumDot.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const DesktopLargeNumber = Template.bind({});
DesktopLargeNumber.args = {
  viewport: 'Desktop',
  variant: 'number-desktop-large',
  marginBottom: 'None',  // Set a default marginBottom
  levels: 3,
  listLevel1: 'List Item Level 1',
  listLevel2: 'List Item Level 2',
  listLevel3: 'List Item Level 3',
};

DesktopLargeNumber.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const DesktopMediumNumber = Template.bind({});
DesktopMediumNumber.args = {
  viewport: 'Desktop',
  variant: 'number-desktop-medium',
  marginBottom: 'None',  // Set a default marginBottom
  levels: 3,
  listLevel1: 'List Item Level 1',
  listLevel2: 'List Item Level 2',
  listLevel3: 'List Item Level 3',
};

DesktopMediumNumber.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

// Mobile variants

export const MobileLargeDot = Template.bind({});
MobileLargeDot.args = {
  ...DesktopLargeCheck.args,
  viewport: 'Mobile',
  variant: 'dot-mobile-large',
};
MobileLargeDot.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const MobileMediumDot = Template.bind({});
MobileMediumDot.args = {
  ...DesktopLargeCheck.args,
  viewport: 'Mobile',
  variant: 'dot-mobile-medium',
};
MobileMediumDot.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const MobileLargeCheck = Template.bind({});
MobileLargeCheck.args = {
  ...DesktopLargeCheck.args,
  viewport: 'Mobile',
  variant: 'check-mobile-large',
};
MobileLargeCheck.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const MobileMediumCheck = Template.bind({});
MobileMediumCheck.args = {
  ...DesktopLargeCheck.args,
  viewport: 'Mobile',
  variant: 'check-mobile-medium',
};
MobileMediumCheck.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};


export const MobileLargeNumber = Template.bind({});
MobileLargeNumber.args = {
  ...DesktopLargeCheck.args,
  viewport: 'Mobile',
  variant: 'number-mobile-large',
};
MobileLargeNumber.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const MobileMediumNumber = Template.bind({});
MobileMediumNumber.args = {
  ...DesktopLargeCheck.args,
  viewport: 'Mobile',
  variant: 'number-mobile-medium',
};
MobileMediumNumber.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};