import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ButtonsPrimarySubComponent from '../../Buttons/Primary/ButtonsPrimarySubComponent';
import ButtonsPrimaryInvertedSubComponent from '../../Buttons/PrimaryInverted/ButtonsPrimaryInvertedSubComponent';
import ButtonsSecondarySubComponent from '../../Buttons/Secondary/ButtonsSecondarySubComponent';
import ButtonsSecondaryInvertedSubComponent from '../../Buttons/SecondaryInverted/ButtonsSecondaryInvertedSubComponent';
import ButtonsBlankSubComponent from '../../Buttons/Blank/ButtonsBlankSubComponent';
import ButtonsBlankInvertedSubComponent from '../../Buttons/BlankInverted/ButtonsBlankInvertedSubComponent';


import './component-switcher.scss';

const ComponentSwitcherButtons = () => {
    // NEw
    const [view, setView] = useState('desktop');
    const [variants, setVariants] = useState('primary');
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
            <div className={'component-switcher-container'}>
                <div className={'component-switcher-button-container'}>

                    <select name="view" value={view} onChange={handleChangeView} className={'body-sm'}>
                        <option value="desktop">Desktop</option>
                        <option value="mobile">Mobile</option>
                    </select>

                    <select name="variant" value={variants} onChange={handleChangeVariants} className={'body-sm'}>
                        <option value="primary">Example: Primary</option>
                        <option value="primary-icon">Example: Primary with icon</option>
                        <option value="primary-inverted">Example: Primary Inverted</option>
                        <option value="primary-inverted-icon">Example: Primary Inverted with icon</option>
                        <option value="secondary">Example: Secondary</option>
                        <option value="secondary-icon">Example: Secondary with Icon</option>
                        <option value="secondary-inverted">Example: Secondary Inverted</option>
                        <option value="secondary-inverted-icon">Example: Secondary Inverted with Icon</option>
                        <option value="blank">Example: Blank</option>
                        <option value="blank-icon">Example: Blank with icon</option>
                        <option value="blank-inverted">Example: Blank Inverted</option>
                        <option value="blank-inverted-icon">Example: Blank Inverted with icon</option>
                    </select>

                    <select className={'body-sm'} id="background" name="background" value={value} onChange={handleChange}>
                        <option value="bg-white">Primary</option>
                        <option value="middle">Secondary</option>
                        <option value="bg-dark">Dark</option>
                    </select>


                </div> {/* end component-switcher-button-container */}

                {/* what is value??? */}
                <div className={`component-container-for-elements ${value}`}>

                    { (variants === 'primary' || variants === 'primary-icon') &&
                        <ButtonsPrimarySubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { (variants === 'primary-inverted' || variants === 'primary-inverted-icon') &&
                        <ButtonsPrimaryInvertedSubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { (variants === 'secondary' || variants === 'secondary-icon') &&
                        <ButtonsSecondarySubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { (variants === 'secondary-inverted' || variants === 'secondary-inverted-icon') &&
                        <ButtonsSecondaryInvertedSubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { (variants === 'blank' || variants === 'blank-icon') &&
                        <ButtonsBlankSubComponent
                            view={view}
                            variants={variants}
                        />
                    }

                    { (variants === 'blank-inverted' || variants === 'blank-inverted-icon') &&
                        <ButtonsBlankInvertedSubComponent
                            view={view}
                            variants={variants}
                        />
                    }



                </div> {/* end component-container-for-elements */}

                {/* <div className={'component-container-for-code'}>
                    <div className={'component-container-for-code-inner'}>
                        {/* variants === 'basic' &&
                            <BadgesBasicSubCodeGrabComponent/>
                        }
                        { variants === 'basic-icon' &&
                            <BadgesBasicIconSubCodeGrabComponent/>
                        */}

                {/* </div>
                    </div> {/* end component-container-for-code */}


            </div>
        </>
    );
};


ComponentSwitcherButtons.propTypes = {
    // view: PropTypes.string,
    /* itemDescription: PropTypes.string,
     itemExtraInformation: PropTypes.string,
     itemName: PropTypes.string,
     spacingSizeExample: PropTypes.string,
     textSnippet: PropTypes.string,
     tokenName: PropTypes.string, */
};

export default ComponentSwitcherButtons;
