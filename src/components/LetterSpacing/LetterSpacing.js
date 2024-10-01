import PropTypes from 'prop-types';
import React from 'react';
import './sb-letter-spacing.scss';

import GridContainerComponent from '../../shared/Layout/TemplateComponents/GridContainerComponent';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';

const LetterSpacing = ({
    textSnippet, fontName, fontClassName, fontDescription, fontInformation, tokenName,
}) => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'The following tokens can be used in Desktop and Mobile view, and help the user define spacing between letters in various font classes'}
            title={'Letter Spacing'}
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
fontDescription={'Letter-spacing: 0.28px;'}
fontInformation={''}
fontName={'Body Small'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-body-sm'}
/>

<GridContainerComponent
fontClassName={'body-md'}
fontDescription={'Letter-spacing: 0.32px;'}
fontInformation={''}
fontName={'Body Medium'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-body-md'}
/>

<GridContainerComponent
fontClassName={'body-lg'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Body Large'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-body-lg'}
/>

<GridContainerComponent
fontClassName={'body-xl'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Body XLarge'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-body-xl'}
/>

<GridContainerComponent
fontClassName={'alt-label-sm'}
fontDescription={'Letter-spacing: 0.56px;'}
fontInformation={''}
fontName={'Alt-Label Small'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-label-sm'}
/>

<GridContainerComponent
fontClassName={'alt-label-md'}
fontDescription={'Letter-spacing: 0.64px;'}
fontInformation={''}
fontName={'Alt-Label Medium'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-alt-label-md'}
/>

<GridContainerComponent
fontClassName={'alt-label-lg'}
fontDescription={'Letter-spacing: 0.36px;'}
fontInformation={''}
fontName={'Alt-Label Large'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-alt-label-lg'}
/>

<GridContainerComponent
fontClassName={'label-sm'}
fontDescription={'Letter-spacing: 0.56px;'}
fontInformation={''}
fontName={'Label Small'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-label-sm'}
/>

<GridContainerComponent
fontClassName={'label-md'}
fontDescription={'Letter-spacing: 0.48px;'}
fontInformation={'Label Medium'}
fontName={''}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-label-md'}
/>

<GridContainerComponent
fontClassName={'label-lg'}
fontDescription={'Letter-spacing: 0.18px;'}
fontInformation={''}
fontName={'Label large'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-label-lg'}
/>

<GridContainerComponent
fontClassName={'title-sm'}
fontDescription={'Font-size: 0px;'}
fontInformation={''}
fontName={'Title Small'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-title-sm'}
/>

<GridContainerComponent
fontClassName={'title-md'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Title Medium'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-title-md'}
/>

<GridContainerComponent
fontClassName={'title-lg'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Title Large'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-title-lg'}
/>

<GridContainerComponent
fontClassName={'headline-sm'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Headline Small'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-headline-sm'}
/>

<GridContainerComponent
fontClassName={'headline-md'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Headline Medium'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-headline-md'}
/>

<GridContainerComponent
fontClassName={'headline-lg'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Headline Large'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-headline-lg'}
/>

<GridContainerComponent
fontClassName={'headline-xl'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Headline X-large'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-headline-xl'}
/>

<GridContainerComponent
fontClassName={'display-sm'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Display Small'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-display-sm'}
/>

<GridContainerComponent
fontClassName={'display-md'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Display Medium'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-display-md'}
/>

<GridContainerComponent
fontClassName={'display-lg'}
fontDescription={'Letter-spacing: 0px;'}
fontInformation={''}
fontName={'Display large'}
textSnippet={'Quick brown fox'}
tokenName={'letter-spacing-display-lg'}
/>

        </div>
    </main>
</div>;

LetterSpacing.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
};

export default LetterSpacing;
