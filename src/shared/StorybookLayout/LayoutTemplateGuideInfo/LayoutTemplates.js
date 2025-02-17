import PropTypes from 'prop-types';
import React from 'react';

import Page from '../../../shared/StorybookLayout/TemplateComponents/Page/Page'; // question, one root page once? now i have to add this everytime?
import MainIntroComponent from '../../../shared/StorybookLayout/TemplateComponents/Content/MainIntroComponent';
import SecondaryIntroComponent from '../../../shared/StorybookLayout/TemplateComponents/Content/SecondaryIntroComponent';
import SubHeaderComponent from '../../../shared/StorybookLayout/TemplateComponents/Content/SubHeaderComponent';
import GridHeaderComponent from '../TemplateComponents/Grids/GridHeaderComponent';
import GridContainerComponent from '../TemplateComponents/Grids/GridContainerComponent';

const LayoutTemplates = () => 
    <Page>
        {/* Intro */}

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'This is the main introduction and subtext of pages. Always Used at the start of pages and only once'}
            title={'Storybook Pages & Components Examples'}
        />

        <SecondaryIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            secondaryTitle={'Sub Header with underline standard'}
            introText={'This is the main introduction and subtext of pages. Always Used at the start of pages and only once'}
            secondaryContent={'Used as a sub or secondary header, can be used directly after the main intro, or can alternatively be used in multiple instances on pages, when multiple sub headers are required<'}
        />

        <SubHeaderComponent
            fontClassName={'title-lg'}
            subTitle={'Small Sub - No Underline'}
            subContent={'A smaller version of the Small Sub secondary header. This header contains no underline. Can be used when extra headings and subtext is required, but with more of an explanatory nature. Multiple instances can be used on pages'}
        /> 

        {/* Column Header */}

        <GridHeaderComponent/> 

        <div className={'sb-grid-container'} role={'listbox'}>
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={''}
                fontInformation={''}
                fontName={'Item Name'}
                textSnippet={'Example Text, labels or icons'}
                tokenName={'item-token'}
            />
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={''}
                fontInformation={''}
                fontName={'Item Name'}
                textSnippet={'Example Text, labels or icons'}
                tokenName={'item-token'}
            />
            <GridContainerComponent
                fontClassName={'body-sm'}
                fontDescription={''}
                fontInformation={''}
                fontName={'Item Name'}
                textSnippet={'Example Text, labels or icons'}
                tokenName={'item-token'}
            />
        </div>
    </Page>;

LayoutTemplates.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    introText: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
};

export default LayoutTemplates;
