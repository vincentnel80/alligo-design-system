import PropTypes from 'prop-types';
import React from 'react';

//import '../../../../../globalStyles/foundation-fonts-weights.scss';
import './foundation-fonts-weights.scss'; // put in correct folder
import '../../layout.scss'; // ?? was being used in layout to fix load issue but sort out cause ... i need only the global stuff and template stuff mayibe
import '../../layout-templates.scss';  // ?? was being used in layout to fix load issue

// should at least be in header
<link rel="stylesheet" type="text/css" src="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&amp;family=Material+Symbols+Outlined:wght,FILL@300,0;300,1&amp;display=swap" src_type="url" />

/*
<div className={'sb-page'}> 
<main className={'sb-main-content'}>
{children}
    </main>
    </div>
*/

const Page = ({ children }) => (
    



            <main className={'sb-main-content'}>
            {children}
                </main>

  
);

Page.propTypes = {
    children: PropTypes.node, // Accepts any valid React child (JSX, strings, components, etc.)
};

export default Page;

// Launch fix the URLS stuffys
