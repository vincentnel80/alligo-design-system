import React from 'react';

import FontWeights from './FontWeights';

// Custom documentation for the component to be imported here
// import CustomDocumentation from '../../common/components/Ui/Headings/CustomDocumentation';

export default {
    //title: 'Foundation/Typography',
    title: 'Foundation/Typography/Tokens',
    component: FontWeights,
    // Custom documentation parameter - to be imported
    /* parameters: {
        docs: {
            page: CustomDocumentation,
        },
    }, */
};

{/* better name */}
export const fontWeights = () => (
    <FontWeights />
);
