import PropTypes from 'prop-types';
import React from 'react';

import '../../../../globalStyles/foundation-fonts-weights.scss';
//import './foundation-fonts-weights.scss'; // put in correct folder ** nb nb - where should this one go?
import '../../layout.scss'; // ?? was being used in layout to fix load issue but sort out cause ... i need only the global stuff and template stuff mayibe
import '../../layout-templates.scss';  // ?? was being used in layout to fix load issue

const Page = ({ children }) => (
    <main className={'sb-main-content'}>
        {children}
    </main>
);

Page.propTypes = {
    children: PropTypes.node, // Accepts any valid React child (JSX, strings, components, etc.)
};

export default Page;
