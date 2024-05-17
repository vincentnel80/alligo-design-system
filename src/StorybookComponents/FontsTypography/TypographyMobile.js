import PropTypes from 'prop-types';
import React from 'react';

import './foundation-fonts-weights.scss';
import GridContainerComponent from '../Layout/TemplateComponents/GridContainerComponent';
import GridHeaderComponent from '../Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../Layout/TemplateComponents/SecondaryIntroComponent';

const TypographyMobile = ({
    fontClassName, fontDescription, fontInformation, fontName, introText, textSnippet, title, tokenName,
}) => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'preamble-body-xl'}
            introText={'A typographic scale is a selection of font styles that´s used across our sites, they should be used for all font sizes throughout the UI to create a predictable and harmonious typographic style.\\nThe Alligo type scale is a combination of 20 base styles and there are modified styles aswell, each with an intended application and meaning. Ensuring a flexible, yet consistent, style that accommodates a range of purposes. They’re created based on use (such as display or headline), and grouped broadly into categories based on scale (such as large or small).\\nType styles are defined by five roles: Display, headline, title, body, and label.\\nSelect styles from the scale that are most appropriate for intended use. \\nMore on the Font Family.'}
            title={'Type Scale'}
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
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14px; \\n Line-height: 20px; \\n Letter-spacing: 0,02px; \\n Font-weight: 400;'}
                fontName={'Body Small'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-sm'}
            />

            <GridContainerComponent
                fontClassName={'body-md'}
                fontDescription={'Body Medium is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16px; \\n Line-height: 22px; \\n Letter-spacing: 0,02px; \\n Font-weight: 400;'}
                fontName={'Body Medium'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md'}
            />

            <GridContainerComponent
                fontClassName={'body-lrg'}
                fontDescription={'Body Large is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 18px; \\n Line-height: 268px; \\n Letter-spacing:0px; \\n Font-weight: 400;'}
                fontName={'Body Large'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-lrg'}
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
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 12x; \\n Line-height: 12px; \\n Letter-spacing: 0.04px; \\n Font-weight: 500; \\n Text-transform: Uppercase;'}
                fontName={'Alt-Label Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-sm'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-md'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components or for example help text in the content body.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14x; \\n Line-height: 14px; \\n Letter-spacing: 0.04px; \\n Font-weight: 500; \\n Text-transform: Uppercase;'}
                fontName={'Alt-Label Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-md'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-lrg'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components or for example help text in the content body.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16x; \\n Line-height: 16px; \\n Letter-spacing: 0.02px; \\n Font-weight: 500; \\n Text-transform: Uppercase;'}
                fontName={'Alt-Label Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-lrg'}
            />

            <GridContainerComponent
                fontClassName={'label-sm'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components. Used for example as text inside buttons.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 12x; \\n Line-height: 12px; \\n Letter-spacing: 0.04px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Label Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-sm'}
            />

            <GridContainerComponent
                fontClassName={'label-md'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components. Used for example as text inside buttons.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14px; \\n Line-height: 14px; \\n Letter-spacing: 0.03px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Label Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-md'}
            />

            <GridContainerComponent
                fontClassName={'label-lrg'}
                fontDescription={'Label styles are smaller, utilitarian styles, used for things like the text inside components. Used for example as text inside buttons.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16px; \\n Line-height: 16px; \\n Letter-spacing: 0.02px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Label Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-lrg'}
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
                fontClassName={'title-lrg'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\nConsider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 20px; \\n Line-height: 24px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Title Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-lrg'}
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
                fontClassName={'headline-lrg'}
                fontDescription={'Headline XL, L, M or S are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 28x; \\n Line-height: 32px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Headline Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-lrg'}
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
                fontClassName={'display-lrg'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n'
                    + 'Good use is for example heading text in banners, headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 36px; \\n Line-height: 40px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Display Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-lrg'}
            />

        </div>{/* grid container for rows */}

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
