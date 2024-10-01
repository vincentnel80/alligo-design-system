import React from 'react';

import FontFamily from './FontFamily';

// Custom documentation for the component to be imported here
// import CustomDocumentation from '../../common/components/Ui/Headings/CustomDocumentation';

export default {
    title: 'Foundation/Typography/Tokens',
    component: FontFamily,
    // Custom documentation parameter - to be imported
    /* parameters: {
        docs: {
            page: CustomDocumentation,
        },
    }, */
};

export const fontFamily = () => (
    <FontFamily />
);
