import '../src/index.scss';
import * as DocBlock from "@storybook/blocks";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.ArgsTable story={DocBlock.STORY_RENDERED} />
          <DocBlock.Stories />
        </>
      ),
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        // Custom viewports can be added here if needed
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
