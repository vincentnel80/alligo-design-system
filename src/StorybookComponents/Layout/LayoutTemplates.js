import PropTypes from 'prop-types';
import React from 'react';
import './layout-templates.scss';

import GridContainerComponent from './TemplateComponents/GridContainerComponent';

const LayoutTemplates = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        {/* Intro */}
        <div className={'sb-main-intro-container'}>
            <div className={'sb-main-intro-headline-wrapper'}>
                <div className={'headline-xl'}>Storybook Pages & Components Examples</div>
                <div className={'sb-design-status-label draft'}>
                    <div className={'label-sm'}>Draft</div>
                </div>
            </div>
            <div className={'sb-main-intro-description-text'}>
                <p className={'preamble-body-xl'}>This is the main introduction and subtext of pages. Always Used at the start of pages and only once</p>
            </div>
        </div>

        {/* Sub header with underline */}
        <div className={'sb-secondary-intro-container'}>
            <div className={'sb-secondary-title-wrapper'}>
                <div className={'headline-lrg'}>Sub Header with underline</div>
                <hr className={'hr-line-division'}></hr>
            </div>
            <div className={'sb-secondary-content-wrapper'}>
                <p className={'body-lrg'}>Used as a sub or secondary header, can be used directly after the main intro, or can alternatively be used in multiple instances on pages, when multiple sub headers are required</p>
            </div>
        </div>

        {/* Extra information and sub texts. */}
        <div className={'sb-desc-content-container'}>
            <div className={'sb-desc-title-wrapper'}>
                <span className={'title-lrg'}>Small Sub - No Underline</span>
            </div>
            <div className={'sb-desc-content-text'}>
                <span className={'body-lrg'}>A smaller version of the 'Small Sub' secondary header. This header contains no underline. Can be used when extra headings and subtext is required, but with more of an explanatory nature. Multiple instances can be used on pages</span>
            </div>
        </div>

        {/* Column Header */}
        <div className={'sb-grid-header-container'} role={'listbox'}>
            <span className={'alt-label-lrg'}>Example</span>
            <span className={'alt-label-lrg'}>Description</span>
            <span className={'alt-label-lrg'}>Token</span>
        </div>

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

    </main>
</div>;

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
