import React from 'react';

import DesktopParagraphSpacing from './DesktopParagraphSpacing';

// Custom documentation for the component to be imported here
// import CustomDocumentation from '../../common/components/Ui/Headings/CustomDocumentation';

export default {
    title: 'Foundation/Typography/Tokens',
    component: DesktopParagraphSpacing,
    // Custom documentation parameter - to be imported
    /* parameters: {
        docs: {
            page: CustomDocumentation,
        },
    }, */
};

{/* better name */}
export const desktopParagraphSpacing = () => (
    <DesktopParagraphSpacing />
);
