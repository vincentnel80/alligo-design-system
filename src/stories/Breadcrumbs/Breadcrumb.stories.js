import { Breadcrumb } from '../../StorybookComponents/Breadcrumbs/Breadcrumb';
import CustomDocsContainer from './CustomDocsContainer';
import BreadcrumbDocs from './BreadcrumbDocs.mdx';

// HTML Snippet for the Breadcrumb component
const htmlSnippet = `
<nav aria-label="Breadcrumb">
  <div class="breadcrumbs">
    <ul class="items">
      <li class="item">
        <a href="#" title="Breadcrumb 1">Breadcrumb 1</a>
      </li>
      <li class="item">
        <a href="#" title="Breadcrumb 2">Breadcrumb 2</a>
      </li>
      <li class="item">
        <a href="#" title="Breadcrumb 3">Breadcrumb 3</a>
      </li>
      <li class="item" aria-current="page">
        End crumb
      </li>
    </ul>
  </div>
</nav>
`;

export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      container: CustomDocsContainer,
      page: BreadcrumbDocs,
      source: {
        code: htmlSnippet,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
      defaultValue: [
        { label: 'Home', link: '#' },
        { label: 'Category', link: '#' },
        { label: 'Subcategory', link: '#' },
        { label: 'Current Page', link: '#' },
      ],
    },
    backgroundColor: { control: 'color' },
    //textColor: { control: 'color' },
    //fontSize: { control: 'text' },
    //separator: { control: 'text' },
  },
};

/**
 * The Base Breadcrumb story demonstrates the primary implementation of the Breadcrumb component, showcasing its default appearance and functionality. This example features a simple breadcrumb trail that helps users navigate from the homepage to a specific page within the website's hierarchy. The Breadcrumb component is styled to display links for "Home," "Category," "Subcategory," and "Current Page," illustrating how breadcrumbs can enhance navigation and improve user experience by providing a clear and intuitive path through the site's structure.
 */
export const Base = {
  args: {
    items: [
      { label: 'Home', link: '#' },
      { label: 'Category', link: '#' },
      { label: 'Subcategory', link: '#' },
      { label: 'Current Page', link: '#' },
    ],
    backgroundColor: 'transparent',
   // textColor: '#000',
    //fontSize: '14px',
   // separator: '/',
  },
  parameters: {
    docs: {
      source: {
        code: htmlSnippet,
      },
    },
  },
};

/**
 * The OnHover Breadcrumb story illustrates the Breadcrumb component's behavior when a user hovers over the breadcrumb links. This example highlights the visual feedback provided to users as they navigate through the breadcrumb trail. When hovering over each link, the text color changes and an underline appears, enhancing the interactive experience and making it clear which link is currently being interacted with. This functionality improves usability by providing immediate visual cues, helping users understand which breadcrumb they are about to select.
 */
export const onHover = {
  args: {
    ...Base.args,
    items: [
      { label: 'Home', link: '#' },
      { label: 'Category', link: '#' },
      { label: 'Subcategory', link: '#', className: 'hovered' },
      { label: 'Last Page', link: '#' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: htmlSnippet,
        state: 'closed', // This will hide the "Show code" button and the code panel
      },
    },
  },
};

/**
 * The Clicked Breadcrumb story showcases the Breadcrumb component's appearance and functionality when a breadcrumb link is clicked. This example simulates user interaction by displaying a breadcrumb trail where one of the items represents the active or clicked state. 
 * The active breadcrumb is styled differently to indicate that it is the current page, often with a distinct color and font-weight. This visual distinction helps users easily identify their current location within the website's hierarchy, enhancing the overall navigation experience.
 */
export const Clicked = {
  args: {
    ...Base.args,
    items: [
      { label: 'Home', link: '#' },
      { label: 'Category', link: '#' },
      { label: 'Subcategory', link: '#' },
      { label: 'Clicked Page', link: '#', className: 'clicked' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: htmlSnippet,
        state: 'closed', // This will hide the "Show code" button and the code panel
      },
    },
  },
};

