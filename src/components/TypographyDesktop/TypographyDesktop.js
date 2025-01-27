import PropTypes from 'prop-types';
import React from 'react';

import '../../globalStyles/foundation-fonts-weights.scss';
import GridContainerComponent from '../../shared/Layout/TemplateComponents/GridContainerComponent';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../../shared/Layout/TemplateComponents/SecondaryIntroComponent';

const TypographyDesktop = ({
    fontClassName, fontDescription, fontInformation, fontName, introText, textSnippet, title, tokenName,
}) => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            //introText={'A typographic scale is a selection of font styles that´s used across our sites, they should be used for all font sizes throughout the UI to create a predictable and harmonious typographic style.\\nThe Alligo type scale is a combination of 20 base styles and there are modified styles as well, each with an intended application and meaning. Ensuring a flexible, yet consistent, style that accommodates a range of purposes. They’re created based on use (such as display or headline), and grouped broadly into categories based on scale (such as large or small).\\nType styles are defined by five roles: Display, headline, title, body, and label.\\nSelect styles from the scale that are most appropriate for intended use.'}
            introText={'The typographic scale is a selection of font styles that´s used across our sites, they should be used for all font sizes throughout the UI to create a predictable and harmonious typographic style. The ADS type scale is a combination of 20 base styles and there are modified styles aswell, each with an intended application and meaning. Ensuring a flexible, yet consistent, style that accommodates a range of purposes. They’re created based on use (such as display or headline), and grouped broadly into categories based on scale (such as large or small). Type styles are defined by five roles: Display, headline, title, body, and label Select styles from the scale that are most appropriate for intended use. '}
            title={'Type Scale Design Tokens'}
        />

        <SecondaryIntroComponent
            secondaryContent={'Type specifications used within the Desktop & Desktop Small layout.'}
            secondaryTitle={'Desktop Base Styles'}
        />

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>

            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'Body Small is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14px; \\n Line-height: 20px; \\n Letter-spacing: 0,28px; \\n Font-weight: 400; \\n Paragraph-spacing: 12px;'}
                fontName={'Body Small'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-sm'}
            />

            <GridContainerComponent
                fontClassName={'body-md'}
                fontDescription={'Body Medium is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16px; \\n Line-height: 22px; \\n Letter-spacing: 0,32px; \\n Font-weight: 400; \\n Paragraph-spacing: 16px;'}
                fontName={'Body Medium'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md'}
            />

            <GridContainerComponent
                fontClassName={'body-lg'}
                fontDescription={'Body Large is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 20px; \\n Line-height: 28px; \\n Letter-spacing:0px; \\n Font-weight: 400;  \\n Paragraph-spacing: 20px;'}
                fontName={'Body Large'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-lg'}
            />

            <GridContainerComponent
                fontClassName={'body-xl'}
                fontDescription={'Body X-Large is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 24px; \\n Line-height: 32px; \\n Letter-spacing: 0px; \\n Font-weight: 400; \\n Paragraph-spacing: 24px;'}
                fontName={'Body X-Large'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-xl'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-sm'}
                fontDescription={'Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14px; \\n Line-height: 14px; \\n Letter-spacing: 0.56px; \\n Font-weight: 500; \\n Text-transform: Uppercase; \\n Paragraph-spacing: 14px;'}
                fontName={'Alt-Label Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-sm'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-md'}
                fontDescription={'Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16x; \\n Line-height: 16px; \\n Letter-spacing: 0.64px; \\n Font-weight: 500; \\n Text-transform: Uppercase; \\n Paragraph-spacing: 16px;'}
                fontName={'Alt-Label Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-md'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-lg'}
                fontDescription={'Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 18x; \\n Line-height: 18px; \\n Letter-spacing: 0.36px; \\n Font-weight: 500; \\n Text-transform: Uppercase; \\n Paragraph-spacing: 18px;'}
                fontName={'Alt-Label Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-lg'}
            />

            <GridContainerComponent
                fontClassName={'label-sm'}
                fontDescription={'Label styles are a bolder version of Alt-Label and are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14px; \\n Line-height: 14px; \\n Letter-spacing: 0.56px; \\n Font-weight: 700; \\n Text-transform: Uppercase; \\n Paragraph-spacing: 14px;'}
                fontName={'Label Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-sm'}
            />

            <GridContainerComponent
                fontClassName={'label-md'}
                fontDescription={'Label styles are a bolder version of Alt-Label and are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16x; \\n Line-height: 16px; \\n Letter-spacing: 0.48px; \\n Font-weight: 700; \\n Paragraph-spacing: 16px;'}
                fontName={'Label Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-md'}
            />

            <GridContainerComponent
                fontClassName={'label-lg'}
                fontDescription={'Label styles are a bolder version of Alt-Label and are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 18px; \\n Line-height: 18px; \\n Letter-spacing: 0.18px; \\n Font-weight: 700; \\n Text-transform: uppercase; \\n Paragraph-spacing: 18px;'}
                fontName={'Label Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-lg'}
            />

            <GridContainerComponent
                fontClassName={'title-sm'}
                fontDescription={'Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16px; \\n Line-height: 22px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Paragraph-spacing: 16px;'}
                fontName={'Title Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-sm'}
            />

            <GridContainerComponent
                fontClassName={'title-md'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\n' +
                    'Consider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 20x; \\n Line-height: 24px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Paragraph-spacing: 20px;'}
                fontName={'Title Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-md'}
            />

            <GridContainerComponent
                fontClassName={'title-lg'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\n' +
                    'Consider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 24px; \\n Line-height: 28px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Letter-spacing: 24px;'}
                fontName={'Title Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-lg'}
            />

            <GridContainerComponent
                fontClassName={'headline-sm'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\n' +
                    'Consider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 28x; \\n Line-height: 32px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Paragraph-spacing: 12px;'}
                fontName={'Headline Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-sm'}
            />

            <GridContainerComponent
                fontClassName={'headline-md'}
                fontDescription={'Headline XL, L, M or S are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 32x; \\n Line-height: 36px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Paragraph-spacing: 12px;'}
                fontName={'Headline Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-md'}
            />

            <GridContainerComponent
                fontClassName={'headline-lg'}
                fontDescription={'Headline XL, L, M or S are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 36x; \\n Line-height: 40px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Paragraph-spacing: 12px;'}
                fontName={'Headline Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-lg'}
            />

            <GridContainerComponent
                fontClassName={'headline-xl'}
                fontDescription={'Headline XL, L, M or S  are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.\\n\\n' +
                    'Headline X-Large is well suited for H1 content. Headline X-Large is never to be used in conjunction with Display Large or vice versa. Display Large always trumps Headline X-Large in a plain text context. '}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 46x; \\n Line-height: 48px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Paragraph-spacing: 12px;'}
                fontName={'Headline X-Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-xl'}
            />

            <GridContainerComponent
                fontClassName={'display-sm'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n' +
                    'Good use is for example heading text in banners, headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 26x; \\n Line-height: 26px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase; \\n Paragraph-spacing: 12px;'}
                fontName={'Display Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-sm'}
            />

            <GridContainerComponent
                fontClassName={'display-md'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n' +
                    'Good use is for example heading text in banners, headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 36px; \\n Line-height: 36px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase; \\n Paragraph-spacing: 12px;'}
                fontName={'Display Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-ms'}
            />

            <GridContainerComponent
                fontClassName={'display-lg'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n' +
                    'Good use is for example heading text in hero banners, banners etc. Headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.\\n\\n' +
                    'When placed on top of page, article or in plain text etc, Display Large displays the H1 content. Display Large is never used in conjunction with Headline X-Large and vice versa.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 66px; \\n Line-height: 66px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase; \\n Paragraph-spacing: 18px;'}
                fontName={'Display Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-lg'}
            />

        </div>{/* grid container for rows */}

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>

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
                fontClassName={'body-xl body-xl--preamble'}
                fontDescription={'Modified Body X-Large. Used as Preamble text'}
                fontInformation={'Font-weight: 600;'}
                fontName={'Body X-Large (Modifier) -> Preamble'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. '}
                tokenName={'body-xl body-xl--preamble'}
            />



<GridContainerComponent
                fontClassName={'body-xl body-xl--italic'}
                fontDescription={'Modified Body X-Large style.'}
                fontInformation={'font-style: italic;'}
                fontName={'Body X-Large (Modifier) -> italic'}
                textSnippet={'Lorem ipsum dolor sit amet'}
                tokenName={'body-xl body-xl--italic'}
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
                fontClassName={'body-xl body-xl--strikethrough'}
                fontDescription={'Modified Body X-Large style.'}
                fontInformation={'Text-decoration: line-through;'}
                fontName={'Body X-Large (Modifier) -> Strikethrough'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-xl body-xl--strikethrough'}
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
                fontClassName={'body-xl body-xl--bold-italic'}
                fontDescription={'Modified Body X-Large style.'}
                fontInformation={'Font-weight: 700; font-style: italic;'}
                fontName={'Body X-Large (Modifier) -> Bold Italic'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-xl body-xl--bold-italic'}
            />

<GridContainerComponent
                fontClassName={'body-xl body-xl--bold-underline'}
                fontDescription={'Modified Body X-Large style.'}
                fontInformation={'Font-weight: 700; font-style: italic;'}
                fontName={'Body X-Large (Modifier) -> Bold Underline'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-xl body-xl--bold-underline'}
            />

<GridContainerComponent
                fontClassName={'body-xl body-xl--bold-strikethrough'}
                fontDescription={'Modified Body X-Large style.'}
                fontInformation={'Font-weight: 700; text-decoration: line-through'}
                fontName={'Body X-Large (Modifier) -> Bold Strikethrough'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-xl body-xl--bold-strikethrough'}
            />


<GridContainerComponent
                fontClassName={'body-lg body-lg--italic'}
                fontDescription={'Modified body-lg style.'}
                fontInformation={'font-style: italic;'}
                fontName={'Body Large (Modifier) -> Italic'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. '}
                tokenName={'body-lg body-lg--italic'}
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
                fontClassName={'body-lg body-lg--strikethrough'}
                fontDescription={'Modified Body Large style.'}
                fontInformation={'Text-decoration: line-through;'}
                fontName={'Body Large (Modifier) -> Strikethrough'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. '}
                tokenName={'body-lg body-lg--strikethrough'}
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
                fontClassName={'body-lg body-lg--bold-italic'}
                fontDescription={'Modified body-lg style.'}
                fontInformation={'font-style: italic; font-weight: 700;'}
                fontName={'Body Large (Modifier) -> Bold Italic'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. '}
                tokenName={'body-lg body-lg--bold-italic'}
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
                fontClassName={'body-md body-md--bold-strikethrough'}
                fontDescription={'Modified Body Medium style.'}
                fontInformation={'font-weight: 700; Text-decoration: line-through'}
                fontName={'Body Large (Modifier) -> Bold Strikethrough'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md body-md--bold-strikethrough'}
            />

<GridContainerComponent
                fontClassName={'body-md body-md--italic'}
                fontDescription={'Modified Body Medium style.'}
                fontInformation={'font-style: italic;'}
                fontName={'Body Large (Modifier) -> Italic'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md body-md--italic'}
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
                fontClassName={'body-md body-md--strikethrough'}
                fontDescription={'Modified Body Medium style.'}
                fontInformation={'Text-decoration: strikethrough;'}
                fontName={'Body Medium (Modifier) -> Bold Underline'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md body-md--strikethrough'}
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
                fontClassName={'body-md body-md--bold-italic'}
                fontDescription={'Modified Body Medium style.'}
                fontInformation={'Font-weight: 700; \\n font-style: italic;'}
                fontName={'Body Medium (Modifier) -> Bold Italic'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md body-md--bold-italic'}
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
                fontClassName={'body-md body-md--bold-strikethrough'}
                fontDescription={'Modified Body Medium style.'}
                fontInformation={'Text-decoration: Bold Strikethrough;'}
                fontName={'Body Medium (Modifier) -> Bold Underline'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-md body-md--bold-strikethrough'}
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
                fontClassName={'body-sm body-sm--italic'}
                fontDescription={'Modified Body Small style.'}
                fontInformation={'Text-decoration: underline;'}
                fontName={'Body Small (Modifier) -> Italic'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed. \\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-sm body-sm--underline'}
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

TypographyDesktop.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    introText: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
    
};

export default TypographyDesktop;
