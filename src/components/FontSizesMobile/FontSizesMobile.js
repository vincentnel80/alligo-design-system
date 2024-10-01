import PropTypes from 'prop-types';
import React from 'react';
import './sb-font-sizes.scss';

import GridContainerComponent from '../../shared/Layout/TemplateComponents/GridContainerComponent';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';

const FontSizesMobile = ({
    textSnippet, fontName, fontClassName, fontDescription, fontInformation, tokenName,
}) => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'pixel value displayed for desktopn - same token used for mobile and desktop'}
            title={'Mobile font sizes'}
        />

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>

{/* not universal, as it does not relate to fonts ? */}
{/* 
font-size-body-sm
font-size-body-md
font-size-body-lg
font-size-body-xl
font-size-alt-label-sm
font-size-alt-label-md
font-size-alt-label-lg
font-size-label-sm
font-size-label-md
font-size-label-lg
font-size-title-sm
font-size-title-md
font-size-title-lg
font-size-headline-sm
font-size-headline-md
font-size-headline-lg
font-size-headline-xl
font-size-display-sm
font-size-display-md
font-size-display-lg

*/}
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'Font-size: 14px;'}
                fontInformation={''}
                fontName={'Body Small'}
                textSnippet={'Quick brown fox'}
                tokenName={'font-size-body-sm'}
            />

<GridContainerComponent
fontClassName={'body-md'}
fontDescription={'Font-size: 16px;'}
fontInformation={''}
fontName={'Body Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-body-md'}
/>

<GridContainerComponent
fontClassName={'body-lg'}
fontDescription={'Font-size: 18px;'}
fontInformation={''}
fontName={'Body Large'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-body-lg'}
/>

<GridContainerComponent
fontClassName={'body-xl'}
fontDescription={'Font-size: 20px;'}
fontInformation={''}
fontName={'Body XLarge'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-body-xl'}
/>

<GridContainerComponent
fontClassName={'alt-label-sm'}
fontDescription={'Font-size: 12px;'}
fontInformation={''}
fontName={'Alt-Label Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-alt-label-sm'}
/>

<GridContainerComponent
fontClassName={'alt-label-md'}
fontDescription={'Font-size: 14px;'}
fontInformation={''}
fontName={'Alt-Label Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-alt-label-md'}
/>

<GridContainerComponent
fontClassName={'alt-label-lg'}
fontDescription={'Font-size: 16px;'}
fontInformation={''}
fontName={'Alt-Label Large'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-alt-label-lg'}
/>

<GridContainerComponent
fontClassName={'label-sm'}
fontDescription={'Font-size: 12px;'}
fontInformation={''}
fontName={'Label Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-label-sm'}
/>

<GridContainerComponent
fontClassName={'label-md'}
fontDescription={'Font-size: 14px;'}
fontInformation={'Label Medium'}
fontName={''}
textSnippet={'Quick brown fox'}
tokenName={'font-size-label-md'}
/>

<GridContainerComponent
fontClassName={'label-lg'}
fontDescription={'Font-size: 16px;'}
fontInformation={''}
fontName={'Label large'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-label-lg'}
/>

<GridContainerComponent
fontClassName={'title-sm'}
fontDescription={'Font-size: 16px;'}
fontInformation={''}
fontName={'Title Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-title-sm'}
/>

<GridContainerComponent
fontClassName={'title-md'}
fontDescription={'Font-size: 18px;'}
fontInformation={''}
fontName={'Title Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-title-md'}
/>

<GridContainerComponent
fontClassName={'title-lg'}
fontDescription={'Font-size: 20px;'}
fontInformation={''}
fontName={'Title Large'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-title-lg'}
/>

<GridContainerComponent
fontClassName={'headline-sm'}
fontDescription={'Font-size: 22px;'}
fontInformation={''}
fontName={'Headline Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-headline-sm'}
/>

<GridContainerComponent
fontClassName={'headline-md'}
fontDescription={'Font-size: 26px;'}
fontInformation={''}
fontName={'Headline Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-headline-md'}
/>

<GridContainerComponent
fontClassName={'headline-lg'}
fontDescription={'Font-size: 28px;'}
fontInformation={''}
fontName={'Headline Large'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-headline-lg'}
/>

<GridContainerComponent
fontClassName={'headline-xl'}
fontDescription={'Font-size: 30px;'}
fontInformation={''}
fontName={'Headline X-large'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-headline-xl'}
/>

<GridContainerComponent
fontClassName={'display-sm'}
fontDescription={'Font-size: 22px;'}
fontInformation={''}
fontName={'Display Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-display-sm'}
/>

<GridContainerComponent
fontClassName={'display-md'}
fontDescription={'Font-size: 28px;'}
fontInformation={''}
fontName={'Display Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-display-md'}
/>

<GridContainerComponent
fontClassName={'display-lg'}
fontDescription={'Font-size: 36px;'}
fontInformation={''}
fontName={'Display large'}
textSnippet={'Quick brown fox'}
tokenName={'font-size-display-lg'}
/>

        </div>
    </main>
</div>;

FontSizesMobile.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
};

export default FontSizesMobile;
