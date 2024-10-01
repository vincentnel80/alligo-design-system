import React from 'react';

import ComponentSwitcherButtons from '../Layout/TemplateComponents/ComponentSwitcherButtons';
import MainIntroComponent from '../Layout/TemplateComponents/MainIntroComponent';

//import './buttons.scss';
import './buttons-new.scss';

<link rel="stylesheet" type="text/css" src="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&amp;family=Material+Symbols+Outlined:wght,FILL@300,0;300,1&amp;display=swap" src_type="url" />

const ButtonsNew = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>
        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={'A button is used to trigger an action or to navigate to a different page. Buttons allow users to make choices, with a single tap.'}
            title={'Buttons'}
        />

        <ComponentSwitcherButtons/>
        <div style={{marginTop: '60px', marginBottom: '60px'}}>
            <span className={'hnf-header__cart-counter'}>777777</span>
        </div>



            <h2>Primary</h2>
            {/* sys buttons */}
            {/* Desktop Primary Default Large */}
            {/* <button className={'button-b'}> use div or button*/}
            <div className={'button-base'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base medium'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base small'}>
                <div className={"text-wrapper"}>
                <span className={"content label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base xs'}>
                <div className={"text-wrapper"}>
                <span className={"content label-sm"}>
                    Button text
                </span>
                </div>
            </div>
            <div style={{marginTop: '10px'}}></div>
            <h2>Primary Inverted</h2>
            {/* Desktop Primary Inverted */}

            <div className={'button-base primary-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base medium primary-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base small primary-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base xs primary-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-sm"}>
                    Button text
                </span>
                </div>
            </div>

            {/* DesktopSecondary */}
            <h2>Secondary</h2>
            <div className={'button-base secondary'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base medium secondary'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base small secondary'}>
                <div className={"text-wrapper"}>
                <span className={"content label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base xs secondary'}>
                <div className={"text-wrapper"}>
                <span className={"content label-sm"}>
                    Button text
                </span>
                </div>
            </div>
            {/* secondary inverted */}
            <h2>Secondary Inverted</h2>
            <div style={{background: "grey", padding: '12px'}}>
            <div className={'button-base secondary-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base medium secondary-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base small secondary-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base xs secondary-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-sm"}>
                    Button text
                </span>
                </div>
            </div>
            </div>
            {/* Secondary inverted */}

            {/* Blank */}
            <h2>blank</h2>

            <div className={'button-base blank'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base medium blank'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base small blank'}>
                <div className={"text-wrapper"}>
                <span className={"content label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base xs blank'}>
                <div className={"text-wrapper"}>
                <span className={"content label-sm"}>
                    Button text
                </span>
                </div>
            </div>

            {/* Blank Inverted */}
            <h2>blank Inverted</h2>

            <div style={{background: 'silver', padding: '12px'}}>
            <div className={'button-base blank-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base medium blank-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base small blank-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base xs blank-inverted'}>
                <div className={"text-wrapper"}>
                <span className={"content  label-sm"}>
                    Button text
                </span>
                </div>
            </div>

            </div> {/* end color background */}

            <div style={{marginTop:'20px'}}></div>
            {/* Universals */}
            {/* Desktop Primary Large */}
            <p>Universal Desktop Large</p>
            <div className={'button-base variant-material'}>
                <i className={'material-symbols-outlined'}>chevron_left</i>
                <div className={"text-wrapper"}>
                        <span className={"content label-lg"}>
                            Button text
                        </span>
                </div>
                <i className={'material-symbols-outlined'}>chevron_right</i>
            </div>
            <div style={{marginTop:'20px'}}></div>
            {/* Universals */}
            {/* Desktop Primary Large */}
            <p>Universal Desktop Medium</p>
            <div className={'button-base variant-material variant-number medium'}>
                <i className={'material-symbols-outlined'}>chevron_left</i>
                <div className={'badge-number'}><span className={'numeric-content'}>1</span></div>
                <div className={"text-wrapper"}>
                        <span className={"content label-lg"}>
                            Button text
                        </span>
                </div>
                <i className={'material-symbols-outlined'}>chevron_right</i>
            </div>
            <div style={{marginTop:'20px'}}></div>
            {/* Universals */}
            {/* Desktop Primary Large */}
            <p>Universal Desktop small</p>
            <div className={'button-base variant-material variant-dot small'}>
                <i className={'material-symbols-outlined'}>chevron_left
                    <span className={'badge-dot-wrapper'}><span className={"badge-dot dot-danger dot-medium"}></span></span>
                </i>
                <div className={'text-wrapper'}>
                    <span className={'content label-lg'}>
                        Button text
                    </span>
                </div>
                <i className={'material-symbols-outlined'}>chevron_right</i>
            </div>
            <div style={{marginTop:'20px'}}></div>
            {/* Universals */}
            {/* Desktop Primary Large */}
            <p>Universal Desktop xs</p>
            <div className={'button-base variant-material variant-dot xs'}>
                <i className={'material-symbols-outlined'}>chevron_left
                    <span className={'badge-dot-wrapper'}><span className={"badge-dot dot-danger dot-medium"}></span></span>
                </i>
                <div className={'text-wrapper'}>
                    <span className={'content label-lg'}>
                        Button text
                    </span>
                </div>
                <i className={'material-symbols-outlined'}>chevron_right</i>
            </div>
            {/* The below works - but keep it around in case you need stock standard SB styling */}
            <div style={{marginTop:'60px'}}></div>
            <div style={{marginTop:'20px'}}></div>
            {/* Button Vars icons */}
            {/* Button Desktop Primary Large*/}








            <p>Desktop Primary Large</p>
            <div className={'ButtonDesktopPrimaryLargeRealReal'}>
                <i className={'IconRealReal material-symbols-outlined'}>chevron_left</i>
                {/* wrapper instead of container */}
                <div className={'TextRealReal'}>
                    <span className={'ContentRealReal label-lg'}>
                        Button text
                    </span>
                </div>
                <i className={'IconRealReal material-symbols-outlined'}>chevron_right</i>
            </div>
            <div style={{marginTop:'20px'}}></div>
            <p>Desktop Primary Medium</p>
            <div className={'ButtonDesktopPrimaryMediumRealReal'}>
                <i className={'IconRealReal material-symbols-outlined'}>chevron_left</i>
                {/* Your number doodah needs to come here, or your dot icon */}
                {/* Your number doodah needs to come here, or your dot icon */}
                <span className={'Ellipse-62'}><span className={'content'}>1</span></span>

                {/* wrapper instead of container */}
                <div className={'TextRealReal'}>
                    <span className={'ContentRealReal label-lg'}>
                        Button text
                    </span>
                </div>
                <i className={'IconRealReal material-symbols-outlined'}>chevron_right</i>
            </div>
            <div style={{marginTop:'20px'}}></div>
            <p>Desktop Primary Small</p>
            <div className={'ButtonDesktopPrimarySmallRealReal'}>
                {/* inside or out */}

                <i className={'IconRealReal material-symbols-outlined'}>chevron_left
                    <span className={'Ellipse-62'}></span>

                </i>
                {/* Your number doodah needs to come here, or your dot icon */}
                {/* Your number doodah needs to come here, or your dot icon */}

                {/* wrapper instead of container */}
                <div className={'TextRealReal'}>
                    <span className={'ContentRealReal label-lg'}>
                        Button text
                    </span>
                </div>
                <i className={'IconRealReal material-symbols-outlined'}>chevron_right</i>
            </div>
            {/* Xtra Small */}
            <div style={{marginTop:'20px'}}></div>
            <p>Desktop Primary XS</p>
            <div className={' ButtonDesktopPrimaryXSRealReal'}>
                {/* inside or out */}

                <i className={'IconRealReal material-symbols-outlined'}>chevron_left
                    <span className={'Ellipse-62'}></span>

                </i>
                {/* Your number doodah needs to come here, or your dot icon */}
                {/* Your number doodah needs to come here, or your dot icon */}

                {/* wrapper instead of container */}
                <div className={'TextRealReal'}>
                    <span className={'ContentRealReal label-lg'}>
                        Button text
                    </span>
                </div>
                <i className={'IconRealReal material-symbols-outlined'}>chevron_right</i>
            </div>

            {/* End button var icons */}






    </main>
</div>;

export default ButtonsNew;
