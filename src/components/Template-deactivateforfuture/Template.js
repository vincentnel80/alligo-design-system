import React from 'react';

import ComponentSwitcherTemplate from '../../shared/Layout/TemplateComponents/ComponentSwitcherTemplate';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../../shared/Layout/TemplateComponents/SecondaryIntroComponent';

const Template = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>
        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'Badges and tags are visually similar, but tags are interactive and badges are not.'}
            title={'Badge'}
        />

        <SecondaryIntroComponent
            secondaryContent={'Use a badge to indicate status, item count, items requesting attention, or featured content. \\nBadges should not rely on color alone to convey meaning (see the section on Color below), as color is not a universal experience for everyone.\\nCombining multiple elements - text, emphasis, and icons - in each badge can optimize visual understanding.All badges come in version for Desktop & Mobile though Badge Dot is available in Large, Medium and Small. \\nBadge comes in 5 Variants:'}
            secondaryTitle={'Usage'}
        />

        <ComponentSwitcherTemplate/>

    </main>
</div>;

export default Template;
