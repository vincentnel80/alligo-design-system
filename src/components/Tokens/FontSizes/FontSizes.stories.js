import React from 'react';

import FontSizes from './FontSizes';

// Custom documentation for the component to be imported here
// import CustomDocumentation from '../../common/components/Ui/Headings/CustomDocumentation';

export default {
    title: 'Foundation/Typography/Tokens',
    component: FontSizes,
    // Custom documentation parameter - to be imported
    /* parameters: {
        docs: {
            page: CustomDocumentation,
        },
    }, */
};

{/* better name */}
export const fontSizes = () => (
    <FontSizes />
);
