import PropTypes from 'prop-types';
import React from 'react';
import './sb-desktop-paragraph-spacing.scss';

import GridContainerComponent from '../../shared/Layout/TemplateComponents/GridContainerComponent';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';

const DesktopParagraphSpacing = ({
    textSnippet, fontName, fontClassName, fontDescription, fontInformation, tokenName,
}) => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'One space = One spacing unit. Designers must resist the urge to combine spacing units, particularly when doing so leads to pixel dimensions that are not defined in the spacing unit chart. Use the tokens as they are and trust the spacings been designed to work all the way throughout our applications. The same token can be used in Desktop and Mobile View. Add more instructions on how to use (when needing to use Paragraph spacing'}
            title={'Paragraph Spacing'}
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
fontDescription={'Paragraph-spacing: 12px'}
fontInformation={''}
fontName={'Body Small'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-body-sm'}
/>

<GridContainerComponent
fontClassName={'body-md'}
fontDescription={'Paragraph-spacing: 16px'}
fontInformation={''}
fontName={'Body Medium'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-body-md'}
/>

<GridContainerComponent
fontClassName={'body-lg'}
fontDescription={'Paragraph-spacing: 20px'}
fontInformation={''}
fontName={'Body Large'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-body-lg'}
/>

<GridContainerComponent
fontClassName={'body-xl'}
fontDescription={'Paragraph-spacing: 24px'}
fontInformation={''}
fontName={'Body XLarge'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-body-xl'}
/>

<GridContainerComponent
fontClassName={'alt-label-sm'}
fontDescription={'Paragraph-spacing: 14px'}
fontInformation={''}
fontName={'Alt-Label Small'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-alt-label-sm'}
/>

<GridContainerComponent
fontClassName={'alt-label-md'}
fontDescription={'Paragraph-spacing: 16px'}
fontInformation={''}
fontName={'Alt-Label Medium'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-alt-label-md'}
/>

<GridContainerComponent
fontClassName={'alt-label-lg'}
fontDescription={'Paragraph-spacing: 18px'}
fontInformation={''}
fontName={'Alt-Label Large'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-alt-label-lg'}
/>

<GridContainerComponent
fontClassName={'label-sm'}
fontDescription={'Paragraph-spacing: 14px'}
fontInformation={''}
fontName={'Label Small'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-label-sm'}
/>

<GridContainerComponent
fontClassName={'label-md'}
fontDescription={'Paragraph-spacing: 16px'}
fontInformation={'Label Medium'}
fontName={''}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-label-md'}
/>

<GridContainerComponent
fontClassName={'label-lg'}
fontDescription={'Paragraph-spacing: 18px'}
fontInformation={''}
fontName={'Label large'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-label-lg'}
/>

<GridContainerComponent
fontClassName={'title-sm'}
fontDescription={'Paragraph-spacing: 16px'}
fontInformation={''}
fontName={'Title Small'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-title-sm'}
/>

<GridContainerComponent
fontClassName={'title-md'}
fontDescription={'Paragraph-spacing: 20px'}
fontInformation={''}
fontName={'Title Medium'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-title-md'}
/>

<GridContainerComponent
fontClassName={'title-lg'}
fontDescription={'Paragraph-spacing: 24px'}
fontInformation={''}
fontName={'Title Large'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-title-lg'}
/>

<GridContainerComponent
fontClassName={'headline-sm'}
fontDescription={'Paragraph-spacing: 12px'}
fontInformation={''}
fontName={'Headline Small'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-headline-sm'}
/>

<GridContainerComponent
fontClassName={'headline-md'}
fontDescription={'Paragraph-spacing: 12px'}
fontInformation={''}
fontName={'Headline Medium'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-headline-md'}
/>

<GridContainerComponent
fontClassName={'headline-lg'}
fontDescription={'Paragraph-spacing: 12px'}
fontInformation={''}
fontName={'Headline Large'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-headline-lg'}
/>

<GridContainerComponent
fontClassName={'headline-xl'}
fontDescription={'Paragraph-spacing: 12px'}
fontInformation={''}
fontName={'Headline X-large'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-headline-xl'}
/>

<GridContainerComponent
fontClassName={'display-sm'}
fontDescription={'Paragraph-spacing: 12px'}
fontInformation={''}
fontName={'Display Small'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-display-sm'}
/>

<GridContainerComponent
fontClassName={'display-md'}
fontDescription={'Paragraph-spacing: 12px'}
fontInformation={''}
fontName={'Display Medium'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-display-md'}
/>

<GridContainerComponent
fontClassName={'display-lg'}
fontDescription={'Paragraph-spacing: 18px'}
fontInformation={''}
fontName={'Display large'}
textSnippet={'Quick brown fox'}
tokenName={'paragraph-spacing-display-lg'}
/>

        </div>
    </main>
</div>;

DesktopParagraphSpacing.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
};

export default DesktopParagraphSpacing;
