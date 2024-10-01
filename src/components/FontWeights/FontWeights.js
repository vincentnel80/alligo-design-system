import PropTypes from 'prop-types';
import React from 'react';
import './sb-font-weights.scss';

import GridContainerComponent from '../../shared/Layout/TemplateComponents/GridContainerComponent';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';

const FontWeights = ({
    textSnippet, fontName, fontClassName, fontDescription, fontInformation, tokenName,
}) => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'The following page describes all the font weights used througout the font typefaces in the Alligo system. The weight tokens are applicable For use on Mobile and Desktop views'}
            title={'Font Weights'}
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
fontDescription={'Font-weight: 400;'}
fontInformation={''}
fontName={'Body Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-body-sm'}
/>

<GridContainerComponent
fontClassName={'body-md'}
fontDescription={'Font-weight: 400;'}
fontInformation={''}
fontName={'Body Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-body-md'}
/>

<GridContainerComponent
fontClassName={'body-lg'}
fontDescription={'Font-weight: 400;'}
fontInformation={''}
fontName={'Body Large'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-body-lg'}
/>

<GridContainerComponent
fontClassName={'body-xl'}
fontDescription={'Font-weight: 400;'}
fontInformation={''}
fontName={'Body XLarge'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-body-xl'}
/>

<GridContainerComponent
fontClassName={'alt-label-sm'}
fontDescription={'Font-weight: 500;'}
fontInformation={''}
fontName={'Alt-Label Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-alt-label-sm'}
/>

<GridContainerComponent
fontClassName={'alt-label-md'}
fontDescription={'Font-weight: 500;'}
fontInformation={''}
fontName={'Alt-Label Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-alt-label-md'}
/>

<GridContainerComponent
fontClassName={'alt-label-lg'}
fontDescription={'Font-weight: 500;'}
fontInformation={''}
fontName={'Alt-Label Large'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-alt-label-lg'}
/>

<GridContainerComponent
fontClassName={'label-sm'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Label Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-label-sm'}
/>

<GridContainerComponent
fontClassName={'label-md'}
fontDescription={'Font-weight: 700;'}
fontInformation={'Label Medium'}
fontName={''}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-label-md'}
/>

<GridContainerComponent
fontClassName={'label-lg'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Label large'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-label-lg'}
/>

<GridContainerComponent
fontClassName={'title-sm'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Title Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-title-sm'}
/>

<GridContainerComponent
fontClassName={'title-md'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Title Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-title-md'}
/>

<GridContainerComponent
fontClassName={'title-lg'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Title Large'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-title-lg'}
/>

<GridContainerComponent
fontClassName={'headline-sm'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Headline Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-headline-sm'}
/>

<GridContainerComponent
fontClassName={'headline-md'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Headline Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-headline-md'}
/>

<GridContainerComponent
fontClassName={'headline-lg'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Headline Large'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-headline-lg'}
/>

<GridContainerComponent
fontClassName={'headline-xl'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Headline X-large'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-headline-xl'}
/>

<GridContainerComponent
fontClassName={'display-sm'}
fontDescription={'Font-weight: 26px;'}
fontInformation={''}
fontName={'Display Small'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-display-sm'}
/>

<GridContainerComponent
fontClassName={'display-md'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Display Medium'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-display-md'}
/>

<GridContainerComponent
fontClassName={'display-lg'}
fontDescription={'Font-weight: 700;'}
fontInformation={''}
fontName={'Display large'}
textSnippet={'Quick brown fox'}
tokenName={'font-weight-display-lg'}
/>

        </div>
    </main>
</div>;

FontWeights.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
};

export default FontWeights;
