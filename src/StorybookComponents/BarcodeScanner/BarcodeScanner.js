import PropTypes from 'prop-types';
import React, { useState } from 'react';

import MainIntroComponent from '../Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../Layout/TemplateComponents/SecondaryIntroComponent';

import './barcode-scanner.scss';

const UxClass = 'jsx-button-as-radio';

/// set value here or not?
// const [state, setState] = useState("");

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

    // const [state, setState] = useState(showVat); // correct but yea

    const tFunction = (e) => {
        const tValue = e.target.getAttribute('name');
        // setState(tValue)
        console.log('test');
    };

    /// Slide open and closed --- this one works ////
    /* const [isOpen, setIsOpen] = useState(false);
     const toggleDiv = () => {
         setIsOpen(!isOpen);
     };

     */

    // const [firstDivOpen, setFirstDivOpen] = useState(false);
    const [firstDivOpen, setFirstDivOpen] = useState(true);
    const [secondDivOpen, setSecondDivOpen] = useState(false);

    const toggleFirstDiv = () => {
        setFirstDivOpen(!firstDivOpen);
        console.log(firstDivOpen, 'firstDivOpen');
    };

    const toggleSecondDiv = () => {
        setSecondDivOpen(!secondDivOpen);
    };




    //// Delay Load

    function delayLoadDiv() {
        // Replace 'yourDivId' with the actual ID of the div you want to delay loading.
        var divToLoad = document.getElementById('yourDivId');

        if (divToLoad) {
            // Initially hide the div using CSS style
            divToLoad.style.display = 'none';

            console.log(divToLoad,"divToLoaddivToLoad");
            divToLoad.textContent = "New Text Content";

            // Delayed loading code
            setTimeout(() => {
                // Display the div after the delay
                divToLoad.style.display = 'block';

                console.log(divToLoad,"divToLoad set timeout");

                // Check if the div has been found and has a classList before adding a class
                if (divToLoad.classList) {
                    divToLoad.classList.add('display');
                } else {
                    // If classList is not supported (older browsers), you can use className
                    divToLoad.className += ' display';
                }

                // You can add any additional code here to run after the div has been loaded.
                console.log('Div has been loaded after delay.');
            }, 9000); // Delay in milliseconds (9000ms = 9 seconds)
        } else {
            console.error('The element with ID "yourDivId" does not exist.');
        }
    }

// Call the function to delay the loading of the div.
    document.addEventListener('DOMContentLoaded', function() {
        delayLoadDiv();
    });



        /// Delay Load end





  //  document.addEventListener('DOMContentLoaded', checkDivContent);

 //   document.addEventListener('DOMContentLoaded', checkDivContent);

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

                <div className={"loader hidden"}></div>

                <div id="yourDivId" class=""><h2>this is the day that the lord has made</h2></div>

                {/*
                <div className={"container"}>
                    <img src="https://www.gallaslabel.com/assets/1/7/Wine_Bottle_-_QR_Code.jpg" />
                    <div className={"element"}>
                    </div>
                </div>  */}

                {/* <div className={"root 1"}>
                    <div className={"black-bg 2"}>
                        <div className={"fixed-container 3"}>
                            <div id={"barcode-scanner-view"} className={"scanner-container 4"}>
                                <div className={"relative-container 5"}>
                                    {/* <video autoPlay={true} playsInline className={"scanbot-camera-view 6"} controls>
                                        <source src="https://www.youtube.com/watch?v=oznr-1-poSU&ab_channel=DiviExtended" type="video/mp4"/>
                                    </video>  */}
                {/* <img src="https://placehold.co/600x400" alt="Girl in a jacket" width="100%" height="100%"/>
                                    <div>
                                        <div className={'clip-path'}></div>
                                        <div className={'window-container'}>
                                            <div className={'window-border'}></div>
                                            <div className={'window-text'}>Move the finder over a barcode</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  */}

                {/*   <div className={"wrapper"}>
                <video autoPlay="true" playsInline="" className={"scanbot-camera-view"}></video>
            <div className={'layer-container'}>
                <div className={'layer-container-a'}></div>
                <div className={'layer-container-b'}>
                    <div className={'layer-c'}></div>
                    <div className={'layer-d'}>Move the finder over a barcode</div>
                </div>
            </div>
            </div>  */}

            </div>{/* End Temp Page */}

        </main>
    </div>;
};

BarcodeScanner.propTypes = {
    classNames: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
};

export default BarcodeScanner;
