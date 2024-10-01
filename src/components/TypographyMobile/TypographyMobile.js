import PropTypes from 'prop-types';
import React from 'react';

import '../../globalStyles/foundation-fonts-weights.scss';
import GridContainerComponent from '../../shared/Layout/TemplateComponents/GridContainerComponent';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../../shared/Layout/TemplateComponents/SecondaryIntroComponent';

const TypographyMobile = ({
    fontClassName, fontDescription, fontInformation, fontName, introText, textSnippet, title, tokenName,
}) => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'The typographic scale is a selection of font styles that´s used across our sites, they should be used for all font sizes throughout the UI to create a predictable and harmonious typographic style. The ADS type scale is a combination of 20 base styles and there are modified styles aswell, each with an intended application and meaning. Ensuring a flexible, yet consistent, style that accommodates a range of purposes. They’re created based on use (such as display or headline), and grouped broadly into categories based on scale (such as large or small). Select styles from the scale that are most appropriate for intended use.'}
            title={'Type Scale Design tokens'}
        />

        <SecondaryIntroComponent
            secondaryContent={'Type size specifications used within the Table & Mobile Small layout'}
            secondaryTitle={'Mobile Base Styles'}
        />

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>

            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'Body Small is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14px; \\n Line-height: 20px; \\n Letter-spacing: 0,28px; \\n Font-weight: 400;'}
                fontName={'Body Small'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-sm'}
            />

            <GridContainerComponent
                fontClassName={'body-md'}
                fontDescription={'Body Medium is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16px; \\n Line-height: 22px; \\n Letter-spacing: 0,32px; \\n Font-weight: 400;'}
                fontName={'Body Medium'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md'}
            />

            <GridContainerComponent
                fontClassName={'body-lg'}
                fontDescription={'Body Large is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 18px; \\n Line-height: 268px; \\n Letter-spacing:0px; \\n Font-weight: 400;'}
                fontName={'Body Large'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-lg'}
            />

            <GridContainerComponent
                fontClassName={'body-xl'}
                fontDescription={'Body X-Large is used for short intro passages of longer texts and non recurrent text passages.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 20px; \\n Line-height: 26px; \\n Letter-spacing: 0px; \\n Font-weight: 400;'}
                fontName={'Body X-Large'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-xl'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-sm'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components or for example help text in the content body.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 12x; \\n Line-height: 12px; \\n Letter-spacing: 0.48px; \\n Font-weight: 500; \\n Text-transform: Uppercase;'}
                fontName={'Alt-Label Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-sm'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-md'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components or for example help text in the content body.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14x; \\n Line-height: 14px; \\n Letter-spacing: 0.56px; \\n Font-weight: 500; \\n Text-transform: Uppercase;'}
                fontName={'Alt-Label Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-md'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-lg'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components or for example help text in the content body.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16x; \\n Line-height: 16px; \\n Letter-spacing: 0.32px; \\n Font-weight: 500; \\n Text-transform: Uppercase;'}
                fontName={'Alt-Label Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-lg'}
            />

            <GridContainerComponent
                fontClassName={'label-sm'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components. Used for example as text inside buttons.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 12x; \\n Line-height: 12px; \\n Letter-spacing: 0.48px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Label Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-sm'}
            />

            <GridContainerComponent
                fontClassName={'label-md'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components. Used for example as text inside buttons.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14px; \\n Line-height: 14px; \\n Letter-spacing: 0.42px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Label Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-md'}
            />

            <GridContainerComponent
                fontClassName={'label-lg'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components. Used for example as text inside buttons.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16px; \\n Line-height: 16px; \\n Letter-spacing: 0.32px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Label Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-lg'}
            />

            <GridContainerComponent
                fontClassName={'title-sm'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\nConsider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16px; \\n Line-height: 22px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Title Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-sm'}
            />

            <GridContainerComponent
                fontClassName={'title-md'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\nConsider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 18x; \\n Line-height: 24px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Title Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-md'}
            />

            <GridContainerComponent
                fontClassName={'title-lg'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\nConsider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 20px; \\n Line-height: 24px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Title Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-lg'}
            />

            <GridContainerComponent
                fontClassName={'headline-sm'}
                fontDescription={'Headline XL, L, M or S are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 22x; \\n Line-height: 24px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Headline Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-sm'}
            />

            <GridContainerComponent
                fontClassName={'headline-md'}
                fontDescription={'Headline XL, L, M or S are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 26x; \\n Line-height: 32px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Headline Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-md'}
            />

            <GridContainerComponent
                fontClassName={'headline-lg'}
                fontDescription={'Headline XL, L, M or S are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 28x; \\n Line-height: 32px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Headline Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-lg'}
            />

            <GridContainerComponent
                fontClassName={'headline-xl'}
                fontDescription={'Headline XL, L, M or S  are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.\\n\\n'
                    + 'Headline X-Large is well suited for H1 content. Headline X-Large is never to be used in conjunction with Display Large or vice versa. Display Large always trumps Headline X-Large in a plain text context. '}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 30x; \\n Line-height: 34px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Headline X-Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-xl'}
            />

            <GridContainerComponent
                fontClassName={'display-sm'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n'
                    + 'Good use is for example heading text in banners, headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 22x; \\n Line-height: 24px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Display Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-sm'}
            />

            <GridContainerComponent
                fontClassName={'display-md'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n'
                    + 'Good use is for example heading text in banners, headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 28px; \\n Line-height: 32px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Display Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-ms'}
            />

            <GridContainerComponent
                fontClassName={'display-lg'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n'
                    + 'Good use is for example heading text in banners, headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 36px; \\n Line-height: 40px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Display Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-lg'}
            />

        </div>{/* grid container for rows */}

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>
            <GridContainerComponent
                fontClassName={'body-xl body-xl--preamble'}
                fontDescription={'Modified Body X-Large. Used as Preamble text'}
                fontInformation={'Font-weight: 600;'}
                fontName={'Body X-Large (Modifier) -> Preamble'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. '}
                tokenName={'body-xl body-xl--preamble'}
            />

            <GridContainerComponent
                fontClassName={'headline-md headline-md--blockquote'}
                fontDescription={'Modified Label Medium style. Used as text for blockquotes.'}
                fontInformation={'Text-transform: uppercase;'}
                fontName={'Headline Medium (Modifier) -> Blockquote'}
                textSnippet={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”'}
                tokenName={'headline-md headline-md--blockquote'}
            />

            <GridContainerComponent
                fontClassName={'label-sm label-sm--badge'}
                fontDescription={'Modified Label Small style. Used for Badge base.'}
                fontInformation={'Font-weight: 600; \\n Text-transform: normal;'}
                fontName={'Label Small (Modifier) -> Badge'}
                textSnippet={'Lorem ipsum  dolor sit amet'}
                tokenName={'label-sm label-sm--badge'}
            />

            <GridContainerComponent
                fontClassName={'label-lg label-lg--underline'}
                fontDescription={'Modified Label Small style. Used for ????'}
                fontInformation={'Text-decoration: underline;'}
                fontName={'Label Large (Modifier) -> Underline'}
                textSnippet={'Lorem ipsum dolor sit amet'}
                tokenName={'label-lg label-lg--underline'}
            />

            <GridContainerComponent
                fontClassName={'body-xl body-xl--underline'}
                fontDescription={'Modified Body X-Large style.'}
                fontInformation={'Text-decoration: underline;'}
                fontName={'Body X-Large (Modifier) -> Underline'}
                textSnippet={'Lorem ipsum dolor sit amet'}
                tokenName={'body-xl body-xl--underline'}
            />

            <GridContainerComponent
                fontClassName={'body-xl body-xl--bold'}
                fontDescription={'Modified Body X-Large style.'}
                fontInformation={'Font-weight: 700;'}
                fontName={'Body X-Large (Modifier) -> Bold'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-xl body-xl--bold'}
            />

            <GridContainerComponent
                fontClassName={'body-xl body-xl--strikethrough'}
                fontDescription={'Modified Body X-Large style.'}
                fontInformation={'Text-decoration: line-through;'}
                fontName={'Body X-Large (Modifier) -> Strikethrough'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-xl body-xl--strikethrough'}
            />

            <GridContainerComponent
                fontClassName={'body-lg body-lg--underline'}
                fontDescription={'Modified Body Large style.'}
                fontInformation={'Text-decoration: underline;'}
                fontName={'Body Large (Modifier) -> Underline'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. '}
                tokenName={'body-lg body-lg--underline'}
            />

            <GridContainerComponent
                fontClassName={'body-lg body-lg--bold'}
                fontDescription={'Modified Body Large style.'}
                fontInformation={'Font-weight: 700;'}
                fontName={'Body Large (Modifier) -> Bold'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. '}
                tokenName={'body-lg body-lg--bold'}
            />

            <GridContainerComponent
                fontClassName={'body-lg body-lg--bold-underline'}
                fontDescription={'Modified Body Large style.'}
                fontInformation={'Font-weight: 700; \\n Text-decoration: underline;'}
                fontName={'Body Large (Modifier) -> Bold Underline'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. '}
                tokenName={'body-lg body-lg--bold-underline'}
            />

            <GridContainerComponent
                fontClassName={'body-lg body-lg--strikethrough'}
                fontDescription={'Modified Body Large style.'}
                fontInformation={'Text-decoration: line-through;'}
                fontName={'Body Large (Modifier) -> Strikethrough'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. '}
                tokenName={'body-lg body-lg--strikethrough'}
            />

            <GridContainerComponent
                fontClassName={'body-md body-md--underline'}
                fontDescription={'Modified Body Medium style.'}
                fontInformation={'Text-decoration: underline;'}
                fontName={'Body Medium (Modifier) -> Underline'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md body-md--underline'}
            />

            <GridContainerComponent
                fontClassName={'body-md body-md--bold'}
                fontDescription={'Modified Body Medium style.'}
                fontInformation={'Font-weight: 700;'}
                fontName={'Body Medium (Modifier) -> Bold'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md body-md--bold'}
            />

            <GridContainerComponent
                fontClassName={'body-md body-md--bold-underline'}
                fontDescription={'Modified Body Medium style.'}
                fontInformation={'Font-weight: 700; \\n Text-decoration: underline;'}
                fontName={'Body Medium (Modifier) -> Bold Underline'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md body-md--bold-underline'}
            />

            <GridContainerComponent
                fontClassName={'body-md body-md--strikethrough'}
                fontDescription={'Modified Body Medium style.'}
                fontInformation={'Text-decoration: strikethrough;'}
                fontName={'Body Medium (Modifier) -> Bold Underline'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md body-md--strikethrough'}
            />

            <GridContainerComponent
                fontClassName={'body-sm body-sm--bold'}
                fontDescription={'Modified Body Small style.'}
                fontInformation={'Font-weight: 700;'}
                fontName={'Body Small (Modifier) -> Bold'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-sm body-sm--bold'}
            />

            <GridContainerComponent
                fontClassName={'body-sm body-sm--underline'}
                fontDescription={'Modified Body Small style.'}
                fontInformation={'Text-decoration: underline;'}
                fontName={'Body Small (Modifier) -> Underline'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-sm body-sm--underline'}
            />

            <GridContainerComponent
                fontClassName={'body-sm body-sm--strikethrough'}
                fontDescription={'Modified Body Small style.'}
                fontInformation={'Text-decoration: line-through;'}
                fontName={'Body Small (Modifier) -> Strikethrough'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-sm body-sm--strikethrough'}
            />


        </div>

    </main>
</div>;

TypographyMobile.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    introText: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
};

export default TypographyMobile;
