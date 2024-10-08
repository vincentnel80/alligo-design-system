import { Bullet } from './Bullet';
import CustomDocsContainer from './CustomDocsContainer';

// Dynamic HTML snippet generator function
const generateHtmlSnippet = (args) => {
  const { variant = '' } = args;
  return `<div class="outercontainer">
  <ul class="list-level-1">
    <li>
      <div class="list-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959"/>
        </svg>
        <span class="body-lg">List Item Level 1</span>
      </div>
      <ul class="list-level-2">
        <li>
          <div class="list-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959"/>
            </svg>
            <span class="body-lg">List Item Level 2</span>
          </div>
          <ul class="list-level-3">
            <li>
              <div class="list-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959"/>
                </svg>
                <span class="body-lg">List Item Level 3</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>`;
};

export default {
  title: 'Foundation/Typography/Components/Bullet Lists',
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
      defaultValue: 'Desktop',
    },
    variant: {
      control: { type: 'select' },
      options: ['Check: Desktop Large', 'Dot: Desktop Large', 'Number: Desktop Large'],  // Placeholder, will be dynamically populated
      defaultValue: 'Check: Desktop Large',
    },
    levels: {
      control: { type: 'select' },  
      options: [1, 2, 3],  
      defaultValue: 3,
    },
    listLevel1: {
      control: 'text',
      defaultValue: 'List Item Level 1',
    },
    listLevel2: {
      control: 'text',
      defaultValue: 'List Item Level 2',
    },
    listLevel3: {
      control: 'text',
      defaultValue: 'List Item Level 3',
    },
  },
  decorators: [
    (Story, context) => {
      const { viewport } = context.args;

      // Define the variant options based on the selected viewport
      const variantOptions = {
        Desktop: [
          'check-desktop-large',
          'check-desktop-medium',
          'dot-desktop-large',
          'dot-desktop-medium',
          'number-desktop-large',
          'number-desktop-medium',
        ],
        Mobile: [
          'check-mobile-large',
          'check-mobile-medium',
          'dot-mobile-large',
          'dot-mobile-medium',
          'number-mobile-large',
          'number-mobile-medium',
        ],
      };

      // Dynamically update the variant control options based on viewport
      context.argTypes.variant.options = variantOptions[viewport];
      return <Story {...context.args} />;
    },
  ],
  tags: ['autodocs'],
};

const Template = (args) => <Bullet {...args} />;

export const Default = Template.bind({});
Default.args = {
  viewport: 'Desktop',
  variant: 'check-desktop-large',
  levels: 3,
  listLevel1: 'List Item Level 1',
  listLevel2: 'List Item Level 2',
  listLevel3: 'List Item Level 3',
};

Default.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

// Other variants like HeadlineLarge, HeadlineMedium, etc.
export const BulletListDesktopLarge = Template.bind({});
BulletListDesktopLarge.args = {
  ...Default.args,
};
BulletListDesktopLarge.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

export const BulletListMobileLarge = Template.bind({});
BulletListMobileLarge.args = {
  ...Default.args,
};
BulletListMobileLarge.parameters = {
  docs: {
    source: {
      transformSource: (src, storyContext) => generateHtmlSnippet(storyContext.args),
    },
  },
};

// Additional variants for Desktop Medium, Mobile Medium, etc.
