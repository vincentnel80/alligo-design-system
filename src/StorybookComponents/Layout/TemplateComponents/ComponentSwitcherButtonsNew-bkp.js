import PropTypes from 'prop-types';
import React, { useState } from 'react';

/*
import ButtonsPrimarySubComponent from '../../Buttons/Primary/ButtonsPrimarySubComponent';
import ButtonsPrimaryInvertedSubComponent from '../../Buttons/PrimaryInverted/ButtonsPrimaryInvertedSubComponent';
import ButtonsSecondarySubComponent from '../../Buttons/Secondary/ButtonsSecondarySubComponent';
import ButtonsSecondaryInvertedSubComponent from '../../Buttons/SecondaryInverted/ButtonsSecondaryInvertedSubComponent';
import ButtonsBlankSubComponent from '../../Buttons/Blank/ButtonsBlankSubComponent';
import ButtonsBlankInvertedSubComponent from '../../Buttons/BlankInverted/ButtonsBlankInvertedSubComponent';
*/
import './component-switcher.scss';
//import '../../Buttons/buttons.scss';
import '../../Buttons/buttons-new.scss';

const ComponentSwitcherButtonsNew = () => {
    // NEw
    const [view, setView] = useState('desktop');
    const [variants, setVariants] = useState('standard');
    const [code, setCode] = useState('one');


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

                <div className={`component-container-for-elements ${value}`}>
                    {/* pipe not working is this correct */}




                    {view === 'mobile' && <h1>Messages: {view}: mobile elements</h1>}
                </div> {/* end component-container-for-elements */}

                <div className={'component-container-for-code'}>
                    <div className={'component-container-for-code-inner'}>
                    {view === 'desktop' && code === 'one' && <pre><code className={'body-lrg'}><div>
                        <span style={{display: 'block'}}>&lt;button class='button-base primary'&gt;</span>
                       <span style={{display: 'block'}}> &lt;span class='button-text label-lrg&gt; </span>
                        BUTTON TEXT
                        <span style={{display: 'block'}}>&lt;/span&gt;</span>
                        <span style={{display: 'block'}}>&lt;/button&gt;</span>
                    </div></code></pre>}

                    </div>
                    </div> {/* end component-container-for-code */}

                {/* <span className={"highlight-line"}>
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

ComponentSwitcherButtonsNew.propTypes = {
    /* fontClassName: PropTypes.string,
    itemDescription: PropTypes.string,
    itemExtraInformation: PropTypes.string,
    itemName: PropTypes.string,
    spacingSizeExample: PropTypes.string,
    textSnippet: PropTypes.string,
    tokenName: PropTypes.string, */
};

export default ComponentSwitcherButtonsNew;
