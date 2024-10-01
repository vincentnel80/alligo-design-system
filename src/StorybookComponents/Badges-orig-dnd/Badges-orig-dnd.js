import React from 'react';

// orig import ComponentSwitcher from '../Layout/TemplateComponents/ComponentSwitcher';
//import ComponentSwitcherBadges from '../Layout/TemplateComponents/ComponentSwitcherBadges';
import ComponentSwitcherTemplate from '../Layout/TemplateComponents/ComponentSwitcherTemplate';
import MainIntroComponent from '../Layout/TemplateComponents/MainIntroComponent';

import SecondaryIntroComponent from '../Layout/TemplateComponents/SecondaryIntroComponent';


//import './badges.scss';
/*
import './basic.scss';
import './dot.scss';
import './number.scss';
import './purchase-info.scss';
import './product.scss';
import './discount.scss';
*/

const Badges = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>
        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'Badges and tags are visually similar, but tags are interactive and badges are not'}
            title={'Badge'}
        />


           <ComponentSwitcherTemplate/>

<div>
    <h2>Totally new</h2>

    {/*  Neutral Large*/}
    <div className={'badge-basic'}>
            <span className={'badge-message'}>
                Neutral
            </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-neutral-medium'}>
            <span className={'badge-message'}>
                Neutral
            </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-neutral-light'}>
            <span className={'badge-message'}>
                Neutral
            </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    {/* SB Mobile */}
    <div className={'badge-basic badge-basic-sb-mobile'}>
            <span className={'badge-message'}>
                Neutral
            </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic badge-basic-sb-mobile variant-neutral-medium'}>
            <span className={'badge-message'}>
                Neutral
            </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic badge-basic-sb-mobile variant-neutral-light'}>
            <span className={'badge-message'}>
                Neutral
            </span>
    </div>

    {/*  Info */}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-info-default'}>
            <span className={'badge-message'}>
                Info
            </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-info-medium'}>
            <span className={'badge-message'}>
                Info
            </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-info-light'}>
        <span className={'badge-message'}>
            Info
        </span>
    </div>
    {/* Info Mobile */}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic badge-basic-sb-mobile variant-info-default'}>
            <span className={'badge-message'}>
                Info
            </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic badge-basic-sb-mobile variant-info-medium'}>
            <span className={'badge-message'}>
                Info
            </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic badge-basic-sb-mobile variant-info-light'}>
        <span className={'badge-message'}>
            Info
        </span>
    </div>
    {/*  Success */}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-success-default'}>
        <span className={'badge-message'}>
            Success
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-success-medium'}>
        <span className={'badge-message'}>
            Success
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-success-light'}>
        <span className={'badge-message'}>
            Success
        </span>
    </div>
    {/*  Warning */}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-warning-default'}>
        <span className={'badge-message'}>
            Warning
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-warning-medium'}>
        <span className={'badge-message'}>
            Warning
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-warning-light'}>
        <span className={'badge-message'}>
            Warning
        </span>
    </div>
    {/*  Danger */}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-danger-default'}>
        <span className={'badge-message'}>
            Danger
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-danger-medium'}>
        <span className={'badge-message'}>
            Danger
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-danger-light'}>
        <span className={'badge-message'}>
            Danger
        </span>
    </div>

    <h2>With badge</h2>
    <div className={'badge-basic badge-icon'} >
        <i className={'material-symbols-outlined'}>info</i>
        <span className={'badge-message'}>
            Neutral
        </span>
    </div>
    {/* Info  with badge*/}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-info-default badge-icon'} >
        <i className={'material-symbols-outlined'}>info</i>
        <span className={'badge-message'}>
            Info
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-info-medium badge-icon'} >
        <i className={'material-symbols-outlined'}>info</i>
        <span className={'badge-message'}>
            Info
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-info-light badge-icon'} >
        <i className={'material-symbols-outlined'}>info</i>
        <span className={'badge-message'}>
            Info
        </span>
    </div>

    {/* info badge sb mobile */}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic badge-basic-sb-mobile variant-info-default badge-icon'} >
        <i className={'material-symbols-outlined'}>info</i>
        <span className={'badge-message'}>
            Info
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic badge-basic-sb-mobile variant-info-medium badge-icon'} >
        <i className={'material-symbols-outlined'}>info</i>
        <span className={'badge-message'}>
            Info
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic badge-basic-sb-mobile variant-info-light badge-icon'} >
        <i className={'material-symbols-outlined'}>info</i>
        <span className={'badge-message'}>
            Info
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    {/* Success */}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-success-default badge-icon'} >
        <i className={'material-symbols-outlined'}>check_circle</i>
        <span className={'badge-message'}>
            Success
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-success-medium badge-icon'} >
        <i className={'material-symbols-outlined'}>check_circle</i>
        <span className={'badge-message'}>
            Success
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-success-light badge-icon'} >
        <i className={'material-symbols-outlined'}>check_circle</i>
        <span className={'badge-message'}>
            Success
        </span>
    </div>
    {/* Warning */}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-warning-default badge-icon'} >
        <i className={'material-symbols-outlined'}>warning</i>
        <span className={'badge-message'}>
            Warning
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-warning-medium badge-icon'} >
        <i className={'material-symbols-outlined'}>warning</i>
        <span className={'badge-message'}>
            Warning
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-warning-light badge-icon'} >
        <i className={'material-symbols-outlined'}>warning</i>
        <span className={'badge-message'}>
            Warning
        </span>
    </div>
    {/* Danger */}
    {/*  <div className={'top-container'}>*/}
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-danger-default badge-icon'} >
        <i className={'material-symbols-outlined'}>error</i>
        <span className={'badge-message'}>
            Danger
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-danger-medium badge-icon'} >
        <i className={'material-symbols-outlined'}>error</i>
        <span className={'badge-message'}>
            Danger
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-basic variant-danger-light badge-icon'} >
        <i className={'material-symbols-outlined'}>error</i>
        <span className={'badge-message'}>
            Danger
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <h2>Discount</h2>
    <div className={'badge-discount'}>
        <span className={'label-sm discount-title'}>
        30% Rabatt
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-discount-variant-double'}>
        <div className={'badge-discount'}>
            <span className={'label-sm discount-title'}>
            30% Rabatt
            </span>
        </div>
        <div className={'badge-discount badge-discount-black'}>
            <span className={'label-sm discount-title '}>
            Utförsäljning
            </span>
        </div>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-discount-variant-stacked'}>
        <div className={'badge-discount'}>
            <span className={'label-sm discount-title'}>
            30% Rabatt
            </span>
        </div>

        <div className={'badge-discount badge-discount-black'}>
            <span className={'label-sm discount-title '}>
            Utförsäljning
            </span>
        </div>
    </div>
    <div style={{marginTop: '10px'}}></div>
    {/* storybook mobile */}
    <div className={'badge-discount badge-discount-sb-mobile'}>
        <span className={'label-sm discount-title'}>
        30% Rabatt
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-discount-variant-double'}>
        <div className={'badge-discount badge-discount-sb-mobile '}>
            <span className={'label-sm discount-title'}>
            30% Rabatt
            </span>
        </div>
        <div className={'badge-discount badge-discount-sb-mobile badge-discount-black'}>
            <span className={'label-sm discount-title '}>
            Utförsäljning
            </span>
        </div>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-discount-variant-stacked'}>
        <div className={'badge-discount badge-discount-sb-mobile'}>
            <span className={'label-sm discount-title'}>
            30% Rabatt
            </span>
        </div>

        <div className={'badge-discount badge-discount-sb-mobile badge-discount-black'}>
            <span className={'label-sm discount-title '}>
            Utförsäljning
            </span>
        </div>
    </div>
    {/* end storybook mobile */}
    <div style={{marginTop: '10px'}}></div>
    <h2>Badge Product</h2>
    <div className={'badge-product variant-standard-assortment'}>
        <div className={'material-icons-custom'}></div>
        <span className={'badge-product-title label-sm'}>Standardsortiment</span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-product variant-standard-assortment badge-product-sb-mobile'}>
        <div className={'material-icons-custom'}></div>
        <span className={'badge-product-title label-sm'}>Standardsortiment</span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-product variant-contract-assortment'}>
        <div className={'material-icons-custom'}></div>
        <span className={'badge-product-title label-sm'}>Avtalsortiment</span>
    </div>

    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-product variant-contract-assortment badge-product-sb-mobile'}>
        <div className={'material-icons-custom'}></div>
        <span className={'badge-product-title label-sm'}>Avtalsortiment</span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-product variant-great-price'}>
        <div className={'material-icons-custom'}></div>
        <span className={'badge-product-title label-sm'}>Bra pris</span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    {/* SB Mobile to go in this slot*/}
    <div className={'badge-product variant-great-price badge-product-sb-mobile'}>
        <div className={'material-icons-custom'}></div>
        <span className={'badge-product-title label-sm'}>Bra pris</span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <h2>Purchase info</h2>
    {/* True */}
    <div className={'badge-purchase-info'}>
        <div className={'purchase-info-wrapper'}>
            <div className={'title-container'}>
                <span className={'label-sm title'}>
                    Bra Köp
                </span>
            </div>
            <div className={'title-beak'}></div>
        </div>
        <span className={'body-sm description-text'}>
            Köp 100 för 3,80 kr st, spara 1 210 kr!
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-purchase-info'}>
        <div className={'purchase-info-wrapper'}>
            <div className={'title-container bg-col-mod-grey-50'}>
                <span className={'label-sm title'}>
                    Tänk på
                </span>
            </div>
            <div className={'title-beak beak-col-mod-grey-50'} ></div>
        </div>
        <span className={'body-sm description-text'}>
            Köp även till <span className={'modifier-underline'}>KNÄSKYDD GUMMI</span> eller <span className={'modifier-underline'}>KNÄSKYDD POLYETEN</span>, de ingår inte som standard.
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    {/* SB ONLY Mobile*/}
    <div className={'badge-purchase-info badge-purchase-info-sb-mob'}>
        <div className={'purchase-info-wrapper'}>
            <div className={'title-container'}>
                <span className={'label-sm title'}>
                    Bra Köp
                </span>
            </div>
            <div className={'title-beak'}></div>
        </div>
        <span className={'body-sm description-text'}>
            Köp 100 för 3,80 kr st, spara 1 210 kr!
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <div className={'badge-purchase-info badge-purchase-info-sb-mob'}>
        <div className={'purchase-info-wrapper'}>
            <div className={'title-container bg-col-mod-grey-50'}>
                <span className={'label-sm title'}>
                    Tänk på
                </span>
            </div>
            <div className={'title-beak beak-col-mod-grey-50'} ></div>
        </div>
        <span className={'body-sm description-text'}>
            Köp även till <span className={'modifier-underline'}>KNÄSKYDD GUMMI</span> eller <span className={'modifier-underline'}>KNÄSKYDD POLYETEN</span>, de ingår inte som standard.
        </span>
    </div>
    <div style={{marginTop: '10px'}}></div>

    <h2>Badge Numbers</h2>
    <div className={'badge-number'}>
        <span className={'numeric-content'}>1</span>
    </div>
    <div style={{marginTop: '10px'}}></div>
    <h2>Dots</h2>
    <div className='badge-dot dot-danger dot-large'></div>
    <div className='badge-dot dot-danger dot-medium'></div>
    <div className='badge-dot dot-danger dot-small'></div>
    <div className='badge-dot dot-warning dot-large'></div>
    <div className='badge-dot dot-warning dot-medium'></div>
    <div className='badge-dot dot-warning dot-small'></div>
    <div className='badge-dot dot-success dot-large'></div>
    <div className='badge-dot dot-success dot-medium'></div>
    <div className='badge-dot dot-success dot-small'></div>
    <div className='badge-dot dot-info dot-large'></div>
    <div className='badge-dot dot-info dot-medium'></div>
    <div className='badge-dot dot-info dot-small'></div>
    <div className='badge-dot dot-neutral dot-large'></div>
    <div className='badge-dot dot-neutral dot-medium'></div>
    <div className='badge-dot dot-neutral dot-small'></div>


</div>

    </main>
</div>;

export default Badges;
