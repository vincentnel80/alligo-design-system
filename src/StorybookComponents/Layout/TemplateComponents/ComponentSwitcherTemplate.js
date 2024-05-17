import PropTypes from 'prop-types';
import React, { useState } from 'react';

import BadgesBasicSubComponent from '../../Badges/Basic/BadgesBasicSubComponent';
import BadgesBasicSubCodeGrabComponent from '../../Badges/Basic/BadgesBasicSubCodeGrabComponent';
import BadgesBasicIconSubCodeGrabComponent from '../../Badges/Basic/BadgesBasicIconSubCodeGrabComponent';
import BadgesDotSubComponent from '../../Badges/Dot/BadgesDotSubComponent';
import BadgesProductSubComponent from '../../Badges/Product/BadgesProductSubComponent';
import BadgesDiscountSubComponent from '../../Badges/Discount/BadgesDiscountSubComponent';
import BadgesPurchaseInfoSubComponent from '../../Badges/PurchaseInfo/BadgesPurchaseInfoSubComponent';
import BadgesNumberSubComponent from '../../Badges/Number/BadgesNumberSubComponent';


import './component-switcher.scss';

const ComponentSwitcherTemplate = () => {
    // NEw
    const [view, setView] = useState('desktop');
    const [variants, setVariants] = useState('basic');
    const [code, setCode] = useState('one');


    const getInitialState = () => {
        const value = 'middle';
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);

        console.log(setValue(e.target.value),"setValue");
    };

    const handleChangeView = (e) => {
        setView(e.target.value);

        console.log(view,"setView");
    };

    const handleChangeVariants = (e) => {
        setVariants(e.target.value);

        console.log(variants,"setVariants");
    };


    const handleChangeCode = (e) => {
        setCode(e.target.value);

        console.log(e.target.value,"setCode");
    };

    document.querySelectorAll(".chamad").forEach(e => {
        e.onclick = function() {
            console.log("clicked: " + e.id);
        }
    });

    return (
        <>

            {/*  <div >
                <select className={'super-attribute-select body-sm'} value={value} onChange={handleChange}>
                    <option value="bg-dark">Dark</option>
                    <option value="bg-white">White</option>
                </select>
                <p className={value}>{`You selected ${value}`}</p>
            </div>
*/}
            <div className={'component-switcher-container'}>

                <div className={'component-switcher-button-container'}>
                    {/* <label htmlFor="cars">Choose a car:</label> */}
                    {/*<h2>{selects}</h2>*/}
                    {/* <select value={selects} onChange={e=>setSelects(e.target.value)} name="view">*/}
                        <select name="view" value={view} onChange={handleChangeView} className={'body-sm'}>
                        <option value="desktop">Desktop</option>
                        <option value="mobile">Mobile</option>
                    </select>

                    <select name="variant" value={variants} onChange={handleChangeVariants} className={'body-sm'}>
                        <option value="basic">Example: Basic </option>
                        <option value="basic-icon">Example: Basic with Icon</option>
                        <option value="dot">Example: Dot</option>
                        <option value="product">Example: Product Label with Icon</option>
                        <option value="product-icon">Example: Product Icon </option>
                        <option value="discount">Example: Discount</option>
                        <option value="purchase-info">Example: Purchase Info</option>
                        <option value="number">Example: Number</option>
                    </select>


                    {/*   {view === 'desktop' && variants === 'primary' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'primary-icon' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'primary-inverted' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'primary-inverted-icon' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'secondary' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'secondary-icon' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'secondary-inverted' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'secondary-inverted-icon' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'blank' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'blank-icon' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'blank-inverted' && <h1>Messages: {view}: mobile elements</h1>} */}
                    {/*   {view === 'desktop' && variants === 'blank-inverted-icon' && <h1>Messages: {view}: mobile elements</h1>} */}

                    {/*   {view === 'mobile' && <h1>Messages: {view}: mobile elements</h1>} */}



                    <select className={'body-sm'} id="background" name="background" value={value} onChange={handleChange}>
                        <option value="bg-white">Background Default (White)</option>
                        <option value="middle">Middle</option>
                        <option value="bg-dark">Dark</option>
                    </select>


                </div> {/* end component-switcher-button-container */}

                {/* what is value??? */}
                <div className={`component-container-for-elements ${value}`}>

                    { (variants === 'basic' || variants === 'basic-icon') &&
                        <BadgesBasicSubComponent
                        view={view}
                        variants={variants}
                        />
                    }

                    { variants === 'dot' &&
                        <BadgesDotSubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { variants === 'product' &&
                        <BadgesProductSubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { variants === 'product-icon' &&
                        <BadgesProductSubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { variants === 'discount' &&
                        <BadgesDiscountSubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { variants === 'purchase-info' &&
                        <BadgesPurchaseInfoSubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { variants === 'number' &&
                        <BadgesNumberSubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                </div> {/* end component-container-for-elements */}

                <div className={'component-container-for-code'}>
                    <div className={'component-container-for-code-inner'}>
                        { variants === 'basic' &&
                            <BadgesBasicSubCodeGrabComponent/>
                        }
                        { variants === 'basic-icon' &&
                            <BadgesBasicIconSubCodeGrabComponent/>
                        }

                    </div>
                    </div> {/* end component-container-for-code */}


            </div>
        </>
    );
};

///// if view etc is not in parent seems to be ok, but fails in children
ComponentSwitcherTemplate.propTypes = {
    // view: PropTypes.string,
    /* itemDescription: PropTypes.string,
     itemExtraInformation: PropTypes.string,
     itemName: PropTypes.string,
     spacingSizeExample: PropTypes.string,
     textSnippet: PropTypes.string,
     tokenName: PropTypes.string, */
};

export default ComponentSwitcherTemplate;
