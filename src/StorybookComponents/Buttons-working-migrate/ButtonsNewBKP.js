import React from 'react';

import ComponentSwitcherButtonsNew from '../Layout/TemplateComponents/ComponentSwitcherButtonsNew';
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

        <ComponentSwitcherButtonsNew/>
        <div style={{marginTop: '60px', marginBottom: '60px'}}>
            <span className={'hnf-header__cart-counter'}>777777</span>
        </div>

        {/* new-button-container */}
        <div className={'new-button-container'}>

            <h2>Primary</h2>
            {/* sys buttons */}
            {/* Desktop Primary Default Large */}
            {/* <button className={'button-b'}> use div or button*/}
            <div className={'button-base-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real medium'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real small'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real xs'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-sm"}>
                    Button text
                </span>
                </div>
            </div>
            <div style={{marginTop: '10px'}}></div>
            <h2>Primary Inverted</h2>
            {/* Desktop Primary Inverted */}

            <div className={'button-base-real primary-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real medium primary-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real small primary-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real xs primary-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-sm"}>
                    Button text
                </span>
                </div>
            </div>

            {/* DesktopSecondary */}
            <h2>Secondary</h2>
            <div className={'button-base-real secondary-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real medium secondary-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real small secondary-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real xs secondary-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-sm"}>
                    Button text
                </span>
                </div>
            </div>
            {/* secondary inverted */}
            <h2>Secondary Inverted</h2>
            <div style={{background: "grey", padding: '12px'}}>
            <div className={'button-base-real secondary-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real medium secondary-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real small secondary-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real xs secondary-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-sm"}>
                    Button text
                </span>
                </div>
            </div>
            </div>
            {/* Secondary inverted */}

            {/* Blank */}
            <h2>blank</h2>

            <div className={'button-base-real blank-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real medium blank-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real small blank-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real xs blank-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-sm"}>
                    Button text
                </span>
                </div>
            </div>

            {/* Blank Inverted */}
            <h2>blank Inverted</h2>

<div style={{background: 'silver', padding: '12px'}}>
            <div className={'button-base-real blank-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real medium blank-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-lg"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real small blank-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-md"}>
                    Button text
                </span>
                </div>
            </div>

            <div className={'button-base-real xs blank-inverted-real'}>
                <div className={"text-container"}>
                <span className={"Content DesktopLabel-Large label-sm"}>
                    Button text
                </span>
                </div>
            </div>

    {/* ICON VARIANTS */}
    {/* icon variants md, sm, xs here */}

</div>



            {/* PROBABLY TRASH */}
            {/* below here Junk */}
            <div style={{marginTop:'20px'}}></div>
            <div className={"VersionDesktop-VariantPrimary-SizeLarge"}>
                {/*<img src="img/icon.svg"
                     className="IconLeft">
                </img>
                */}
                <span className={"material-symbols-outlined"}>chevron_left</span>
                <div className={"text-container"}>
                    <span className={"Content DesktopLabel-Large label-lg"}>
                        Button text
                    </span>
                </div>
                <span className={"material-symbols-outlined"}>chevron_right</span>
                {/*<img src="img/icon.svg"
                     className="IconRight">
                </img>
                */}
            </div>
             <div style={{marginTop:'20px'}}></div>

            <div className={"VersionDesktop-VariantPrimary-SizeMedium"}>
                {/*<img src="img/icon.svg"
                     className="IconLeft">
                </img>
                */}
                <span className={"material-symbols-outlined"}>chevron_left</span>
                <div className={"text-container"}>
                    <span className={"Content DesktopLabel-Medium label-lg"}>
                        Button text
                    </span>
                </div>
                <span className={"material-symbols-outlined"}>chevron_right</span>
                {/*<img src="img/icon.svg"
                     className="IconRight">
                </img>
                */}
            </div>

            <div style={{marginTop:'20px'}}></div>
            <div className={"VersionDesktop-VariantPrimary-SizeLarge"}>
                {/*<img src="img/icon.svg"
                     className="IconLeft">
                </img>
                */}

                <span className={'material-symbols-outlined'}>chevron_left<span className={'Ellipse-62'}></span></span>
                <div className={'Text'}>
                    <span className={'Content DesktopLabel-Large label-lg'}>
                        Button text
                    </span>
                </div>
                <span className={'material-symbols-outlined'}>chevron_right</span>
                {/*<img src="img/icon.svg"
                     className="IconRight">
                </img>
                */}
            </div>



        </div> {/* End new-button-container */}

        <div className={'buttons-container'}>

            {/*
            <button className={"button-large"}>
                Button test mixin
            </button>

            <button className={"button-xs"}>
                Button test mixin
            </button>   */}

            {/* DESKTOP */}
            {/* Maybe include left and right arrows and alsoicons??? not sure */}
            {/* Desktop Primary Default */}
            <p style={{marginTop: '800px'}}>(Desktop): Primary, Default</p>
            <button type="button" aria-label="Button text" className={'button-base primary large'}>
                {/* BEtter classes + decide what to do with Figma names */}
                {/* infor from class or */}
                <span className={'button-text label-lg'}>
                    BUTTON TEXT
                </span>
            </button>

            <button type="button" aria-label="Button text" className={'button-base primary-medium'}>
                {/* BEtter classes + decide what to do with Figma names */}
                {/* infor from class or */}
                <span className={'button-text label-lg'}>
                    BUTTON TEXT
                </span>
            </button>

            <button type="button" aria-label="Button text" className={'button-base primary-small'}>
                {/* BEtter classes + decide what to do with Figma names */}
                {/* infor from class or */}
                <span className={'button-text label-lg'}>
                    BUTTON TEXT
                </span>
            </button>

            <button type="button" aria-label="Button text" className={'button-base primary-x-small'}>
                {/* BEtter classes + decide what to do with Figma names */}
                {/* infor from class or */}
                <span className={'button-text label-lg'}>
                    BUTTON TEXT
                </span>
            </button>

            <div style={{marginTop: '10px'}}></div>
            {/* Desktop Primary Inverted */}
            <p>(Desktop): Primary, Inverted</p>
            <button aria-label="Button text" type="button" className={'button-base primary-inverted'}>
                {/* BEtter classes + decide what to do with Figma names */}
                <span className={'button-text DesktopLabel-Large label-lg'}>
                    BUTTON TEXT
                </span>
            </button>
            <div style={{marginTop: '10px'}}></div>
            <p>(Desktop): Secondary, Default</p>
            {/* Desktop Secondary Default */}
            <button aria-label="Button text" type="button" className={'button-base secondary'}>
                {/* BEtter classes + decide what to do with Figma names */}
                <span className={'button-text DesktopLabel-Large label-lg'}>
                    BUTTON TEXT
                </span>
            </button>
            <div style={{marginTop: '10px'}}></div>

            {/* Secondary Inverted TODO */}
            <p>(Desktop): secondary inverted</p>
            <div className={'checkerboard'} style={{width:'150px',background:'black',padding: '12px'}}>
            <button aria-label="Button text" type="button" className={'button-base secondary-inverted'}>
                {/* BEtter classes + decide what to do with Figma names */}
                <span className={'button-text DesktopLabel-Large label-lg'}>
                    BUTTON TEXT
                </span>
            </button>
            </div>
            <div style={{marginTop: '10px'}}></div>
            {/* Blank Default */}
            <p>(Desktop): Blacnk Default</p>
            <button aria-label="Button text" type="button" className={'button-base blank'}>
                {/* BEtter classes + decide what to do with Figma names */}
                <span className={'button-text DesktopLabel-Large label-lg'}>
                    BUTTON TEXT
                </span>
            </button>
            <div style={{marginTop: '10px'}}></div>
            {/* Blank Inverted ToDo */}
            <p>(Desktop): Blacnk inverted</p>
            <div className={'checkerboard'} style={{width:'150px',background:'black',padding: '12px'}}>
                <button aria-label="Button text" type="button" className={'button-base blank-inverted '}>
                    {/* BEtter classes + decide what to do with Figma names */}
                    <span className={'button-text DesktopLabel-Large label-lg'}>
                        BUTTON TEXT
                    </span>
                </button>
            </div>
            {/*End Section 1 (figma) */}

            <div style={{marginTop: '10px'}}></div>
            <p>(Desktop): Variants Desktop</p>
            <p>Desktop Primary Large</p>
            {/*Desktop Variants (arrowed buttons)*/}
            <button aria-label="Button text" type="button" className={'variant-base-large variant-primary-large'}>
                {/* <span className={'left-chevron'}></span>*/}
                <span className="material-symbols-outlined">chevron_left</span>
                <span className={'button-text label-lg'}>BUTTON TEXT</span>
                <span className="material-symbols-outlined">chevron_right</span>
                {/* <span className={'right-chevron'}></span>*/}
            </button>

            <div style={{marginTop: '10px'}}></div>
            <p>Desktop Primary Inverted Large</p>
            <button aria-label="Button text" type="button" className={'variant-base-large variant-primary-inverted-large'}>
                {/* <span className={'left-chevron'}></span>*/}
                <span className="material-symbols-outlined">chevron_left</span>
                <span className={'button-text label-lg'}>BUTTON TEXT</span>
                <span className="material-symbols-outlined">chevron_right</span>
                {/* <span className={'right-chevron'}></span>*/}
            </button>

            <div style={{marginTop: '10px'}}></div>
            <p>Desktop Secondary Large</p>
            <button aria-label="Button text" type="button" className={'variant-base-large variant-secondary-large'}>
                {/* <span className={'left-chevron'}></span>*/}
                <span className="material-symbols-outlined">chevron_left</span>
                <span className={'button-text label-lg'}>BUTTON TEXT</span>
                <span className="material-symbols-outlined">chevron_right</span>
                {/* <span className={'right-chevron'}></span>*/}
            </button>

            <div style={{marginTop: '10px'}}></div>
            <p>Desktop Secondary Inverted Large</p>
            <div className={'checkerboard'} style={{width:'215px',background:'black',padding: '12px'}}>
            <button aria-label="Button text" type="button" className={'variant-base-large variant-secondary-inverted-large'}>
                {/* <span className={'left-chevron'}></span>*/}
                <span className="material-symbols-outlined">chevron_left</span>
                <span className={'button-text label-lg'}>BUTTON TEXT</span>
                <span className="material-symbols-outlined">chevron_right</span>
                {/* <span className={'right-chevron'}></span>*/}
            </button>
            </div>

            <div style={{marginTop: '10px'}}></div>
            <p>Desktop Blank Large</p>
                <button aria-label="Button text" type="button" className={'variant-base-large variant-blank-large'}>
                    {/* <span className={'left-chevron'}></span>*/}
                    <span className="material-symbols-outlined">chevron_left</span>
                    <span className={'button-text label-lg'}>BUTTON TEXT</span>
                    <span className="material-symbols-outlined">chevron_right</span>
                    {/* <span className={'right-chevron'}></span>*/}
                </button>

            <div style={{marginTop: '10px'}}></div>
            <p>Desktop Blank Inverted Large</p>
            <div className={'checkerboard'} style={{width:'215px',background:'black',padding: '12px'}}>
            <button aria-label="Button text" type="button" className={'variant-base-large variant-blank-inverted-large'}>
                {/* <span className={'left-chevron'}></span>*/}
                <span className="material-symbols-outlined">chevron_left</span>
                <span className={'button-text label-lg'}>BUTTON TEXT</span>
                <span className="material-symbols-outlined">chevron_right</span>
                {/* <span className={'right-chevron'}></span>*/}
            </button>
            </div>
            {/* end Variants */}


            {/* SYSTEM */}

            {/* question - toggled vs not*/}
            <p>system toggled</p>
            {/* SYSTEM Toggled*/}
            <button aria-label="Button text" type="button" className={'button-sys-toggled'}>
                {/* <span className={'left-chevron'}></span>*/}
                <span className="material-symbols-outlined">chevron_left</span>
                <span className={'Text label-lg'}>BUTTON TEXT</span>
                <span className="material-symbols-outlined">chevron_right</span>
                {/* <span className={'right-chevron'}></span>*/}
            </button>
            <div style={{marginTop: '10px'}}></div>
            <button aria-label="Button text" type="button" className={'button-sys-desktop-large'}>
                {/* <span className={'left-chevron'}></span>*/}
                <span className="material-symbols-outlined">chevron_left</span>
                <span className={'Text label-lg'}>BUTTON TEXT</span>
                <span className="material-symbols-outlined">chevron_right</span>
                {/* <span className={'right-chevron'}></span>*/}
            </button>

            {/* SYSTEM Toggled*/}

            <p>end system toggled</p>

            <div style={{marginTop: '10px'}}></div>
            {/* button with circle left*/}
            {/* question - toggled vs not*/}
            {/* icon with circle left - dektop primary small */}
            <button aria-label="Button text" type="button" className={'button-desktop-primary-small'}>
                {/* <span className={'left-chevron'}></span> */}
                <span className="material-symbols-outlined">chevron_left</span>
                <span className={'Ellipse-62'}></span>
                <span className={'Text label-md'}>BUTTON TEXT</span>
                <span className="material-symbols-outlined">chevron_right</span>
                {/* <span className={'right-chevron'}></span>*/}
            </button>

            <div style={{marginTop: '10px'}}></div>
            {/* button with circle left*/}
            {/* question - toggled vs not*/}
            {/* icon with circle left - dektop primary small */}
            <button aria-label="Button text" type="button" className={'button-desktop-primary-xs'}>
                {/* <span className={'left-chevron'}></span> */}
                <span className="material-symbols-outlined">chevron_left</span>
                <span className={'Ellipse-62'}></span>
                <span className={'Text label-sm'}>BUTTON TEXT</span>
                <span className="material-symbols-outlined">chevron_right</span>
                {/* <span className={'right-chevron'}></span>*/}
            </button>





            <div style={{marginTop: '10px'}}></div>
            {/* icon with circle right */}
            {/* button when only icon and circle right */}
            <button aria-label="Button text" type="button" className={'button-icon-circle-right'}>
                <span className={'icon'}></span>
                <span className={'elipse'}></span>
            </button>




            <div id="whatever">
                <button type="button" className={'unstyle jsx-minicart-header-icon button-icon-circle-right'}>

                    <span className="material-symbols-outlined">notifications</span>

                    {/*
                    <i className={'svg-header-icon svg-header-icon--minicart'}>
                        <svg className={'svg-header-icon-svg'} fill="none" height="16" viewBox="0 0 12 16" width="12" xmlns="http://www.w3.org/2000/svg">
                            <path className={'svg-header-icon-svg-path'} d="M0.208374 13.3878V12.3045H1.20837V7.09612C1.20837 5.92665 1.58257 4.89256 2.33096 3.99385C3.07936 3.09515 4.0385 2.55072 5.20837 2.36055V1.25639C5.20837 1.03203 5.28423 0.843992 5.43594 0.692284C5.58763 0.540576 5.77566 0.464722 6.00002 0.464722C6.22438 0.464722 6.41241 0.540576 6.5641 0.692284C6.71581 0.843992 6.79167 1.03203 6.79167 1.25639V2.36055C7.96154 2.55072 8.92068 3.09078 9.66908 3.98074C10.4175 4.87069 10.7917 5.90915 10.7917 7.09612V12.3045H11.7917V13.3878H0.208374ZM5.9956 15.8397C5.62996 15.8397 5.316 15.7102 5.05371 15.4511C4.79143 15.1921 4.66029 14.8751 4.66029 14.5H7.33975C7.33975 14.8792 7.2098 15.1973 6.94991 15.4543C6.69003 15.7112 6.37192 15.8397 5.9956 15.8397ZM2.29167 12.3045H9.70837V7.09612C9.70837 6.05978 9.34939 5.18264 8.63144 4.46468C7.91349 3.74674 7.03635 3.38776 6.00002 3.38776C4.96369 3.38776 4.08655 3.74674 3.3686 4.46468C2.65064 5.18264 2.29167 6.05978 2.29167 7.09612V12.3045Z" fill="white"/>
                        </svg>
                </i>
            <span className="jsx-minicart-header-icon-count"></span> */}
                </button>
            </div>


        </div> {/* end button container */}







    </main>
</div>;

export default ButtonsNew;
