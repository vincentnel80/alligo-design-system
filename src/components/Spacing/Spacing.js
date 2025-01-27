import React from 'react';

//import './system/spacing.scss'; not needed here

import FlexibleContentComponent from '../../shared/Layout/TemplateComponents/FlexibleContentComponent';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../../shared/Layout/TemplateComponents/SecondaryIntroComponent';

const Spacing = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>
        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'We use the below defined tokens to create a predictable and harmonious spacing for our interface.'}
            title={'Spacing'}
        />
        <SecondaryIntroComponent
            secondaryContent={'The spacing scale should be applied to all margins, padding properties and position coordinates, as well on both vertical and horizontal edges. \\nUse the spacing scale when building for instance individual components or page templates. It includes increments needed to create appropriate spatial relationships for detail-level designs. This scale must be applied and used within all Alligo components/designs. \\nThe spacing scale is based on an 8px grid with three half sizes (1, 2 & 4 for detail level and 12px spacing for complement).'}
            secondaryTitle={'Spacing Scale'}
        />
        <GridHeaderComponent/>
        <div className={'sb-grid-container'} role={'listbox'}>
        <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 0-Small'}
                spacingSizeExample={'space-0-none'}
                textSnippet={'0px'}
                tokenName={'space-0-none'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 1-Small'}
                spacingSizeExample={'space-1-small'}
                textSnippet={'1px'}
                tokenName={'space-1-small'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 2-Small'}
                spacingSizeExample={'space-2-small'}
                textSnippet={'2px'}
                tokenName={'space-2-small'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 4-Small'}
                spacingSizeExample={'space-4-small'}
                textSnippet={'4px'}
                tokenName={'space-4-small'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 8-Small'}
                spacingSizeExample={'space-8-small'}
                textSnippet={'8px'}
                tokenName={'space-8-small'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 12-Small'}
                spacingSizeExample={'space-12-small'}
                textSnippet={'12px'}
                tokenName={'space-12-small'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 16-Small'}
                spacingSizeExample={'space-16-small'}
                textSnippet={'16px'}
                tokenName={'space-16-small'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 24-Medium'}
                spacingSizeExample={'space-24-medium'}
                textSnippet={'24px'}
                tokenName={'space-24-medium'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 32-Large'}
                spacingSizeExample={'space-32-large'}
                textSnippet={'32px'}
                tokenName={'space-32-large'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 40-Large'}
                spacingSizeExample={'space-40-large'}
                textSnippet={'40px'}
                tokenName={'space-40-large'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 48-Large'}
                spacingSizeExample={'space-48-large'}
                textSnippet={'48px'}
                tokenName={'space-48-large'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 56-Large'}
                spacingSizeExample={'space-56-large'}
                textSnippet={'56px'}
                tokenName={'space-56-large'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 64-Large'}
                spacingSizeExample={'space-64-large'}
                textSnippet={'64px'}
                tokenName={'space-64-large'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={'XXX'}
                itemExtraInformation={''}
                itemName={'Space: 72-Large'}
                spacingSizeExample={'space-72-large'}
                textSnippet={'72px'}
                tokenName={'space-72-large'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 80-Large'}
                spacingSizeExample={'space-80-large'}
                textSnippet={'80px'}
                tokenName={'space-80-large'}
            />
            <FlexibleContentComponent
                fontClassName={'body-md'}
                itemDescription={''}
                itemExtraInformation={''}
                itemName={'Space: 112-Large'}
                spacingSizeExample={'space-112-large'}
                textSnippet={'112px'}
                tokenName={'space-112-large'}
            />

        </div>
    </main>
</div>;

export default Spacing;
