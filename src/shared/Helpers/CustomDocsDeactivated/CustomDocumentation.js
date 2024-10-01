import React from 'react';

import GridContainerComponent from '../../Layout/TemplateComponents/GridContainerComponent';
import GridHeaderComponent from '../../Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../../Layout/TemplateComponents/SecondaryIntroComponent';

import './custom-documentation.scss';

const CustomDocumentation = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'A typographic scale is a selection of font styles that´s used across our sites, they should be used for all font sizes throughout the UI to create a predictable and harmonious typographic style.\\nThe Alligo type scale is a combination of 20 base styles and there are modified styles aswell, each with an intended application and meaning. Ensuring a flexible, yet consistent, style that accommodates a range of purposes. They’re created based on use (such as display or headline), and grouped broadly into categories based on scale (such as large or small).\\nType styles are defined by five roles: Display, headline, title, body, and label.\\nSelect styles from the scale that are most appropriate for intended use. \\nMore on the Font Family.'}
            title={'Type Scale Design Tokens'}
        />

        <SecondaryIntroComponent
            secondaryContent={'Type size specifications used within the Desktop & Desktop Small layout'}
            secondaryTitle={'Desktop Base Styles'}
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
                fontClassName={'body-lg'}
                fontDescription={'Body Large is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 20px; \\n Line-height: 28px; \\n Letter-spacing:0px; \\n Font-weight: 400;'}
                fontName={'Body Large'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-lg'}
            />

            <GridContainerComponent
                fontClassName={'body-xl'}
                fontDescription={'Body X-Large is used for longer passages of text in the UI. The body style is also adjusted to be readable at smaller sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 24px; \\n Line-height: 32px; \\n Letter-spacing: 0px; \\n Font-weight: 400;'}
                fontName={'Body X-Large'}
                textSnippet={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla mattis odio vivamus est turpis pellentesque sed.'}
                tokenName={'body-xl'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-sm'}
                fontDescription={'Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14x; \\n Line-height: 14px; \\n Letter-spacing: 0.04px; \\n Font-weight: 500; \\n Text-transform: Uppercase;'}
                fontName={'Alt-Label Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-sm'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-md'}
                fontDescription={'Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16x; \\n Line-height: 16px; \\n Letter-spacing: 0.04px; \\n Font-weight: 500; \\n Text-transform: Uppercase;'}
                fontName={'Alt-Label Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-md'}
            />

            <GridContainerComponent
                fontClassName={'alt-label-lg'}
                fontDescription={'Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 18x; \\n Line-height: 18px; \\n Letter-spacing: 0.02px; \\n Font-weight: 500; \\n Text-transform: Uppercase;'}
                fontName={'Alt-Label Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'alt-label-lg'}
            />

            <GridContainerComponent
                fontClassName={'label-sm'}
                fontDescription={'Label styles are a bolder version of Alt-Label and are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 14x; \\n Line-height: 14px; \\n Letter-spacing: 0.04px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Label Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-sm'}
            />

            <GridContainerComponent
                fontClassName={'label-md'}
                fontDescription={'Label styles are a bolder version of Alt-Label and are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16x; \\n Line-height: 16px; \\n Letter-spacing: 0.03px; \\n Font-weight: 700;'}
                fontName={'Label Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-md'}
            />

            <GridContainerComponent
                fontClassName={'label-lg'}
                fontDescription={'Label styles are a bolder version of Alt-Label and are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 18px; \\n Line-height: 18px; \\n Letter-spacing: 0.01px; \\n Font-weight: 700;'}
                fontName={'Label Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'label-lg'}
            />

            <GridContainerComponent
                fontClassName={'title-sm'}
                fontDescription={'Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling formfields and user info.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 16px; \\n Line-height: 22px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Title Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-sm'}
            />

            <GridContainerComponent
                fontClassName={'title-md'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\n'
                    + 'Consider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 20x; \\n Line-height: 24px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Title Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-md'}
            />

            <GridContainerComponent
                fontClassName={'title-lg'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\n'
                    + 'Consider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 24px; \\n Line-height: 28px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Title Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'title-lg'}
            />

            <GridContainerComponent
                fontClassName={'headline-sm'}
                fontDescription={'Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components. \\n\\n'
                    + 'Consider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 28x; \\n Line-height: 32px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Headline Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-sm'}
            />

            <GridContainerComponent
                fontClassName={'headline-md'}
                fontDescription={'Headline XL, L, M or S are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 32x; \\n Line-height: 36px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Headline Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-md'}
            />

            <GridContainerComponent
                fontClassName={'headline-lg'}
                fontDescription={'Headline XL, L, M or S are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 36x; \\n Line-height: 40px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Headline Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-lg'}
            />

            <GridContainerComponent
                fontClassName={'headline-xl'}
                fontDescription={'Headline XL, L, M or S  are best-suited for short, high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.\\n\\n'
                    + 'Headline X-Large is well suited for H1 content. Headline X-Large is never to be used in conjunction with Display Large or vice versa. Display Large always trumps Headline X-Large in a plain text context. '}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 46x; \\n Line-height: 48px; \\n Letter-spacing: 0px; \\n Font-weight: 700;'}
                fontName={'Headline X-Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'headline-xl'}
            />

            <GridContainerComponent
                fontClassName={'display-sm'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n'
                    + 'Good use is for example heading text in banners, headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 26x; \\n Line-height: 28px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Display Small'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-sm'}
            />

            <GridContainerComponent
                fontClassName={'display-md'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n'
                    + 'Good use is for example heading text in banners, headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 36px; \\n Line-height: 40px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Display Medium'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-ms'}
            />

            <GridContainerComponent
                fontClassName={'display-lg'}
                fontDescription={'Display styles are reserved for short, important text or numerals. For example within a content area to further separate related content and establish hierarchy.\\n\\n'
                    + 'Good use is for example heading text in hero banners, banners etc. Headlines for campaigns and content that want to draw extra attention. When embedded in a specific UI region, or nested within components to mark sections of content and banners etc Display works well. Do not overuse.\\n\\n'
                    + 'When placed on top of page, article or in plain text etc, Display Large displays the H1 content. Display Large is never used in conjunction with Headline X-Large and vice versa.'}
                fontInformation={'Font-family: Breuer-Condensed \\n Font-size: 66px; \\n Line-height: 66px; \\n Letter-spacing: 0px; \\n Font-weight: 700; \\n Text-transform: Uppercase;'}
                fontName={'Display Large'}
                textSnippet={'Lorem ipsum Dolor sit amet'}
                tokenName={'display-lg'}
            />

        </div>{/* grid container for rows */}

    </main>
</div>;

CustomDocumentation.propTypes = {};

export default CustomDocumentation;
