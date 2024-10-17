import React from 'react';

import Buttons from './Buttons';

export default {
    title: 'Components/Buttons',
    component: Buttons,
    parameters: {
        docs: {
            page: null,
        },
        previewTabs: {
            'storybook/docs/panel': {
                hidden: false,
            },
        },
    },
};

export const buttons = () => (
    <Buttons />
);