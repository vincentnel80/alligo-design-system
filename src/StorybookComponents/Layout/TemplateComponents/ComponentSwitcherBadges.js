import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './component-switcher.scss';
//import '../../Badges/badges.scss';

const ComponentSwitcherBadges = () => {
    // NEw
    const [selects, setSelects] = useState('desktop');
    const [variations, setVariations] = useState('standard');
    const [size, setSize] = useState('large');
    const [code, setCode] = useState('one');
    const [badgeName, setBadgeName] = useState('basic');




    const getInitialState = () => {
        const value = 'bg-white';
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);

        console.log(setValue(e.target.value),"setValue");
    };

    const handleChangeView = (e) => {
        setSelects(e.target.value);

        console.log(selects,"setSelects");
    };

    const handleChangeVariations = (e) => {
        setVariations(e.target.value);

        console.log(variations,"setVariations");
    };

    const handleChangeSize = (e) => {
        setVariations(e.target.value);

        console.log(size,"handleChangeSize");
    };

    const handleChangeCode = (e) => {
        setCode(e.target.value);

        console.log(e.target.value,"setCode");
    };

    const handleChangeBadgeName = (e) => {
        setBadgeName(e.target.value);

        console.log(e.target.value,"setBadgeName");
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
                    <select name="view" value={selects} onChange={handleChangeView} className={'body-sm'}>
                        <option value="desktop">Desktop</option>
                        <option value="mobile">Mobile</option>
                    </select>

                    <select name="badgeName" value={badgeName} onChange={handleChangeBadgeName} className={'body-sm'}>
                        <option value="basic">Basic</option>
                        <option value="dot">Dot</option>
                        <option value="purchase-info">Purchase Info</option>
                        {/* <option value="number">Number</option> */}
                        <option value="product">Product</option>
                    </select>

                    {/* <select className={'body-sm'} id="variety" name="variety">*/}
                        <select name="variant" value={variations} onChange={handleChangeVariations} className={'body-sm'}>
                        <option value="standard">Standard</option>
                        <option value="variation">Variation</option>
                    </select>

                    {/* <select id="name" name="name" className={'body-sm'}>
                        {/* Keep default or not */}
                        {/*<option value="default">Theme: Default</option>*/}
                    {/*  <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="blank">Blank</option>
                        <option value="primary-inverted">Primary Inverted</option>
                        <option value="secondary-inverted">Secondary Inverted</option>
                        <option value="blank-inverted">Blank Inverted</option>
                        <option value="system">System</option>
                        <option value="system-toggled">System Toggled</option>
                    </select>  */}

                    {/* <select className={'body-sm'} id="size" name="size"> */}
                    {/*   <select name="size" value={size} onChange={handleChangeSize} className={'body-sm'}>
                        <option value="large">Large</option>
                        <option value="medium">Medium</option>
                        <option value="small">Small</option>
                        <option value="x-small">X-small</option>
                    </select>
                    */}


                    <select className={'body-sm'} id="background" name="background" value={value} onChange={handleChange}>
                        <option value="bg-white">Background Default (White)</option>
                        <option value="bg-dark">Dark</option>
                    </select>
                    {/*
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                */}

                </div> {/* end component-switcher-button-container */}

                <div className={`component-container-for-elements ${value}`}>
                    {/* pipe not working is this correct */}
                    {selects === 'desktop' && badgeName === 'basic' && variations === 'standard' &&
                        <div className={'badges-container'}>
                            <div class="row desktop">
                                <div class="column">
                                    <div className={'flex-col-rows'}>

                                    <div className={'top-container'}>
                                    <div className="badge-base neutral">
                                    <span className={'/*alt-label-sm*/ badges-change'}>
                                    Neutral
                                    </span>
                                    </div>
                                    </div>

                                    <div className={'top-container'}>
                                    <div className="badge-base neutral-emphasis-medium">
                                    <span className={'badges-change'}>
                                    Neutral
                                    </span>
                                    </div>
                                    </div>

                                    <div className={'top-container'}>
                                    <div className="badge-base neutral-emphasis-light">
                                    <span className={'badges-change'}>
                                    Neutral
                                    </span>
                                    </div>
                                    </div>


                                    </div>
                                </div>
                                    <div class="column">
                                    <div className={'flex-col-rows'}>

                                    <div className={'top-container'}>
                                    <div className="badge-base info">
                                    <span className={'badges-change'}>
                                    Info
                                    </span>
                                    </div>
                                    </div>

                                    <div className={'top-container'}>
                                    <div className="badge-base info-emphasis-medium">
                                    <span className={'badges-change'}>
                                    Info
                                    </span>
                                    </div>
                                    </div>

                                    <div className={'top-container'}>
                                    <div className="badge-base info-emphasis-light">
                                    <span className={'badges-change'}>
                                    Info
                                    </span>
                                    </div>
                                    </div>


                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


                                        <div className={'top-container'}>
                                        <div className="badge-base success">
                                        <span className={'badges-change'}>
                                        Success
                                        </span>
                                        </div>
                                        </div>

                                        <div className={'top-container'}>
                                        <div className="badge-base success-emphasis-medium">
                                        <span className={'badges-change'}>
                                        Success
                                        </span>
                                        </div>
                                        </div>

                                        <div className={'top-container'}>
                                        <div className="badge-base success-emphasis-light">
                                        <span className={'badges-change'}>
                                        Success
                                        </span>
                                        </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


                                        <div className={'top-container'}>
                                        <div className="badge-base warning">
                                        <span className={'badges-change'}>
                                        Warning
                                        </span>
                                        </div>
                                        </div>

                                        <div className={'top-container'}>
                                        <div className="badge-base warning-emphasis-medium">
                                        <span className={'badges-change'}>
                                        Warning
                                        </span>
                                        </div>
                                        </div>

                                        <div className={'top-container'}>
                                        <div className="badge-base warning-emphasis-light">
                                        <span className={'badges-change'}>
                                        Warning
                                        </span>
                                        </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


                                        <div className={'top-container'}>
                                        <div className="badge-base danger">
                                        <span className={'badges-change'}>
                                        Danger
                                        </span>
                                        </div>
                                        </div>

                                        <div className={'top-container'}>
                                        <div className="badge-base danger-emphasis-medium">
                                        <span className={'badges-change'}>
                                        Danger
                                        </span>
                                        </div>
                                        </div>

                                        <div className={'top-container'}>
                                        <div className="badge-base danger-emphasis-light">
                                        <span className={'badges-change'}>
                                        Danger
                                        </span>
                                        </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {selects === 'mobile' && badgeName === 'basic' && variations === 'standard' &&
                        <div className={'badges-container'}>
                            <div class="row desktop">
                                <div class="column">
                                    <div className={'flex-col-rows'}>

                                        <div className={'top-container'}>
                                            <div className="badge-base neutral">
                                    <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                    Neutral
                                    </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base neutral-emphasis-medium">
                                    <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                    Neutral
                                    </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base neutral-emphasis-light">
                                    <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                    Neutral
                                    </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>

                                        <div className={'top-container'}>
                                            <div className="badge-base info">
                                    <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                    Info
                                    </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base info-emphasis-medium">
                                    <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                    Info
                                    </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base info-emphasis-light">
                                    <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                    Info
                                    </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


                                        <div className={'top-container'}>
                                            <div className="badge-base success">
                                        <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Success
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base success-emphasis-medium">
                                        <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Success
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base success-emphasis-light">
                                        <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Success
                                        </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


                                        <div className={'top-container'}>
                                            <div className="badge-base warning">
                                        <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Warning
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base warning-emphasis-medium">
                                        <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Warning
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base warning-emphasis-light">
                                        <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Warning
                                        </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


                                        <div className={'top-container'}>
                                            <div className="badge-base danger">
                                        <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Danger
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base danger-emphasis-medium">
                                        <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Danger
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base danger-emphasis-light">
                                        <span className={'alt-label-sm'}  style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Danger
                                        </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {/* basic variation */}
                    {/* Desktop + variation */}
                    {selects === 'desktop' && badgeName === 'basic' && variations === 'variation' &&

                        <div className={'badges-container'}>
                            <div class="row desktop">
                                <div class="column">
                                    <div className={'flex-col-rows'}>


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

                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


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

                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


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



                                    </div>
                                </div>
                                <div class="column">
                                <div className={'flex-col-rows'}>



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


                                    </div>
                                </div>

                            </div>

                        </div>
                    }
                    {/* mobile basic buttons with variation */}
                    {selects === 'mobile' && badgeName === 'basic' && variations === 'variation' &&

                        <div className={'badges-container'}>
                            <div class="row desktop">
                                <div class="column">
                                    <div className={'flex-col-rows'}>


                                        <div className={'top-container'}>
                                            <div className="badge-base info">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>info</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Info
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base info-emphasis-medium">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>info</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Info
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base info-emphasis-light">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>info</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Info
                                        </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


                                        <div className={'top-container'}>
                                            <div className="badge-base success">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>check_circle</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Success
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base success-emphasis-medium">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>check_circle</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Success
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base success-emphasis-light">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>check_circle</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Success
                                        </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>


                                        <div className={'top-container'}>
                                            <div className="badge-base warning">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>warning</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Warning
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base warning-emphasis-medium">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>warning</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Warning
                                        </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base warning-emphasis-light">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>warning</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                        Warning
                                        </span>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div class="column">
                                    <div className={'flex-col-rows'}>



                                        <div className={'top-container'}>
                                            <div className="badge-base danger">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>error</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                Danger
                                </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base danger-emphasis-medium">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>error</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                Danger
                                </span>
                                            </div>
                                        </div>

                                        <div className={'top-container'}>
                                            <div className="badge-base danger-emphasis-light">
                                                <i className="material-symbols-outlined" style={{fontSize:'12px',lineHeight:'12px'}}>error</i>
                                                <span className={'alt-label-sm'} style={{fontSize:'12px',lineHeight:'12px'}}>
                                Danger
                                </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>
                    }
                    {/* dots */}
                    {selects === 'desktop' && badgeName === 'dot' &&
                        <div className={'badges-container'}>
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
                        </div>
                    }

                    {selects === 'mobile' && badgeName === 'dot' &&
                        <div className={'badges-container'}>
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
                        </div>
                    }
                    {/* end dots */}

                    {/* purchase info */}
                    {selects === 'desktop' && badgeName === 'purchase-info' && variations === 'standard' &&
                        <div className={'badges-container'}>

                            <div class="row desktop">



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


                            </div>

                        </div>
                    }

                    {selects === 'desktop' && badgeName === 'purchase-info' && variations === 'variation' &&
                        <div className={'badges-container'}>
                            <h2> purchase variation</h2>
                        </div>
                    }

                    {selects === 'mobile' && badgeName === 'purchase-info' && variations === 'standard' &&
                        <div className={'badges-container'}>
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
                        </div>
                    }

                    {/* number  */}
                    {/*selects === 'desktop' && badgeName === 'number' && variations === 'standard' &&
                        <div className={'badges-container'}>
                            <h2> Number</h2>
                        </div>
                    */}

                    {/*selects === 'desktop' && badgeName === 'number' && variations === 'variation' &&
                        <div className={'badges-container'}>
                            <h2> Number variation</h2>
                        </div>
                    */}

                    {selects === 'desktop' && badgeName === 'product' && variations === 'standard' &&
                        <div className={'badges-container'}>

                            <div class="row desktop">
                                <div className={'assortment-badges-container-sb'}>
                                    <div className={"grid-badges-new"}>
                                        <div className={"product-badge-container-flex"}>
                                            <div className={"discount-container label-sm"}>
                                                <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">
                                <div className={'assortment-badges-container-sb'}>
                                    <div className={"grid-badges-new"}>
                                        <div className={"product-badge-container-flex"}>
                                            <div className={"discount-container label-sm"}>
                                                <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                                            </div>
                                            <div className={"outlet-content label-sm"}>
                                                <p>Utförsäljning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">
                                <div className={'assortment-badges-container-sb'}>
                                    <div className={"grid-badges-new"}>
                                        <div className={"product-badge-container-flex"} style={{display:'inline-block'}}>
                                            <div className={"discount-container label-sm"}>
                                                <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                                            </div>
                                            <div className={"outlet-content label-sm"}>
                                                <p>Utförsäljning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">
                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test'}>
                                        <i className="material-symbols-outlined">verified</i>
                                        <p className={'label-sm'}>Standardassortment</p>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">

                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test'}>
                                        <i className="material-symbols-outlined">assignment_turned_in</i>
                                        <p className={'label-sm'}>Avtalssortiment</p>
                                    </div>
                                </div>

                            </div>

                            <div class="row desktop">

                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test'}>
                                        <i className="material-symbols-outlined">sell</i>
                                        <p className={'label-sm'}>Bra Pris</p>
                                    </div>
                                </div>

                            </div>

                            <div class="row desktop">
                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test'}>
                                        <i className="material-symbols-outlined">verified</i>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">
                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test'}>
                                        <i className="material-symbols-outlined">assignment_turned_in</i>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">
                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test'}>
                                        <i className="material-symbols-outlined">sell</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {/* product - no variation - mobile */}
                    {selects === 'mobile' && badgeName === 'product' && variations === 'standard' &&
                        <div className={'badges-container'}>


                            <div class="row desktop">
                                <div className={'assortment-badges-container-sb'}>
                                    <div className={"grid-badges-new-mobile"}>
                                        <div className={"product-badge-container-flex"}>
                                            <div className={"discount-container label-sm"}>
                                                <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">
                                <div className={'assortment-badges-container-sb'}>
                                    <div className={"grid-badges-new-mobile"}>
                                        <div className={"product-badge-container-flex"}>
                                            <div className={"discount-container label-sm"}>
                                                <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                                            </div>
                                            <div className={"outlet-content label-sm"}>
                                                <p>Utförsäljning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">
                                <div className={'assortment-badges-container-sb'}>
                                    <div className={"grid-badges-new-mobile"}>
                                        <div className={"product-badge-container-flex"} style={{display:'inline-block'}}>
                                            <div className={"discount-container label-sm"}>
                                                <p className={"discount-new label-sm"}> <span className={"discount-amount-new"}>40</span>%</p> <p>Rabatt</p>
                                            </div>
                                            <div className={"outlet-content label-sm"}>
                                                <p>Utförsäljning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row desktop">
                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test-mobile'}>
                                        <i className="material-symbols-outlined">verified</i>
                                        <p className={'label-sm'}>Standardassortment</p>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">

                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test-mobile'}>
                                        <i className="material-symbols-outlined">assignment_turned_in</i>
                                        <p className={'label-sm'}>Avtalssortiment</p>
                                    </div>
                                </div>

                            </div>

                            <div class="row desktop">

                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test-mobile'}>
                                        <i className="material-symbols-outlined">sell</i>
                                        <p className={'label-sm'}>Bra Pris</p>
                                    </div>
                                </div>

                            </div>

                            <div class="row desktop">
                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test-mobile'}>
                                        <i className="material-symbols-outlined">verified</i>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">
                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test-mobile'}>
                                        <i className="material-symbols-outlined">assignment_turned_in</i>
                                    </div>
                                </div>
                            </div>

                            <div class="row desktop">
                                <div className={'top-container'} style={{marginTop: '12px'}}>
                                    <div className={'inner-test-mobile'}>
                                        <i className="material-symbols-outlined">sell</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {selects === 'desktop' && badgeName === 'product' && variations === 'variation' &&
                        <div className={'badges-container'}>
                            <h2>Product Variation</h2>
                        </div>
                    }
                    {/* End Desktop + Variation */}



                </div> {/* end component-container-for-elements */}

                <div className={'component-container-for-code'}>
                    <div className={'component-container-for-code-inner'}>
                    {selects === 'desktop' && code === 'one' && <pre><code className={'body-lrg'}><div>
                        <span style={{display: 'block'}}>&lt;span class='badge-base primary'&gt;</span>
                       <span style={{display: 'block'}}> &lt;span class='badge-text label-lrg&gt; </span>
                        Badge Text
                        <span style={{display: 'block'}}>&lt;/span&gt;</span>
                        <span style={{display: 'block'}}>&lt;/span&gt;</span>
                    </div></code></pre>}

                    </div>
                    </div> {/* end component-container-for-code */}

                {/*
<span className={"highlight-line"}>
<span className={"token tag"}>
<span className={"token tag"}>
<span className={"token punctuation"}>&lt;</span>
div
    <span className={"token punctuation"}>/&gt;</span>
</span>
</span>
</span>
<div style={{marginTop: '20px'}}></div>


<span className={"highlight-line"}>
<span className={"token tag"}>
<span className={"token tag"}>
<span className={"token punctuation"}>&lt;</span>
button  class="test class"
<span className={"token punctuation"}>&gt;</span>
</span>
</span>
</span>

<span className={"highlight-line"}>
<span className={"token tag"}>
<span className={"token tag"}>
<span className={"token punctuation"}>&lt;/</span>
button
<span className={"token punctuation"}>&gt;</span>
</span>
</span>
</span>
                */}

            </div>
        </>
    );
};

ComponentSwitcherBadges.propTypes = {
    /* fontClassName: PropTypes.string,
    itemDescription: PropTypes.string,
    itemExtraInformation: PropTypes.string,
    itemName: PropTypes.string,
    spacingSizeExample: PropTypes.string,
    textSnippet: PropTypes.string,
    tokenName: PropTypes.string, */
};

export default ComponentSwitcherBadges;
