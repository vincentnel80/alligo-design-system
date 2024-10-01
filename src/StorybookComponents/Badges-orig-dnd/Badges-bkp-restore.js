import React from 'react';

// orig import ComponentSwitcher from '../Layout/TemplateComponents/ComponentSwitcher';
import ComponentSwitcherBadges from '../Layout/TemplateComponents/ComponentSwitcherBadges';
import MainIntroComponent from '../Layout/TemplateComponents/MainIntroComponent';

import SecondaryIntroComponent from '../Layout/TemplateComponents/SecondaryIntroComponent';


import './badges.scss';

const Badges = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>
        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'Badges and tags are visually similar, but tags are interactive and badges are not'}
            title={'Badge'}
        />
        <SecondaryIntroComponent
            secondaryContent={'Use a badge to indicate status, item count, items requesting attention, or featured content. \\nBadges should not rely on color alone to convey meaning (see the section on Color below), as color is not a universal experience for everyone.\\nCombining multiple elements - text, emphasis, and icons - in each badge can optimize visual understanding.All badges come in version for Desktop & Mobile though Badge Dot is available in Large, Medium and Small. \\nBadge comes in 5 Variants:'}
            secondaryTitle={'Usage'}
        />

           <ComponentSwitcherBadges/>

        <div className={'badges-container'}>

            {/* this is a potential new way of doing things */}
            {/* but it does not work out di to parent being long - but singular and no icon*/}
            <div className="badge-base neutral">
                <span className={'alt-label-sm'}>
                    Neutral
                </span>
            </div>

            {/* correct way maybe */}
            {/* color vars of neutral no icon */}
            <div className={'top-container'}>
                <div className="badge-base neutral">
                    <span className={'alt-label-sm'}>
                        Neutral
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base neutral-emphasis-medium">
                    <span className={'alt-label-sm'}>
                        Neutral
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base neutral-emphasis-light">
                    <span className={'alt-label-sm'}>
                        Neutral
                    </span>
                </div>
            </div>

            {/* mobile for above starts here */}
            <div className={'top-container'}>
                <div className="badge-base badge-sb-size neutral">
                    <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                        Neutral
                    </span>
                </div>
            </div>
            {/* badge for mobile SB only */}

            {/* end single Neutral */}

            {/* start single infp*/}
            <div className="badge-base info">
                <span className={'alt-label-sm'}>
                    Info
                </span>
            </div>

            <div className={'top-container'}>
                <div className="badge-base info">
                    <span className={'alt-label-sm'}>
                        Info
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base info-emphasis-medium">
                    <span className={'alt-label-sm'}>
                        Info
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base info-emphasis-light">
                    <span className={'alt-label-sm'}>
                        Info
                    </span>
                </div>
            </div>

            {/* mobile */}


            {/* end single info */}

            {/* start success */}
            <div className="badge-base success">
                <span className={'alt-label-sm'}>
                    Success
                </span>
            </div>

            <div className={'top-container'}>
                <div className="badge-base success">
                    <span className={'alt-label-sm'}>
                        Success
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base success-emphasis-medium">
                    <span className={'alt-label-sm'}>
                        Success
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base success-emphasis-light">
                    <span className={'alt-label-sm'}>
                        Success
                    </span>
                </div>
            </div>

            {/* mobile */}
            {/* End success */}

            {/* start warning */}
            <div className="badge-base warning">
                <span className={'alt-label-sm'}>
                    Warning
                </span>
            </div>

            <div className={'top-container'}>
                <div className="badge-base warning">
                    <span className={'alt-label-sm'}>
                        Warning
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base warning-emphasis-medium">
                    <span className={'alt-label-sm'}>
                        Warning
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base warning-emphasis-light">
                    <span className={'alt-label-sm'}>
                        Warning
                    </span>
                </div>
            </div>

            {/* mobile */}
            {/* end warning */}

            {/* start danger */}
            <div className="badge-base danger">
                <span className={'alt-label-sm'}>
                    Danger
                </span>
            </div>

            <div className={'top-container'}>
                <div className="badge-base danger">
                    <span className={'alt-label-sm'}>
                        Danger
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base danger-emphasis-medium">
                    <span className={'alt-label-sm'}>
                        Danger
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base danger-emphasis-light">
                    <span className={'alt-label-sm'}>
                        Danger
                    </span>
                </div>
            </div>

            {/* mobile */}
            {/* end danger */}

            {/* start badges with icons */}
            {/* Info */}
            <div className="badge-base info">
                <i className="material-symbols-outlined">info</i>
                {/* p or span */}
                <span className={'alt-label-sm'}>
                    Info
                </span>
            </div>

            <div className={'top-container'}>
                <div className="badge-base info">
                    <i className="material-symbols-outlined">info</i>
                    <span className={'alt-label-sm'}>
                        Info
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base info-emphasis-medium">
                    <i className="material-symbols-outlined">info</i>
                    <span className={'alt-label-sm'}>
                        Info
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base info-emphasis-light">
                    <i className="material-symbols-outlined">info</i>
                    <span className={'alt-label-sm'}>
                        Info
                    </span>
                </div>
            </div>

            {/* Success */}
            <div className="badge-base success icon-info">
                <i className="material-symbols-outlined">check_circle</i>
                {/* p or span */}
                <span className={'alt-label-sm'}>
                    Success
                </span>
            </div>

            <div className={'top-container'}>
                <div className="badge-base success">
                    <i className="material-symbols-outlined">check_circle</i>
                    <span className={'alt-label-sm'}>
                        Success
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base success-emphasis-medium">
                    <i className="material-symbols-outlined">check_circle</i>
                    <span className={'alt-label-sm'}>
                        Success
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base success-emphasis-light">
                    <i className="material-symbols-outlined">check_circle</i>
                    <span className={'alt-label-sm'}>
                        Success
                    </span>
                </div>
            </div>
            {/* warning */}
            <div className="badge-base warning icon-warning">
                <i className="material-symbols-outlined">warning</i>
                <span className={'alt-label-sm'}>
                    Warning
                </span>
            </div>

            <div className={'top-container'}>
                <div className="badge-base warning">
                    <i className="material-symbols-outlined">warning</i>
                    <span className={'alt-label-sm'}>
                        Warning
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base warning-emphasis-medium">
                    <i className="material-symbols-outlined">warning</i>
                    <span className={'alt-label-sm'}>
                        Warning
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base warning-emphasis-light">
                    <i className="material-symbols-outlined">warning</i>
                    <span className={'alt-label-sm'}>
                        Warning
                    </span>
                </div>
            </div>

            {/* Danger */}
            <div className="badge-base danger icon-warning">
                <i className="material-symbols-outlined">error</i>
                <span className={'alt-label-sm'}>
                    Danger
                </span>
            </div>

            <div className={'top-container'}>
                <div className="badge-base danger">
                    <i className="material-symbols-outlined">error</i>
                    <span className={'alt-label-sm'}>
                        Danger
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base danger-emphasis-medium">
                    <i className="material-symbols-outlined">error</i>
                    <span className={'alt-label-sm'}>
                        Danger
                    </span>
                </div>
            </div>

            <div className={'top-container'}>
                <div className="badge-base danger-emphasis-light">
                    <i className="material-symbols-outlined">error</i>
                    <span className={'alt-label-sm'}>
                        Danger
                    </span>
                </div>
            </div>

            {/* end badges with icons */}







            {/* this is option A - Option b is with text and then the icon... so how will that be manmaged ???? */}
            {/* keep as example
            <div className={'top-container'}>
                <div className="badge-base neutral">
                    <i className="material-symbols-outlined">error</i>
                    <span className={'alt-label-sm'}>
                        Danger
                    </span>
                </div>
            </div>
            */}

            {/* Start assortment labels */}
            <div className={'top-container'}>
                <div className={'inner-test'}>
                    <i className="material-symbols-outlined">verified</i>
                    <p className={'label-sm'}>Standardassortment</p>
                </div>
            </div>
            {/* mobile */}
            <div className={'top-container'}>
                <div className={'inner-test-mobile'}>
                    <i className="material-symbols-outlined">verified</i>
                    <p className={'label-sm'}>Standardassortment</p>
                </div>
            </div>

            <div className={'top-container'}>
                <div className={'inner-test'}>
                    <i className="material-symbols-outlined">verified</i>
                </div>
            </div>

            <div className={'top-container'}>
                <div className={'inner-test-mobile'}>
                    <i className="material-symbols-outlined">verified</i>
                </div>
            </div>
            {/* verified mobile */}

            <div className={'top-container'}>
                <div className={'inner-test'}>
                    <i className="material-symbols-outlined">assignment_turned_in</i>
                    <p className={'label-sm'}>Avtalssortiment</p>
                </div>
            </div>

            <div className={'top-container'}>
                <div className={'inner-test-mobile'}>
                    <i className="material-symbols-outlined">assignment_turned_in</i>
                    <p className={'label-sm'}>Avtalssortiment</p>
                </div>
            </div>

            <div className={'top-container'}>
                <div className={'inner-test'}>
                    <i className="material-symbols-outlined">assignment_turned_in</i>
                </div>
            </div>

            <div className={'top-container'}>
                <div className={'inner-test-mobile'}>
                    <i className="material-symbols-outlined">assignment_turned_in</i>
                </div>
            </div>

            <div className={'top-container'}>
                <div className={'inner-test'}>
                    <i className="material-symbols-outlined">sell</i>
                    <p className={'label-sm'}>Bra Pris</p>
                </div>
            </div>

            <div className={'top-container'}>
                <div className={'inner-test-mobile'}>
                    <i className="material-symbols-outlined">sell</i>
                    <p className={'label-sm'}>Bra Pris</p>
                </div>
            </div>

            <div className={'top-container'}>
                <div className={'inner-test'}>
                    <i className="material-symbols-outlined">sell</i>
                </div>
            </div>

            <div className={'top-container'}>
                <div className={'inner-test-mobile'}>
                    <i className="material-symbols-outlined">sell</i>
                </div>
            </div>

            <div className="badge-base neutral icon-danger">
                {/* verified_500 custom how to handle ?? */}
                <i className="material-symbols-outlined">verified</i>
                <i className="material-symbols-outlined">assignment_turned_in</i>
                {/* needs fill */}
                <i className="material-symbols-outlined">sell</i>
            </div>


            <h2>Example heading <span className={'badge bg-color-grey-50 body-sm'}><p>Neutral</p></span></h2>
            <h2>Example heading <span className={'badge bg-color-grey-20 body-sm'}><p>Neutral</p></span></h2>
            <h2>Example heading <span className={'badge bg-color-grey-05 body-sm'}><p>Neutral</p></span></h2>

            {/* DOTS */}
            {/* change this to flex maybe? */}
            {/* shall i use these colors or -- get em from colors in that case-- you need to rename classes */}
            <div className={''}>
                {/* based on Ikea */}
                {/* <span className={'status-danger'}></span>
                <span className={'status-danger-md'}></span>
                <span className={'status-danger-sm'}></span>
                <span className={'status-warning'}></span>
                <span className={'status-warning-md'}></span>
                <span className={'status-warning-sm'}></span>
                <span className={'status-success'}></span>
                <span className={'status-success-md'}></span>
                <span className={'status-success-sm'}></span>
                <span className={'status-info'}></span>
                <span className={'status-info-md'}></span>
                <span className={'status-info-sm'}></span>
                <span className={'status-neutral'}></span>
                <span className={'status-neutral-md'}></span>
                <span className={'status-neutral-sm'}></span>
                */}
            </div>
            <div class="row desktop">
                <div class="column">
                    <div className={'flex-col-rows'}>
                        <span className={'status-danger'}></span>
                        <span className={'status-danger-md'}></span>
                        <span className={'status-danger-sm'}></span>
                    </div>
                </div>
                <div class="column">
                    <div className={'flex-col-rows'}>
                        <span className={'status-warning'}></span>
                        <span className={'status-warning-md'}></span>
                        <span className={'status-warning-sm'}></span>
                    </div>
                </div>
                <div class="column">
                    <div className={'flex-col-rows'}>
                        <span className={'status-success'}></span>
                        <span className={'status-success-md'}></span>
                        <span className={'status-success-sm'}></span>
                    </div>
                </div>
                <div class="column">
                    <div className={'flex-col-rows'}>
                        <span className={'status-info'}></span>
                        <span className={'status-info-md'}></span>
                        <span className={'status-info-sm'}></span>
                    </div>
                </div>
                <div class="column">
                    <div className={'flex-col-rows'}>
                        <span className={'status-neutral'}></span>
                        <span className={'status-neutral-md'}></span>
                        <span className={'status-neutral-sm'}></span>
                    </div>
                </div>
            </div>

            <div class="row desktop">
                <div class="column">
                    <div class="shrink cell">
                        <div data-bind="" className={"web-stock-indicator indicator-circle-desktop bg-red"}></div>
                    </div>
                </div>
                <div class="column">2</div>
                <div class="column">3</div>
                <div class="column">4</div>
                <div class="column">5</div>
            </div>

            <div class="row tablet">
                <div class="column">
                    <div class="shrink cell">
                        <div data-bind="" className={"web-stock-indicator indicator-circle-tablet bg-red"}></div>
                    </div>
                </div>
                <div class="column">2</div>
                <div class="column">3</div>
                <div class="column">4</div>
                <div class="column">5</div>
            </div>

            <div class="row mobile">
                <div class="column">
                    <div class="shrink cell">
                        <div data-bind="" className={"web-stock-indicator indicator-circle-mobile bg-red"}></div>
                    </div>
                </div>
                <div class="column">2</div>
                <div class="column">3</div>
                <div class="column">4</div>
                <div class="column">5</div>
            </div>


            {/* Bra Köp Labels */}

            <div className={'bra-kop-container'}>
                <div className={'bra-kop-wrapper-outer'}>
                    <div className={'bra-kop-wrapper-inner'}>
                        <div className={'bra-kop-left'}>
                            <span className={'label-sm'}>Bra Kop</span>
                        </div>
                        <div className={'bra-kop-beak'}>
                            {/*  <span className={'body-md'}>beak</span>*/}
                        </div>
                    </div>

                    <div className={'bra-kop-righttext'}>
                        <span className={'body-sm'}>Köp 100 för 3,80 kr st, spara 1 210 kr!</span>
                    </div>
                </div>
            </div>

            <div className={'bra-kop-container-mobile'}>
                <div className={'bra-kop-wrapper-outer'}>
                    <div className={'bra-kop-wrapper-inner'}>
                        <div className={'bra-kop-left'}>
                            <span className={'label-sm'}>Bra Kop</span>
                        </div>
                        <div className={'bra-kop-beak'}>
                            {/*  <span className={'body-md'}>beak</span>*/}
                        </div>
                    </div>

                    <div className={'bra-kop-righttext'}>
                        <span className={'body-sm'}>Köp 100 för 3,80 kr st, spara 1 210 kr!</span>
                    </div>
                </div>
            </div>

            {/* Rabatt / Assortement labels */}
            <div className={'assortment-badges-container-sb'}>


                {/* new */}

                <div className={"grid-badges-new"}>
                    <div className={"product-badge-container-flex"}>
                        <div className={"discount-container label-sm"}>
                            <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                        </div>
                    </div>
                </div>

                {/* work from this one --- so maybe clean it up etc */}
                <div className={"grid-badges-new"}>
                    <div className={"product-badge-container-flex"} style={{marginTop:'10px'}}>
                        <div className={"discount-container label-sm"}>
                            <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                        </div>
                        <div className={"outlet-content label-sm"}>
                            <p>Utförsäljning</p>
                        </div>
                    </div>
                </div>
                {/* end the base to work from */}
                <div className={"grid-badges-new"}>
                    <div className={"product-badge-container-flex"} style={{marginTop:'10px'}}>
                        <div className={"discount-container label-sm"}>
                            <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                        </div>
                        <div className={"outlet-content label-sm"}>
                            <p>Utförsäljning</p>
                        </div>
                    </div>
                </div>

                <div className={"grid-badges-new"} style={{marginTop:'10px'}}>
                    <div className={"product-badge-container-flex"} style={{display:'inline-block'}}>
                        <div className={"discount-container label-sm"}>
                            <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                        </div>
                        <div className={"outlet-content label-sm"}>
                            <p>Utförsäljning</p>
                        </div>
                    </div>
                </div>

                <div className={"grid-badges-new-mobile"} style={{marginTop:'10px'}}>
                    <div className={"product-badge-container-flex"} style={{display:'inline-block'}}>
                        <div className={"discount-container label-sm"}>
                            <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                        </div>
                        <div className={"outlet-content label-sm"}>
                            <p>Utförsäljning</p>
                        </div>
                    </div>
                </div>

                {/* end new */}
                <h2>Mini Cart</h2>
<div><span className={"jsx-minicart-header-icon-count"}>1</span></div>


                {/*
                <div>
                    <span className={'product-outlet label-sm'}>Utförsäljning</span>
                </div>


                <div className={"product-badge discount-badge"}>
                    <div className={"content discount-container "}>
                        <p className={"discount label-sm"}><span className={"discount-amount"}>40</span>%</p>
                        <p>Rabatt</p>
                    </div>
                    <div className={"outlet-content discount-container"}>
                        <p>Utförsäljning</p>
                    </div>
                </div>

*/}


                {/* would be external container to place in page alignment etc */}
                {/* <div className={""}>
                    <div className={"discount-badge-container"}>
                        <p className={'label-sm'}>Utförsäljning</p>
                    </div>
                </div>*/}
            </div>
            {/* End Rabatt / Assortement labels */}

        </div>

    </main>
</div>;

export default Badges;
