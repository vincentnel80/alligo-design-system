import React from 'react';

import ComponentSwitcherButtons from '../../shared/Layout/TemplateComponents/ComponentSwitcherButtons';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';

//import './buttons.scss';
import './buttons-new.scss';

<link rel="stylesheet" type="text/css" src="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&amp;family=Material+Symbols+Outlined:wght,FILL@300,0;300,1&amp;display=swap" src_type="url" />

const ButtonsNew = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>
        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'A button is used to trigger an action or to navigate to a different page. Buttons allow users to make choices, with a single tap.'}
            title={'Buttons'}
        />

        <ComponentSwitcherButtons/>
    </main>
</div>;

export default ButtonsNew;
