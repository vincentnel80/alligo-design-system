import React from 'react';

import Page from '../../shared/StorybookLayout/TemplateComponents/Page/Page';
import ComponentSwitcherButtons from '../../shared/StorybookLayout/TemplateComponents/Switcher/ComponentSwitcherButtons';
import MainIntroComponent from '../../shared/StorybookLayout/TemplateComponents/Content/MainIntroComponent';

//import './buttons.scss';
import './buttons-new.scss';



const ButtonsNew = () =>  <Page>
        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'A button is used to trigger an action or to navigate to a different page. Buttons allow users to make choices, with a single tap.'}
            title={'Buttons'}
        />

        <ComponentSwitcherButtons/>
 </Page>;

export default ButtonsNew;
