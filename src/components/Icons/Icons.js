import React from 'react';

import GridContainerComponent from '../../shared/Layout/TemplateComponents/GridContainerComponent';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../../shared/Layout/TemplateComponents/SecondaryIntroComponent';

import './icons.scss';

const Icons = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'Icons provide additional visual context and enhance usability and should be used in a purposeful manner to maximize comprehension and reduce cognitive load. For example when you need to call attention to a particular action, command, or section. \\nUse them infrequently – if you’re questioning an icon’s use, it probably doesn’t need to be used at all.'}
            title={'Icons'}
        />

        <SecondaryIntroComponent
            secondaryContent={'Alligo uses Material Symbols for iconography. Mainly we use the Outlined version, with zero fill(0), in sizes as defined by Google: 20px, 24px, 40px and 48px. In some cases the fill(1) setting can be used. \\nhttps://fonts.google.com/icons \\nCustomization settings for material symbol outlined: \\nFill: 0 \\nWeight: 300, \\nGrade: 0, \\nOptical sizes: 20, 24, 40 & 48 \\nAdequate space around standalone icon allows for legibility and touch. A minimum touch target area of 40px is for example what google recommends for standalone iconography. Standalone icons should however be used in context of the button component.'}
            secondaryTitle={'Material Symbols'}
        />

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>

            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'XXX'}
                fontInformation={''}
                fontName={'Icon: X-Small'}
                iconClass={'icon-container-xs'}
                textSnippet={'20px'}
                tokenName={'icon-container-xs'}
            />
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'XXX'}
                fontInformation={''}
                fontName={'Icon: Small'}
                iconClass={'icon-container-sm'}
                textSnippet={'24px'}
                tokenName={'icon-container-sm'}
            />
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'XXX'}
                fontInformation={''}
                fontName={'Icon: Medium'}
                iconClass={'icon-container-md'}
                textSnippet={'40px'}
                tokenName={'icon-container-md'}
            />
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'XXX'}
                fontInformation={''}
                fontName={'Icon: Large'}
                iconClass={'icon-container-lg'}
                textSnippet={'48px'}
                tokenName={'icon-container-lg'}
            />

        </div>

        <SecondaryIntroComponent
            secondaryContent={'In addition to Material Symbols we use customized Icons when there is no icon that fits the context or when there´s need for different versions of icons that Material Symbols does not provide.'}
            secondaryTitle={'Custom Icons'}
        />

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'XXX'}
                fontInformation={''}
                fontName={'Icon custom: X-Small'}
                iconClass={'icon-bank-id-xs'}
                textSnippet={'20px'}
                tokenName={'icon-bank-id-xs'}
            />
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'XXX'}
                fontInformation={''}
                fontName={'Icon custom: Small'}
                iconClass={'icon-bank-id-sm'}
                textSnippet={'24px'}
                tokenName={'icon-bank-id-sm'}
            />
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'XXX'}
                fontInformation={''}
                fontName={'Icon custom: Medium'}
                iconClass={'icon-bank-id-md'}
                textSnippet={'40px'}
                tokenName={'icon-bank-id-md'}
            />
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={'XXX'}
                fontInformation={''}
                fontName={'Icon custom: Large'}
                iconClass={'icon-bank-id-lg'}
                textSnippet={'48px'}
                tokenName={'icon-bank-id-lg'}
            />

        </div>
    </main>
</div>;

export default Icons;
