import PropTypes from 'prop-types';
import React, { useState } from 'react';

import MainIntroComponent from '../Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../Layout/TemplateComponents/SecondaryIntroComponent';

import './barcode-scanner.scss';

const UxClass = 'jsx-button-as-radio';

/// set value here or not?
//const [state, setState] = useState("");

const BarcodeScanner = ({
                           classNames,
                           isActive,
                       }) => {
    /// example stuff
    let componentClass = UxClass;

    if (isActive) {
        componentClass += ` ${UxClass}--active`;
    }

    if (classNames) {
        componentClass += ` ${classNames}`;
    }
    /// end example stuff

    //const [state, setState] = useState(showVat); // correct but yea

    const tFunction = (e) => {
        const tValue = e.target.getAttribute("name");
        //setState(tValue)
        console.log("test");
    };

    /// Slide open and closed --- this one works ////
       /* const [isOpen, setIsOpen] = useState(false);
        const toggleDiv = () => {
            setIsOpen(!isOpen);
        };

        */

    //const [firstDivOpen, setFirstDivOpen] = useState(false);
    const [firstDivOpen, setFirstDivOpen] = useState(true);
    const [secondDivOpen, setSecondDivOpen] = useState(false);

    const toggleFirstDiv = () => {
        setFirstDivOpen(!firstDivOpen);
        console.log(firstDivOpen,"firstDivOpen");
    };

    const toggleSecondDiv = () => {
        setSecondDivOpen(!secondDivOpen);
    };

    return <div className={'sb-page-container'}>
        <main className={'sb-maincontent'}>
            <MainIntroComponent
                fontClassName={'body-xl body-xl--preamble'}
                introText={'this is the test text for the barcode scanner'}
                title={'Barcode scanner test page !!'}
            />

            <SecondaryIntroComponent
                secondaryContent={'This is test sub text for barcode scanner'}
                secondaryTitle={'Usage'}
            />

            {/*   <ComponentSwitcherTemplate/> */}

            <div className={'temp-page'}>

                {/* Open and close this one works */}
                {/*
                <button onClick={toggleDiv}>
                    {isOpen ? 'Close' : 'Open'} button test
                </button>
                <div className={`slide-div ${isOpen ? 'open' : 'closed'}`}>
                    <div className="content">
                        <h2>This is a test</h2>
                    </div>
                </div>
                */}

                <div>

                    <button onClick={toggleFirstDiv}>
                        {firstDivOpen ? 'Close First Div' : 'Open First Div'}
                    </button>
                    {firstDivOpen ? (
                        <div>
                            <div className="content">
                                <h1>Header</h1>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="content">
                                <h1>Now replaced by the search doody</h1>
                                <button onClick={toggleFirstDiv}>close</button>
                            </div>
                        </div>
                    )}

                    <div className={`slide-div ${firstDivOpen ? 'open' : 'closed'}`}>
                        {/* <button onClick={toggleFirstDiv}>
                            {firstDivOpen ? 'Close First Div' : 'Open First Div'}
                        </button> */}
                        <div className="content">
                            <h1>Search Div</h1>
                        </div>
                    </div>


                </div>

                {/* end styling from sys */}
                <div style={{marginTop: '20px'}}></div>
                <div style={{marginTop: '20px'}}></div>
                <div style={{marginTop: '20px'}}></div>
                {/* just for functoionality */}
                {/* header-func-test was a header but changed to div*/}
                <header className={'header-func-test'}>
                    <div className={'header-func-test-wrapper'}>
                        <div>
                            <i className={'material-symbols-outlined'}>menu</i>
                        </div>
                        <div>
                            <i className={'material-symbols-outlined'} onClick={tFunction}> search </i>
                        </div>
                    </div>
                    <div className={'search-test-func-wrapper'}>
                        <label htmlFor="fname">First name:</label>
                        <input type="text" id="fname" name="fname" />
                    </div>
                </header>
                {/* end just for functoionality */}

                <div style={{marginTop: '20px'}}></div>
                {/* div was header */}
                <div className={'header **'}>
                    <div className={'main-navigation-container **'}>
                        <div className={'left-navigation **'}>
                            <div className={'hamburger'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon">
                                        <g id="icon-path">
                                            <path d="M3.25 17.625V16.125H20.75V17.625H3.25ZM3.25 12.75V11.25H20.75V12.75H3.25ZM3.25 7.875V6.375H20.75V7.875H3.25Z" fill="black"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className={'search'}>
                                <i className={"material-symbols-outlined"}>search</i>
                            </div>
                        </div>{/* End left navigation */}
                        <div className={'logo **'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="32" viewBox="0 0 77 32" fill="none">
                                <path d="M76.5 0H0.5V32H76.5V0Z" fill="#CD1125"/>
                                <path d="M12.7696 23.0278C12.7696 23.0278 12.7696 12.2111 12.7696 11.7833C12.4139 11.7833 10.161 11.7833 10.161 11.7833V9.09443H18.4018V11.7833C18.4018 11.7833 16.0897 11.7833 15.7932 11.7833C15.7932 12.15 15.7932 23.0278 15.7932 23.0278H12.7696ZM64.6454 14.9611C63.8154 14.35 63.1039 13.8 63.1039 13.0055C63.1039 12.6389 63.2225 12.3333 63.4596 12.0889C64.1711 11.4167 66.009 11.7222 66.009 11.7222V9.03332C66.009 9.03332 62.9853 8.42221 61.266 9.88888C60.436 10.6222 59.9617 11.7222 59.9617 13.1278C59.9617 14.7778 60.7917 15.3889 61.7403 16.1222L62.6889 16.9167C63.5189 17.7111 63.8154 18.5055 63.5782 19.0555C62.8668 20.6444 60.1989 20.1555 60.1989 20.1555V22.8444C60.1989 22.8444 63.5782 23.3944 65.4754 21.8055C66.3647 21.0111 66.839 19.9111 66.839 18.3833C66.839 16.6722 65.6532 15.8167 64.6454 14.9611ZM51.543 9.09443V23.0278H58.1238V20.3389C58.1238 20.3389 54.8631 20.3389 54.5074 20.3389C54.5074 19.9722 54.5074 9.09443 54.5074 9.09443H51.543ZM49.053 16C49.053 20.3389 46.3258 23.3333 42.3536 23.3333C38.3814 23.3333 35.6542 20.3389 35.6542 16C35.6542 11.7222 38.4407 8.66666 42.3536 8.66666C46.2072 8.66666 49.053 11.7833 49.053 16ZM45.9701 15.8778C45.9701 13.8611 44.6658 11.7222 42.2943 11.7222C39.9229 11.7222 38.6186 13.9222 38.6186 15.8778C38.6186 17.8944 39.5671 20.3389 42.2943 20.3389C45.0215 20.3389 45.9701 17.9555 45.9701 15.8778ZM33.3421 16C33.3421 20.3389 30.6149 23.3333 26.6427 23.3333C22.6705 23.3333 19.9433 20.3389 19.9433 16C19.9433 11.7222 22.7298 8.66666 26.6427 8.66666C30.5556 8.66666 33.3421 11.7833 33.3421 16ZM30.3184 15.8778C30.3184 13.8611 29.0141 11.7222 26.6427 11.7222C24.2712 11.7222 22.9669 13.9222 22.9669 15.8778C22.9669 17.8944 23.9155 20.3389 26.6427 20.3389C29.3699 20.3389 30.3184 17.9555 30.3184 15.8778Z" fill="white"/>
                            </svg>
                        </div>
                        <div className={'right-navigation **'}>
                            <div className={'account **'}>
                                {/*stiff in here */}
                                <div className={'account-button-parent'}></div>
                            </div>
                            <div className={'component-two'}>

                                <div className={"button-base blank variant-material large-mob-sb"}>
                                    <i className="material-symbols-outlined">shopping_cart</i>
                                    <div className="badge-number">
                                        <span className="numeric-content">1</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>{/* End Main navigation */}
                    <div className={'base-search **'}>
                        <div className={'frame-5747'}>
                            <div className={'base-search-input'}>
                                <div className={'text-input'}>
                                    <div className={'base-input'}>
                                        <div className={'label'}></div>
                                        <div className={'input'}>
                                            <div className={'input-content'}>
                                                <i className={'material-symbols-outlined'}>search</i>
                                                <div className={'frame-5700'}>
                                                    <span className={'body-md'}>Sök produkt, kategori, varumärke</span>
                                                    <div className={'icons-right'}>
                                                        <i className={'material-symbols-outlined'}>qr_code_scanner</i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'button-system-with-states'}></div>
                        </div>{/* frame-5747 */}
                    </div>{/* End Search container */}
                </div>

                <div style={{marginTop: '20px'}}></div>
                <div className={'drawer'}>

                    <div className={'drawer-header'}>
                        <div className={'product-info'}>
                            <img className={'image-99'}/>
                            <div className={'frame-796'}>
                                <div className={'frame-5774'}>
                                    <div className={'frame-5775'}>
                                        <div className={'name-brand'}>
                                            <span className={'alt-label-sm'}>GESTO</span>
                                            <span className={'label-sm'}>SKYDDSSANDAL MAGNE MED BOA S1P *</span>
                                        </div>
                                        <div className={'art-nr'}>
                                            <div className={'body-md'}>Art.nr: 121609-37</div>
                                        </div>
                                        <div className={'art-price-and-status-container'}>
                                            <div className={'art-price-and-status-container-left'}>
                                                <div className={'title-md main-price'}>1970,00 kr <span className={'body-sm exl-moms'}>exkl. moms</span></div>
                                                <div className={'body-sm price-strikethrough'}><s>2500,00 kr</s></div>
                                            </div>
                                            <div className={'art-price-and-status-container-right'}>
                                                <div className={'art-price-and-status-container-right-inner'}>
                                                    <div className={'dot'}></div>
                                                    <div className={'body-sm text'}>100 i lager</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'base-header-close'}>
                                        <i className={'material-symbols-outlined'}>close</i>
                                    </div>
                                </div> {/* frame-5774 */}
                            </div>
                        </div>
                    </div>
                    <div className={'drawer-buttons-container'}>
                        {/* section on paddings with scrollbar */}
                        <div className={'left-with-scrollbar'}>left</div>
                        <div className={'buttons-container'}>
                            <button><span>Lägg i varukorgen</span></button>
                            <button><span>Visa Produkten</span></button>
                            <span className={'body-md login-text'}><a href={'#'}>Logga in</a> för att se ditt pris</span>
                        </div>
                        <div className={'right-with-scrollbar'}>right</div>
                    </div>

                </div> {/* Drawer Main */}

                {/* Modal */}
                <div style={{marginTop: '20px'}}></div>
                <div className={'modal-mobile'}>
                    <div className={'scan-barcode'}>
                        <div className={'rectangle-980'}>
                            <div className={'modal-header-container'}>
                                <div className={'modal-header'}>
                                    <span className={'display-sm'}>Scanna streckkod</span>
                                    <i className={'material-symbols-outlined'}>close</i>
                                </div>
                            </div>

                            <div className={'group-802'}>
                                <div>
                                    <div className={'kant-uppe'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.299072C1.79086 0.299072 0 2.08993 0 4.29907V29.2991H4V4.29907H29V0.299072H4Z" fill="white"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29 4.29907C29 2.08993 27.2091 0.299072 25 0.299072L0 0.299071L-1.74846e-07 4.29907L25 4.29907L25 29.2991L29 29.2991L29 4.29907Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className={'subtract'}>

                                    </div>
                                    <div className={'kant-nere'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M-1.74846e-07 25.5813C-7.8281e-08 27.7904 1.79086 29.5813 4 29.5813L29 29.5813L29 25.5813L4 25.5813L4 0.581299L-1.26763e-06 0.581299L-1.74846e-07 25.5813Z" fill="white"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 29.5813C27.2091 29.5813 29 27.7904 29 25.5813L29 0.581299L25 0.581298L25 25.5813L3.49691e-07 25.5813L0 29.5813L25 29.5813Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className={'scanner-text'}>
                            <span className={'body-lg'}>
                                Passa in streckkoden i den här rutan, scanningen sker automatiskt.
                            </span>
                            </div>

                            <div className={'swipe-container'}>
                                <div className={'swipe'}></div>
                            </div>
                        </div>
                        {/* a whole lot of stuff */}
                    </div>
                </div>
                <div style={{marginTop: '20px'}}></div>
                <div style={{marginTop: '20px'}}></div>
                <div style={{marginTop: '20px'}}></div>
            </div>{/* End Temp Page */}

        </main>
    </div>;
};

BarcodeScanner.propTypes = {
    classNames: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
};

export default BarcodeScanner;
