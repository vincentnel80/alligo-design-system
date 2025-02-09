import React from 'react';

import FontSizesMobile from './FontSizesMobile';

// Custom documentation for the component to be imported here
// import CustomDocumentation from '../../common/components/Ui/Headings/CustomDocumentation';

export default {
    title: 'Foundation/Typography/Tokens',
    component: FontSizesMobile,
    // Custom documentation parameter - to be imported
    /* parameters: {
        docs: {
            page: CustomDocumentation,
        },
    }, */
};

{/* better name */}
export const fontSizesMobile = () => (
    <FontSizesMobile />
);
