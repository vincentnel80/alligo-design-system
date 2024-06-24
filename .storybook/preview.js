import '../src/index.scss';
import * as DocBlock from "@storybook/blocks"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: {
      page: () => <>
      <DocBlock.Title />
      </>
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
