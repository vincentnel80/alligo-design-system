import React from 'react';

import LetterSpacing from './LetterSpacing';

// Custom documentation for the component to be imported here
// import CustomDocumentation from '../../common/components/Ui/Headings/CustomDocumentation';

export default {
    title: 'Foundation/Typography/Tokens',
    component: LetterSpacing,
    // Custom documentation parameter - to be imported
    /* parameters: {
        docs: {
            page: CustomDocumentation,
        },
    }, */
};

{/* better name */}
export const letterSpacing = () => (
    <LetterSpacing />
);
