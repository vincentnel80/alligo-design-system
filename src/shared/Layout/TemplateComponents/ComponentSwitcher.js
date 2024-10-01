import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './component-switcher.scss';
import '../../Buttons/buttons.scss';

const ComponentSwitcher = () => {
    // NEw
    const [selects, setSelects] = useState('desktop');
    const [variations, setVariations] = useState('standard');
    const [size, setSize] = useState('large');
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
                        <select name="size" value={size} onChange={handleChangeSize} className={'body-sm'}>
                        <option value="large">Large</option>
                        <option value="medium">Medium</option>
                        <option value="small">Small</option>
                        <option value="x-small">X-small</option>
                    </select>


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
                    {selects === 'desktop' && variations === 'standard' &&

                        <div className={'buttons-container'}>
                            <div className={"equalHMVWrap eqWrap"}>
                                <div className={"equalHMV eq"}>
                                    <button className={'button-base primary'} value={'one'} onClick={handleChangeCode}>
                                        <span className={'button-text label-lg'}>
                                            BUTTON TEXT
                                        </span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Primary, Default</span>
                                </div>
                                <div className={"equalHMV eq"}>
                                    <button className={'button-base primary-inverted'} value={'two'} onClick={handleChangeCode}>
                                        <span className={'button-text DesktopLabel-Large label-lg'}>
                                            BUTTON TEXT
                                        </span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Primary, Inverted</span>
                                </div>
                                <div className={"equalHMV eq"}>
                                    {/* Desktop Secondary Default */}
                                    <button className={'button-base secondary'}>
                                        <span className={'button-text DesktopLabel-Large label-lg'}>
                                            BUTTON TEXT
                                        </span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Secondary, Default</span>
                                </div>
                                <div className={"equalHMV eq"}>
                                    <button className={'button-base secondary-inverted'}>
                                        <span className={'button-text DesktopLabel-Large label-lg'}>
                                        BUTTON TEXT
                                        </span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Secondary inverted</span>
                                </div>
                                <div className={"equalHMV eq"}>
                                    <button className={'button-base blank'}>
                                        <span className={'button-text DesktopLabel-Large label-lg'}>
                                            BUTTON TEXT
                                        </span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Blank Default</span>
                                </div>
                                <div className={"equalHMV eq"}>
                                    <button className={'button-base blank-inverted'}>
                                        <span className={'button-text DesktopLabel-Large label-lg'}>
                                            BUTTON TEXT
                                        </span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Blank Inverted</span>
                                </div>
                            </div>

                        </div>
                    }
                    {/* Desktop + variation */}
                    {selects === 'desktop' && variations === 'variation' &&

                        <div className={'buttons-container'}>
                            <div className={"equalHMVWrap eqWrap"}>
                                <div className={"equalHMV eq"}>
                                    <button className={'variant-base-large variant-primary-large'}>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                        <span className={'button-text label-lg'}>BUTTON TEXT</span>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Primary, Default</span>
                                </div>
                                <div className={'equalHMV eq'}>
                                    <button className={'variant-base-large variant-primary-inverted-large'}>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                        <span className={'button-text label-lg'}>BUTTON TEXT</span>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Primary, Inverted</span>
                                </div>
                                <div className={"equalHMV eq"}>
                                    <button className={'variant-base-large variant-secondary-large'}>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                        <span className={'button-text label-lg'}>BUTTON TEXT</span>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Secondary, Default</span>
                                </div>
                                <div className={"equalHMV eq"}>
                                    <button className={'variant-base-large variant-secondary-inverted-large'}>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                        <span className={'button-text label-lg'}>BUTTON TEXT</span>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Secondary inverted</span>
                                </div>
                                <div className={"equalHMV eq"}>
                                    <button className={'variant-base-large variant-blank-large'}>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                        <span className={'button-text label-lg'}>BUTTON TEXT</span>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Blank Default</span>
                                </div>
                                <div className={"equalHMV eq"}>
                                    <button className={'variant-base-large variant-blank-inverted-large'}>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                        <span className={'button-text label-lg'}>BUTTON TEXT</span>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                    <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Blank Inverted</span>
                                </div>
                            </div>

                        </div>
                    }
                    {/* End Desktop + Variation */}






                    {selects === 'mobile' && <h1>Messages: {selects}: mobile elements</h1>}
                </div> {/* end component-container-for-elements */}

                <div className={'component-container-for-code'}>
                    <div className={'component-container-for-code-inner'}>
                    {selects === 'desktop' && code === 'one' && <pre><code className={'body-lg'}><div>
                        <span style={{display: 'block'}}>&lt;button class='button-base primary'&gt;</span>
                       <span style={{display: 'block'}}> &lt;span class='button-text label-lg&gt; </span>
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

ComponentSwitcher.propTypes = {
    /* fontClassName: PropTypes.string,
    itemDescription: PropTypes.string,
    itemExtraInformation: PropTypes.string,
    itemName: PropTypes.string,
    spacingSizeExample: PropTypes.string,
    textSnippet: PropTypes.string,
    tokenName: PropTypes.string, */
};

export default ComponentSwitcher;
