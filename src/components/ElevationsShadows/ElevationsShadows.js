import PropTypes from 'prop-types';
import React from 'react';

import FlexibleContentComponent from '../../shared/Layout/TemplateComponents/FlexibleContentComponent';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../../shared/Layout/TemplateComponents/SecondaryIntroComponent';

import './elevations-shadows.scss';

const ElevationsShadows = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>
        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'Shadows express the degree of elevation between surfaces. \\nBoth a shadow’s size and amount of softness or diffusion express the degree of distance between two surfaces. For example, a surface with a shadow that is small and sharp indicates a surface’s close proximity to the surface behind it. Larger, softer shadows express more distance.'}
            title={'Shadows & Elevation'}
        />

        {/* Top Shadows */}
        <SecondaryIntroComponent
            secondaryContent={'Top & Bottom are shadow levels that simulates different elevations on a surface above the UI:s surface. They are used to indicate when a surface is placed or moves beneath a higher leveled surface.'}
            secondaryTitle={'Shadow Top'}
        />
        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'XXX'}
                itemExtraInformation={''}
                itemName={'Top 20% Elevation'}
                spacingSizeExample={'elevation-top-20 elevation-container'}
                textSnippet={'box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-top-20'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'XXX'}
                itemExtraInformation={''}
                itemName={'Top 40% Elevation'}
                spacingSizeExample={'elevation-top-40 elevation-container'}
                textSnippet={'box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-top-40'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'Used on our site header. Used on tooltip.'}
                itemExtraInformation={''}
                itemName={'Top 60% Elevation'}
                spacingSizeExample={'elevation-top-60 elevation-container'}
                textSnippet={'box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-top-60'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'Used on our Dropdowns and Exposed DropDowns.'}
                itemExtraInformation={''}
                itemName={'Top 80% Elevation'}
                spacingSizeExample={'elevation-top-80 elevation-container'}
                textSnippet={'box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-top-80'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'Used on our Dropdowns and Exposed DropDowns.'}
                itemExtraInformation={''}
                itemName={'Top 100% Elevation'}
                spacingSizeExample={'elevation-top-100 elevation-container'}
                textSnippet={'box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-top-100'}
            />
        </div>

        {/* Bottom Shadows */}
        <SecondaryIntroComponent
            secondaryContent={'Top & Bottom are shadow levels that simulates different elevations on a surface above the UI:s surface. They are used to indicate when a surface is placed or moves beneath a higher leveled surface.'}
            secondaryTitle={'Shadow Bottom'}
        />

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'XXX'}
                itemExtraInformation={''}
                itemName={'Bottom 20% Elevation'}
                spacingSizeExample={'elevation-bottom-20 elevation-container'}
                textSnippet={'box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-bottom-20'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'XXX'}
                itemExtraInformation={''}
                itemName={'Bottom 40% Elevation'}
                spacingSizeExample={'elevation-bottom-40 elevation-container'}
                textSnippet={'box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-bottom-40'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'XXX'}
                itemExtraInformation={''}
                itemName={'Bottom 60% Elevation'}
                spacingSizeExample={'elevation-bottom-60 elevation-container'}
                textSnippet={'box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-bottom-60'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={'XXX'}
                itemExtraInformation={''}
                itemName={'Bottom 80% Elevation'}
                spacingSizeExample={'elevation-bottom-80 elevation-container'}
                textSnippet={'box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-bottom-80'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'XXX'}
                itemExtraInformation={''}
                itemName={'Bottom 100% Elevation'}
                spacingSizeExample={'elevation-bottom-100 elevation-container'}
                textSnippet={'box-shadow: 0px -16px 24px 0px rgba(0, 0, 0, 0.1); \\nbox-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'elevation-bottom-100'}
            />
        </div>


        {/* Shadow Left and Right */}
        <SecondaryIntroComponent
            secondaryContent={'Left & Right are shadow levels that are used to simulate distance above the UI:s surface to left and right.'}
            secondaryTitle={'Shadow Left & Right'}
        />

        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'Adds a shadow to Drawers who moves in from the Left.'}
                itemExtraInformation={''}
                itemName={'Drawer Vertical Left'}
                spacingSizeExample={'drawer-vert-left elevation-container'}
                textSnippet={'25px 0px 25px 0px rgba(0, 0, 0, 0.03);'}
                tokenName={'drawer-vert-left'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'Adds a shadow to Drawers who moves in from the Right.'}
                itemExtraInformation={''}
                itemName={'Drawer Vertical Right'}
                spacingSizeExample={'drawer-vert-right elevation-container'}
                textSnippet={'box-shadow: -25px 0px 25px 0px rgba(0, 0, 0, 0.03);'}
                tokenName={'drawer-vert-right'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'Adds a shadow on levels above menu level 1. It starts with level 2 and so on.'}
                itemExtraInformation={''}
                itemName={'Inline Vertical Drawer Menu - Level 02 ->'}
                spacingSizeExample={'drawer-vert-left elevation-container'}
                textSnippet={'box-shadow: 4px 0px 10px 0px rgba(0, 0, 0, 0.05);'}
                tokenName={'drawer-vert-left'}
            />
        </div>

        {/* Component Specific shadows */}
        <SecondaryIntroComponent
            secondaryContent={'Shadows used together with a specific component.'}
            secondaryTitle={'Shadow Component Specific'}
        />
        <GridHeaderComponent/>

        <div className={'sb-grid-container'} role={'listbox'}>
            <FlexibleContentComponent
                fontClassName={'body-md elevation-properties'}
                itemDescription={'The shadow on the Switch component to indicate raised level.'}
                itemExtraInformation={''}
                itemName={'Inline Vertical Drawer Menu - Level 02 ->'}
                spacingSizeExample={'shadow-component-specific elevation-container'}
                textSnippet={'box-shadow: 0px 4px 8px 0px rgba(48, 49, 51, 0.1); \\nbox-shadow: 0px 1px 1px 0px rgba(48, 49, 51, 0.24); \\nbox-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.053);'}
                tokenName={'shadow-component-specific'}
            />
        </div>

    </main>
</div>;

ElevationsShadows.propTypes = {
    fontClassName: PropTypes.string,
    fontDescription: PropTypes.string,
    fontInformation: PropTypes.string,
    fontName: PropTypes.string,
    textSnippet: PropTypes.string,
    tokenName: PropTypes.string,
};

export default ElevationsShadows;
