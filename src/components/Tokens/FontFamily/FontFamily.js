import PropTypes from 'prop-types';
import React from 'react';

import Page from '../../../shared/StorybookLayout/TemplateComponents/Page/Page';

import GridContainerComponent from '../../../shared/StorybookLayout/TemplateComponents/Grids/GridContainerComponent';
import GridHeaderComponent from '../../../shared/StorybookLayout/TemplateComponents/Grids/GridHeaderComponent';
import MainIntroComponent from '../../../shared/StorybookLayout/TemplateComponents/Content/MainIntroComponent';

const FontFamily = ({
    textSnippet, fontName, fontClassName, fontDescription, fontInformation, tokenName,
}) => 
    <Page>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'Our main font is Breuer Condensed. It is a typeface with its own character that contributes to giving Alligo a distinctive identity and is used commonly within our main brands Tools, Swedol, Grolls & Univern.'}
            title={'Font Family -moved to folder'}
        />

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>

            <GridContainerComponent
                fontClassName={'body-md normal-weight'}
                fontDescription={''}
                fontInformation={''}
                fontName={'Font Weight: Regular'}
                textSnippet={'400'}
                tokenName={'$normal-weight-400'}
            />

            <GridContainerComponent
                fontClassName={'body-md medium-weight'}
                fontDescription={''}
                fontInformation={''}
                fontName={'Font Weight: Medium'}
                textSnippet={'500'}
                tokenName={'$medium-weight-500'}
            />

            <GridContainerComponent
                fontClassName={'body-md bold-weight'}
                fontDescription={''}
                fontInformation={''}
                fontName={'Font Weight: Bold'}
                textSnippet={'700'}
                tokenName={'$bold-weight-700'}
            />

        </div>
</Page>;

FontFamily.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
};

export default FontFamily;
