import React from 'react';

import MainIntroComponent from "./TemplateComponents/MainIntroComponent";
import SecondaryIntroComponent from "./TemplateComponents/SecondaryIntroComponent";

import './layout.scss';

const Layout = () => {

    return (
        <div className={'sb-page-container'}>
            <main className={'sb-maincontent'}>

                <MainIntroComponent
                    fontClassName={'body-xl'}
                    introText={'In order to assure responsiveness and flexibility in different browser widths and devices, we base our layout on a grid. The grid contains of margins, columns and gutters wich consists of fluid and fixed values.\\n - Margins are fixed \\n- Gutters are fixed \\n- Columns are fluid \\nThe responsive layout is based on our spacing scale.'}
                    title={'Layout'}
                />

                <SecondaryIntroComponent
                    secondaryContent={'Our design/Web service consists of these breakpoints *'}
                    secondaryTitle={'Breakpoints'}
                />
                <div className={'body-xl'}><span style={{fontWeight: '900'}}>Mobile </span><span style={{opacity: '.6'}}>0px</span></div>
                <div className={'body-xl'}><span style={{fontWeight: '900'}}>Tablet </span><span style={{opacity: '.6'}}>640px</span></div>
                <div className={'body-xl'}><span style={{fontWeight: '900'}}>Desktop small </span><span style={{opacity: '.6'}}>769</span></div>
                <div className={'body-xl'}><span style={{fontWeight: '900'}}>Desktop </span><span style={{opacity: '.6'}}>1024 -></span></div>
                <div className={'body-sm'} style={{marginTop: '24px', opacity: '.6'}}>* There may be other breakpoints on component level. They will be specified together with the component in question.</div>

                <SecondaryIntroComponent
                    secondaryContent={'Layout examples at various screen sizes'}
                    secondaryTitle={'Responsive Layout'}
                />

                <div className={'body-xl'} style={{marginBottom: '18px'}}><span style={{fontWeight: '900'}}>Mobile </span><span style={{opacity: '.6'}}>0px - 639px</span></div>

                <div className={'layout-info-container'}>
                    <div className={'grid-container-arrows'}>
                        <div className={'grid-item-arrows'}>
                            <div className={'body-md'}>Margin</div>
                            <div className={'body-md'}>16px</div>
                            <span className={'arrow is-triangle arrow-bar is-top'}></span>
                        </div>
                        <div className={'grid-item-arrows'} style={{textAlign: 'center'}}>
                            <div className={'body-md'}>Gutter</div>
                            <div className={'body-md'}>8px</div>
                            <span className={'arrow is-triangle arrow-bar is-top'}></span>
                        </div>
                        <div className={'grid-item-arrows'} style={{textAlign: 'center'}}>
                            <div className={'body-md'}>Column</div>
                            <div className={'body-md'}>Fluid width</div>
                            <span className={'arrow is-triangle arrow-bar is-top'}></span>
                        </div>
                    </div>
                    <div className={'main-container'}>
                        <div className={'grid-container'}>
                            {Array.from(
                                { length: 4 },
                                (_, i) => <div className={'grid-item'} key={i}></div>
                            )}
                        </div>
                        <div className={'body-md'} style={{paddingTop:'11px', color: '#4F4F4F'}}>Example responsive width: 375px</div>
                        <div className={'body-md'} style={{color: '#4F4F4F'}}>Minimum supported width is: 375px</div>
                    </div>
                </div>

                {/* Tablet */}
                <div className={'body-xl'} style={{marginTop: '64px', marginBottom: '18px'}}><span style={{fontWeight: '900'}}>Tablet </span><span style={{opacity: '.6'}}>640px - 768px</span></div>
                <div className={'layout-info-container-tablet'}>
                    <div className={'grid-container-arrows-tablet'}>
                        <div className={'grid-item-arrows'} style={{textAlign: 'left'}}>
                            <div className={'body-md'}>Margin</div>
                            <div className={'body-md'}>32px</div>
                            <span className={'arrow is-triangle arrow-bar is-top'}></span>
                        </div>
                        <div className={'grid-item-arrows'} style={{textAlign: 'center'}}>
                            <div className={'body-md'}>Gutter</div>
                            <div className={'body-md'}>16px</div>
                            <span className={'arrow is-triangle arrow-bar is-top'}></span>
                        </div>
                        <div className={'grid-item-arrows'}>
                            <div className={'grid-item-arrows-inner'}>
                                <div className={'body-md'}>Column</div>
                                <div className={'body-md'}>Fluid width</div>
                                <span className={'arrow is-triangle arrow-bar is-top'}></span>
                            </div>
                        </div>
                    </div>

                    <div className={'main-container-tablet'}>
                        <div className={'grid-container-tablet'}>
                            {Array.from(
                                { length: 8 },
                                (_, i) => <div className={'grid-item-tablet'} key={i}></div>
                            )}
                        </div>
                        <div className={'body-md'} style={{paddingTop:'11px', color: '#4F4F4F'}}>Example responsive width: 768px</div>
                    </div>
                </div>

                {/* Desktop Small*/}
                <div className={'body-xl'} style={{marginTop: '64px', marginBottom: '18px'}}><span style={{fontWeight: '900'}}>Desktop Small </span><span style={{opacity: '.6'}}>769px - 1023px</span></div>
                <div className={'layout-info-container-desktop-sml'}>
                    <div className={'grid-container-arrows-desktop-sml'}>
                        <div className={'grid-item-arrows'} style={{textAlign: 'left'}}>
                            <div className={'body-md'}>Margin</div>
                            <div className={'body-md'}>32px</div>
                            <span className={'arrow is-triangle arrow-bar is-top'}></span>
                        </div>
                        <div className={'grid-item-arrows'} style={{textAlign: 'center'}}>
                            <div className={'body-md'}>Gutter</div>
                            <div className={'body-md'}>24px</div>
                            <span className={'arrow is-triangle arrow-bar is-top'}></span>
                        </div>
                        <div className={'grid-item-arrows'} style={{textAlign: 'center'}}>
                            <div className={'grid-item-arrows-inner'}>
                                <div className={'body-md'}>Column</div>
                                <div className={'body-md'}>Fluid width</div>
                                <span className={'arrow is-triangle arrow-bar is-top'}></span>
                            </div>
                        </div>
                    </div>
                    <div className={'main-container-desktop-sml'}>
                        <div className={'grid-container-desktop-sml'}>
                            {Array.from(
                                { length: 12 },
                                (_, i) => <div className={'grid-item-desktop-sml'} key={i}></div>
                            )}
                        </div>
                        <div className={'body-md'} style={{paddingTop:'11px', color: '#4F4F4F'}}>Example responsive width: 1023px</div>
                    </div>
                </div>

                {/* Desktop*/}
                <div className={'body-xl'} style={{marginTop: '64px', marginBottom: '18px'}}><span style={{fontWeight: '900'}}>Desktop </span><span style={{opacity: '.6'}}>1024px --> (1200px)</span></div>
                <div className={'layout-info-container-desktop'}>
                    <div className={'grid-container-arrows-desktop'}>
                        <div className={'grid-item-arrows'} style={{textAlign: 'left'}}>
                            <div className={'body-md'}>Margin</div>
                            <div className={'body-md'}>40px</div>
                            <span className={'arrow is-triangle arrow-bar is-top'}></span>
                        </div>
                        <div className={'grid-item-arrows'} style={{textAlign: 'center'}}>
                            <div className={'body-md'}>Gutter</div>
                            <div className={'body-md'}>24px</div>
                            <span className={'arrow is-triangle arrow-bar is-top'}></span>
                        </div>
                        <div className={'grid-item-arrows'} style={{textAlign: 'center'}}>
                            <div className={'grid-item-arrows-inner'}>
                                <div className={'body-md'}>Column</div>
                                <div className={'body-md'}>Fluid width</div>
                                <span className={'arrow is-triangle arrow-bar is-top'}></span>
                            </div>
                        </div>
                    </div>
                    <div className={'main-container-desktop'}>
                        <div className={'grid-container-desktop'}>
                            {Array.from(
                                { length: 12 },
                                (_, i) => <div className={'grid-item-desktop'} key={i}></div>
                            )}
                        </div>
                        <div className={'body-md'} style={{paddingTop:'11px', color: '#4F4F4F'}}>Example responsive width: 1200px</div>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Layout;
