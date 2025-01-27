import React from 'react';

import CopyToClipboard from '../../shared/Helpers/CopyToClipboard/CopyToClipboard';
import GridHeaderComponent from '../../shared/Layout/TemplateComponents/GridHeaderComponent';
import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';
import SecondaryIntroComponent from '../../shared/Layout/TemplateComponents/SecondaryIntroComponent';
import SubHeaderComponent from '../../shared/Layout/TemplateComponents/SubHeaderComponent';

import './colors.scss';
import './system-colors.scss';

const SystemColors = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'body-xl body-xl--preamble'}
            introText={''}
            title={'Color Design Tokens'}
        />

        <SecondaryIntroComponent
            secondaryTitle={'Background'}
            secondaryContent={''}
        />
        <GridHeaderComponent/>

        <div className={'color-grid-container'} role={'listbox'}>
    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Background Primary</span>
            <span className={'body-md'}>Default application background color for Alligo E-com.</span>
            <span className={'body-md'}>Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-primary'}
                />
            </div>
        </div>
    </div>
    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Background Secondary</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>
    
    
</div> {/* color-grid-container */}



        <SecondaryIntroComponent
            secondaryTitle={'Surface'}
            secondaryContent={''}
        />

<GridHeaderComponent/>

<div className={'color-grid-container'} role={'listbox'}>
    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Raised Primary</span>
            <span className={'body-md'}>Default application surface color for Alligo E-com. Use this for e.g. card backgrounds.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-primary'}
                />
            </div>
        </div>
    </div>
    
</div> {/* color-grid-container */}


{/* OLD Redo */}
        <GridHeaderComponent/>

        <div className={'color-grid-container'} role={'listbox'}>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>21:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>12.42:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text White-78%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#000000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(0, 0, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Black</span>
                    <span className={'body-md'}>Primary button background color</span>
                    <span className={'body-md'}>Active/Selected border color</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-black)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>21:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>12.42:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text White-78%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#000000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(0, 0, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Raised Secondary</span>
                    <span className={'body-md'}>Primary button background color</span>
                    <span className={'body-md'}>Active/Selected border color</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-black)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>21:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>12.42:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text White-78%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#000000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(0, 0, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Disbaled</span>
                    <span className={'body-md'}>Primary button background color</span>
                    <span className={'body-md'}>Active/Selected border color</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-black)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>21:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>12.42:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text White-78%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#000000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(0, 0, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Navigation Hover</span>
                    <span className={'body-md'}>Primary button background color</span>
                    <span className={'body-md'}>Active/Selected border color</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-black)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>21:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>12.42:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text White-78%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#000000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(0, 0, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 100</span>
                    <span className={'body-md'}>Primary button background color</span>
                    <span className={'body-md'}>Active/Selected border color</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-black)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-80 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>12:63:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>7:47:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text White-78%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#333333</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(51, 51, 51, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 90</span>
                    <span className={'body-md'}>Hover border color for Checkbox, Radiobutton & other Form elements</span>
                    <span className={'body-md'}>Hover border color for Link Tile Brand</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-80)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-80 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>12:63:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>7:47:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text White-78%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#333333</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(51, 51, 51, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 80</span>
                    <span className={'body-md'}>Hover border color for Checkbox, Radiobutton & other Form elements</span>
                    <span className={'body-md'}>Hover border color for Link Tile Brand</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-80)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-70 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>8.19:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#4F4F4F</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(79, 79, 79, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 70</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-70)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-60 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#595959</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(89, 89, 89, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 60</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-60)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-50 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>4.74.1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#737373</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(115, 115, 115, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 50</span>
                    <span className={'body-md'}>Hover icon color</span>
                    <span className={'body-md'}>Enabled border color for checkbox & radiobutton</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-50)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-40'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>7.37:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#999999</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(153, 153, 153, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 40</span>
                    <span className={'body-md'}>Default Hover border color</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-40)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-40'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>7.37:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#999999</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(153, 153, 153, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 30</span>
                    <span className={'body-md'}>Default Hover border color</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-40)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-20'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>13.07:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>5.1:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#CCCCCC</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(204, 204, 204, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 20</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-20)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-15'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>14.88:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>5.8:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>

                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#DAD9D7</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(218, 217, 215, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 15</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-15)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-10'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>16.67:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>6.5:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#E5E5E5</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(229, 229, 229, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 10</span>
                    <span className={'body-md'}>Default border color</span>
                    <span className={'body-md'}>Scrollbar background</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-10)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-5'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>19.43:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '78%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>7:57:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                        </div>

                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#F6F6F6</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(246, 246, 246, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 05</span>
                    <span className={'body-md'}>Default raised surface color.</span>
                    <span className={'body-md'}>For example alternative background in input fields. Use this when you need to separate a specific layer from the surface color, e.g. sections on pages.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-05)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-2'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>20.11:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.84:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FAFAFA</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(250, 250, 250, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface 02</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-02)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-2'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>20.11:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.84:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FAFAFA</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(250, 250, 250, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Action 1</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-02)'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-2'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>20.11:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.84:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FAFAFA</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(250, 250, 250, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Action 2</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-grey-02)'}
                        />
                    </div>
                </div>
            </div>

            {/* System New*/}
        <div className={'color-grid-container'} role={'listbox'}>
    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Info Default</span>
            <span className={'body-md'}>Default application background color for Alligo E-com.</span>
            <span className={'body-md'}>Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-primary'}
                />
            </div>
        </div>
    </div>
    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Info Weak</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Info Weaker</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface SuccessDefault</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Success Weak</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Success Weaker</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Warning Default</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Warning Weak</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Warning Weaker</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Danger Default</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Danger Weak</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>

    <div className={'color-grid-row'}>
        <div className={'content-grid-row-inner-color'}>
            <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'}></div>
                    <div className={'col-color-value body-md'}>21:1</div>
                    <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                </div>
                <div className={'color-value-wrapper'}>
                    <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                    <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                </div>
            </div>
            <div style={{marginTop: '8px'}}>
                <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
            </div>
        </div>
        <div className={'content-grid-row-inner-description'}>
            <span className={'title-md'} style={{paddingBottom:'8px'}}>Surface Danger Weaker</span>
            <span className={'body-md'}>Application background color for Alligo E-com.</span>
            <span className={'body-md'}>Default background color when on My Pages. Should be set to either html or body element.</span>
        </div>
        <div className={'sb-grid-item-token'}>
            <div className={'body-md'}>
                <CopyToClipboard
                    tokenName={'background-secondary'}
                />
            </div>
        </div>
    </div>
    
    
</div>
            {/* System New End*/}


            {/* Opacity New */}
                        {/* System New*/}
    <div className={'color-grid-container'} role={'listbox'}>
        <div className={'color-grid-row'}>
            <div className={'content-grid-row-inner-color'}>
                <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                    <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'}></div>
                        <div className={'col-color-value body-md'}>21:1</div>
                        <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                    </div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                    </div>
                </div>
                <div style={{marginTop: '8px'}}>
                    <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                    <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
                </div>
            </div>
            <div className={'content-grid-row-inner-description'}>
                <span className={'title-md'} style={{paddingBottom:'8px'}}>Opacity Black 50</span>
                <span className={'body-md'}>Default application background color for Alligo E-com.</span>
                <span className={'body-md'}>Should be set to either html or body element.</span>
            </div>
            <div className={'sb-grid-item-token'}>
                <div className={'body-md'}>
                    <CopyToClipboard
                        tokenName={'background-primary'}
                    />
                </div>
            </div>
        </div>
        <div className={'color-grid-row'}>
            <div className={'content-grid-row-inner-color'}>
                <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                    <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'}></div>
                        <div className={'col-color-value body-md'}>21:1</div>
                        <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                    </div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                    </div>
                </div>
                <div style={{marginTop: '8px'}}>
                    <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                    <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
                </div>
            </div>
            <div className={'content-grid-row-inner-description'}>
                <span className={'title-md'} style={{paddingBottom:'8px'}}>Opacity Black 20</span>
                <span className={'body-md'}>Default application background color for Alligo E-com.</span>
                <span className={'body-md'}>Should be set to either html or body element.</span>
            </div>
            <div className={'sb-grid-item-token'}>
                <div className={'body-md'}>
                    <CopyToClipboard
                        tokenName={'background-primary'}
                    />
                </div>
            </div>
        </div>
        <div className={'color-grid-row'}>
            <div className={'content-grid-row-inner-color'}>
                <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                    <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'}></div>
                        <div className={'col-color-value body-md'}>21:1</div>
                        <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                    </div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                    </div>
                </div>
                <div style={{marginTop: '8px'}}>
                    <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                    <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
                </div>
            </div>
            <div className={'content-grid-row-inner-description'}>
                <span className={'title-md'} style={{paddingBottom:'8px'}}>Opacity Black 12</span>
                <span className={'body-md'}>Default application background color for Alligo E-com.</span>
                <span className={'body-md'}>Should be set to either html or body element.</span>
            </div>
            <div className={'sb-grid-item-token'}>
                <div className={'body-md'}>
                    <CopyToClipboard
                        tokenName={'background-primary'}
                    />
                </div>
            </div>
        </div>
        <div className={'color-grid-row'}>
            <div className={'content-grid-row-inner-color'}>
                <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                    <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'}></div>
                        <div className={'col-color-value body-md'}>21:1</div>
                        <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                    </div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                    </div>
                </div>
                <div style={{marginTop: '8px'}}>
                    <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                    <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
                </div>
            </div>
            <div className={'content-grid-row-inner-description'}>
                <span className={'title-md'} style={{paddingBottom:'8px'}}>Opacity Black 10</span>
                <span className={'body-md'}>Default application background color for Alligo E-com.</span>
                <span className={'body-md'}>Should be set to either html or body element.</span>
            </div>
            <div className={'sb-grid-item-token'}>
                <div className={'body-md'}>
                    <CopyToClipboard
                        tokenName={'background-primary'}
                    />
                </div>
            </div>
        </div>
        <div className={'color-grid-row'}>
            <div className={'content-grid-row-inner-color'}>
                <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                    <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'}></div>
                        <div className={'col-color-value body-md'}>21:1</div>
                        <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                    </div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                    </div>
                </div>
                <div style={{marginTop: '8px'}}>
                    <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                    <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
                </div>
            </div>
            <div className={'content-grid-row-inner-description'}>
                <span className={'title-md'} style={{paddingBottom:'8px'}}>Opacity Black 05</span>
                <span className={'body-md'}>Default application background color for Alligo E-com.</span>
                <span className={'body-md'}>Should be set to either html or body element.</span>
            </div>
            <div className={'sb-grid-item-token'}>
                <div className={'body-md'}>
                    <CopyToClipboard
                        tokenName={'background-primary'}
                    />
                </div>
            </div>
        </div>
        <div className={'color-grid-row'}>
            <div className={'content-grid-row-inner-color'}>
                <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                    <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'}></div>
                        <div className={'col-color-value body-md'}>21:1</div>
                        <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                    </div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                    </div>
                </div>
                <div style={{marginTop: '8px'}}>
                    <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                    <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
                </div>
            </div>
            <div className={'content-grid-row-inner-description'}>
                <span className={'title-md'} style={{paddingBottom:'8px'}}>Opacity White 20</span>
                <span className={'body-md'}>Default application background color for Alligo E-com.</span>
                <span className={'body-md'}>Should be set to either html or body element.</span>
            </div>
            <div className={'sb-grid-item-token'}>
                <div className={'body-md'}>
                    <CopyToClipboard
                        tokenName={'background-primary'}
                    />
                </div>
            </div>
        </div>
        <div className={'color-grid-row'}>
            <div className={'content-grid-row-inner-color'}>
                <div className={'bg-color-base bg-color-neutral-black color-neutral-white'}>
                    <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'}></div>
                        <div className={'col-color-value body-md'}>21:1</div>
                        <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                    </div>
                    <div className={'color-value-wrapper'}>
                        <div className={'col-color-value bullet-white'} style={{opacity: '78%'}}></div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>8.19:1</div>
                        <div className={'col-color-value body-md'} style={{opacity: '78%'}}>Text High Emphasis</div>
                    </div>
                </div>
                <div style={{marginTop: '8px'}}>
                    <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                    <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
                </div>
            </div>
            <div className={'content-grid-row-inner-description'}>
                <span className={'title-md'} style={{paddingBottom:'8px'}}>Opacity White 0</span>
                <span className={'body-md'}>Default application background color for Alligo E-com.</span>
                <span className={'body-md'}>Should be set to either html or body element.</span>
            </div>
            <div className={'sb-grid-item-token'}>
                <div className={'body-md'}>
                    <CopyToClipboard
                        tokenName={'background-primary'}
                    />
                </div>
            </div>
        </div>
    </div>
            {/* Opacity New End SECTION 1 Do up to here! then delete this*/}
            {/* NEW TEXT WILL START HERE */}

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>21:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>8:19:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>White</span>
                    <span className={'body-md'}>Default background color on Alligo sites.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--color-greyscale-white)'}
                        />
                    </div>
                </div>
            </div>
        </div>

        <SecondaryIntroComponent
            secondaryContent={'Contrast is the difference in brightness between any two elements. The Web Content Acessibility Guidelines (WCAG) set specific ratios that achieve the minimum required contrast for legibility.\\nWCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text. Graphical elements, such as charts in data visualization, also require a 3:1 contrast ratio.\\nLarge text is defined as 18 point (typically 24px) or larger, or with bold style it´s 14 point (typically 18.66px) or larger.  \\n '}
            secondaryTitle={'Text'}
        />

        <GridHeaderComponent/>

        <div className={'color-grid-container'} role={'listbox'}>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-black'}>
                        <div className={'label-sm color-neutral-white'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper color-neutral-white'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>21:1</div>
                            <div className={'col-color-value body-md'}>White</div>
                        </div>
                        <div className={'color-value-wrapper color-neutral-5'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>19.43:1</div>
                            <div className={'col-color-value body-md'}>Grey 05</div>
                        </div>
                        <div className={'color-value-wrapper color-blue-2'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>16.45:1</div>
                            <div className={'col-color-value body-md'}>Blue Light - Info</div>
                        </div>
                        <div className={'color-value-wrapper color-green-2'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>18.9:1</div>
                            <div className={'col-color-value body-md'}>Green Light - Success</div>
                        </div>
                        <div className={'color-value-wrapper color-yellow-2'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>17.03:1</div>
                            <div className={'col-color-value body-md'}>Yellow Light - Warning</div>
                        </div>
                        <div className={'color-value-wrapper color-red-4'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>19.43:1</div>
                            <div className={'col-color-value body-md'}>Red Light - Danger</div>
                        </div>
                        <div className={'color-value-wrapper color-tools-light'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>19.43:1</div>
                            <div className={'col-color-value body-md'}>Tools Brand Light - Success</div>
                        </div>
                        <div className={'color-value-wrapper color-swedol-light'}>
                            <div className={'col-color-value bullet-white '}></div>
                            <div className={'col-color-value body-md'}>18.9:1</div>
                            <div className={'col-color-value body-md'}>Swedol Brand Light</div>
                        </div>
                        <div className={'color-value-wrapper color-grolls-light'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>17.03:1</div>
                            <div className={'col-color-value body-md'}>Grolls Brand Light</div>
                        </div>
                        <div className={'color-value-wrapper color-univern-light'}>
                            <div className={'col-color-value bullet-white '}></div>
                            <div className={'col-color-value body-md'}>16.45:1</div>
                            <div className={'col-color-value body-md'}>Univern Brand Light</div>
                        </div>

                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#000000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(0, 0, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Text Highest Emphasis</span>
                    <span className={'body-md'}>Highest Emphasis for dark text on light background.
                    Primary text color. Used as the main text color throughout the UI on our sites. Provides good and legible contrast for our content.
                    </span>
                    <p></p>
                    <span className={'body-md'}>
                    Primary text
                    </span>
                    <span className={'body-md'}>
                    Body copy
                    </span>
                    <span className={'body-md'}>
                    Headers
                 </span>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-70'}>
                        <div className={'label-sm color-neutral-white'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper color-neutral-white'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>8.19:1</div>
                            <div className={'col-color-value body-md'}>White</div>
                        </div>
                        <div className={'color-value-wrapper color-neutral-5'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.57:1</div>
                            <div className={'col-color-value body-md'}>Grey 05</div>
                        </div>
                        <div className={'color-value-wrapper color-blue-2'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.16:1</div>
                            <div className={'col-color-value body-md'}>Blue Light - Info</div>
                        </div>
                        <div className={'color-value-wrapper color-green-2'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.35:1</div>
                            <div className={'col-color-value body-md'}>Green Light - Success</div>
                        </div>
                        <div className={'color-value-wrapper color-yellow-2'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.72:1</div>
                            <div className={'col-color-value body-md'}>Yellow Light - Warning</div>
                        </div>
                        <div className={'color-value-wrapper color-red-4'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.1</div>
                            <div className={'col-color-value body-md'}>Red Light - Danger</div>
                        </div>
                        <div className={'color-value-wrapper color-tools-light'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.1</div>
                            <div className={'col-color-value body-md'}>Tools Brand Light - Success</div>
                        </div>
                        <div className={'color-value-wrapper color-swedol-light'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.37:1</div>
                            <div className={'col-color-value body-md'}>Swedol Brand Light</div>
                        </div>
                        <div className={'color-value-wrapper color-grolls-light'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.19:1</div>
                            <div className={'col-color-value body-md'}>Grolls Brand Light</div>
                        </div>
                        <div className={'color-value-wrapper color-univern-light'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.1</div>
                            <div className={'col-color-value body-md'}>Univern Brand Light</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#4F4F4F</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(79, 79, 79, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Text High Emphasis</span>
                    <span className={'body-md'}>High Emphasis for dark text on light background. The secondary text color and is used for text that has to be presented in the interface but not need to be the primary focus. The lighter look is meant to help reduce the cognitive load.
                 </span>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-50 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>4.74.1</div>
                            <div className={'col-color-value body-md'}>White</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#737373</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(102, 102, 102, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'}>Text Medium Emphasis</span>
                    <span className={'body-md'}>Medium Emphasis and hint text for dark text on white background.
                    Is used for text that has to be presented in the interface but not need to be the primary focus.
                    Hover link text color
                    Disabled input text
                    Placeholder text in focused inputs
                    Disabled button label
                    Disabled form element label
                </span>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>21:1</div>
                            <div className={'col-color-value body-md'}>Black</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(255, 255, 255, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Text White 100%</span>
                    <span className={'body-md'}>Used when text sits on dark backgrounds and images.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--text-white-100)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-neutral-2'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper text-black '}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>12.42:1</div>
                            <div className={'col-color-value body-md'}>Black</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FFFFFF</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 255, 255, 0.78)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Text White 78%</span>
                    <span className={'body-md'}>Use when contrast is needed on dark backgrounds for text that don´t need to be the primary focus.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--text-white-78)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-green-0 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.45:1</div>
                            <div className={'col-color-value body-md'}>White</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#138746</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(19, 135, 70, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Text Success</span>
                    <span className={'body-md'}>Default text color for success messages.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--text-success)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-red-0 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white bullet-white'}></div>
                            <div className={'col-color-value body-md'}>7.5:1</div>
                            <div className={'col-color-value body-md'}>White</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#D90000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(217, 0, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Text Danger</span>
                    <span className={'body-md'}>Default text color for error messages.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-red-0, var(--text-danger)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-blue-0 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white bullet-white'}></div>
                            <div className={'col-color-value body-md'}>4.83:1</div>
                            <div className={'col-color-value body-md'}>White-100%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#0066FF</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(0, 102, 255, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Text Information</span>
                    <span className={'body-md'}>Default text color for reenforced messages.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'var(--text-information)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-green-3 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white bullet-white'}></div>
                            <div className={'col-color-value body-md'}>4.52.1</div>
                            <div className={'col-color-value body-md'}>White</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#00838F</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(0, 131, 143, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Price Customer</span>
                    <span className={'body-md'}>Price-customer is the color of price visible for logged in users. </span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-green-3, var(--text-price-customer)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-red-0 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white bullet-white'}></div>
                            <div className={'col-color-value body-md'}>5.31.1</div>
                            <div className={'col-color-value body-md'}>White</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#D90000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(217, 0, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Price Guest</span>
                    <span className={'body-md'}>Price-guest is used for highligting campaign related information such as campaignprices and campaignbadges for customers that´s not logged in.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-red-0, var(--text-price-guest)'}
                        />
                    </div>
                </div>
            </div>
        </div>

        <SecondaryIntroComponent
            secondaryContent={'Alert colors (also known as system colors) are used in order to help and guide our users.'}
            secondaryTitle={'Alert'}
        />

        <GridHeaderComponent/>

        <div className={'color-grid-container'} role={'listbox'}>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-blue-0 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>4.83.1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#0066FF</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#RGBa(0, 102, 255, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Blue - Info</span>
                    <span className={'body-md'}>Blue is used to reenforce a message when it needs to be sharp and clear and at the same time, making it bold and optimistic. Can be used to implicate authentication connectivity and/or progress or to convey general information that isn’t critical. For example, you might show an alert that asks for user feedback.
                    </span>
                    <span className={'body-md'}>Emphasis Heavy</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-blue-0, var(--info-default)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-blue-1'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>16.78:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>6.54:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#D0E9FF</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(208, 233, 255, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Blue Medium - Info</span>
                    <span className={'body-md'}>Used mainly as background for short concise messages to emphasise medium level. For example to communicate medium emphasis in context of a badge.
                    </span>
                    <span className={'body-md'}>Emphasis Medium</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-blue-1, var(--info-medium)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-blue-2'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>18.25:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.12:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#E2F1FF</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(226, 241, 255, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Blue Light - Info</span>
                    <span className={'body-md'}>Blue-light, used mostly as background for text and messages. Can be used to implicate authentication connectivity and/or progress or to convey general information that isn’t critical. For example, you might show an alert that asks for user feedback.
                    </span>
                    <span className={'body-md'}>Emphasis Light</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-blue-2, --info-light'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-green-0 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>4.58:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#138746</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGB(19, 135, 70, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Green - Success</span>
                    <span className={'body-md'}>Default success status color. Green indicates success. Used for example together with form validation and positive feedback.  For example, you might show a success message that tells the user that changes were saved or something was completed.</span>
                    <span className={'body-md'}>Emphasis Heavy</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-green-0, var(--success-default)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-green-1'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>17.53:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.35:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#D6F1E2</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(214, 241, 226, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Green Medium - Success</span>
                    <span className={'body-md'}>Green-Medium indicates success, used mainly as background for short concise messages to emphasise medium level. For example to communicate medium emphasis in context of a badge.</span>
                    <span className={'body-md'}>Emphasis Medium. </span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-green-1, var(--success-medium)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-green-2'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>18.9:1</div>
                            <div className={'col-color-value body-md'}>Text Black-100%</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.35:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text Black-70%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#E8F6EE</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(232, 246, 238, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Green light - Success</span>
                    <span className={'body-md'}>Green-light indicates success, used mostly as background for text and messages. For example together with form validation and positive feedback. Example, you might show a success message that tells the user that changes were saved or something was completed. </span>
                    <span className={'body-md'}>Emphasis Light. </span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-green-2, var(--success-light)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-yellow-0'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>12.27:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FFBA00</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 186, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Yellow - Warning</span>
                    <span className={'body-md'}>Default warning color. Used to display information that needs user’s attention and may require further steps. </span>
                    <span className={'body-md'}>Emphasis Heavy</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-yellow-0, var(--warning-default)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-yellow-1'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>16.69:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>6.51:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FFE399</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 227, 153, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Yellow Medium - Warning</span>
                    <span className={'body-md'}>Yellow-Medium indicates Warning, used mainly as background for short concise messages to emphasise medium level. For example to communicate medium emphasis in context of a badge.</span>
                    <span className={'body-md'}>Emphasis Medium</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-yellow-1, var(--warning-medium)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-yellow-2'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>17.03:1</div>
                            <div className={'col-color-value body-md'}>Text Black-100%</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.72:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text Black-70%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FFF1CC</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(255, 241, 204, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Yellow light- Warning</span>
                    <span className={'body-md'}>Yellow-light indicates a warning of some sort, used mostly as background for text and messages. For example to display information that needs user’s attention and may require further steps.</span>
                    <span className={'body-md'}>Emphasis Light</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-yellow-2, var(--warning-light)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-red-0 color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>5.31:1</div>
                            <div className={'col-color-value body-md'}>Text White 100%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#D90000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(217, 0, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Red - Danger</span>
                    <span className={'body-md'}>Default danger status color. Red is mainly used for messages and in error states.  Also to draw attention to important information that needs to be attended or actions that are destructive or events that block user workflow. This color should be always used for e.g. highlighting errors.</span>
                    <span className={'body-md'}>Emphasis Heavy</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-red-0, var(--danger-default)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-red-3'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>14.46:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>5.64:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#F7CCCC</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(247, 204, 204, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Red Medium - Danger</span>
                    <span className={'body-md'}>Used to communicate problems that have to be resolved so that user can continue forward. Red-Medium, used mainly as background for short concise messages to emphasise level of importance. For example to communicate medium emphasis in context of other badges.</span>
                    <span className={'body-md'}>Emphasis Medium</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-red-3, var(--danger-medium)'}
                        />
                    </div>
                </div>
            </div>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-red-4'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>19.43:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FBE5E5</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(251, 229, 229, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Red light - Danger</span>
                    <span className={'body-md'}>Used to communicate problems that have to be resolved so that user can continue forward. Is mainly used for messages and in error states. Can be used in combination with Red.  This color should be always used for e.g. highlighting errors.</span>
                    <span className={'body-md'}>Emphasis Light</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-red-4, var(--danger-light)'}
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Theme Tools */}
        <SecondaryIntroComponent
            secondaryContent={'Theme colors are used to put some flavour into our concept branded sites and brand white labeled sites.'}
            secondaryTitle={'Themes'}
        />

        <SubHeaderComponent
            subContent={'Tools is one of Alligos four biggest concept brands.'}
            subTitle={'Tools'}
        />

        <GridHeaderComponent/>

        <div className={'color-grid-container'} role={'listbox'}>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-tools-brand color-neutral-white'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>5.67:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#CD1125</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(205, 17, 37, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand</span>
                    <span className={'body-md'}>The primary color of Tools.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-tools-brand'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-tools-light'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>19.43:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FBE5E5</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(250, 231, 233, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand Light</span>
                    <span className={'body-md'}>Used in combination with primary or standalone as for example raised surface color in table headings or highlited parts of the UI. </span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-tools-light'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-tools-dark'}></div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#980000</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa()</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand Dark</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-tools-dark'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-blue-3'}></div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#1877F2</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa()</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Interactive</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-blue-3'}
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Theme Swedol */}
        <SubHeaderComponent
            subContent={'Swedol is one of Alligos four biggest concept brands.'}
            subTitle={'Swedol'}
        />

        <GridHeaderComponent/>

        <div className={'color-grid-container'} role={'listbox'}>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-swedol-brand color-neutral-black'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>12.74:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#C7D300</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(199, 211, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand</span>
                    <span className={'body-md'}>The primary color of Swedol.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-swedol-brand'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-swedol-light'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>18.9:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.37:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#F4F6CC</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(244, 246, 204, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand Light</span>
                    <span className={'body-md'}>Used in combination with primary or standalone as for example raised surface color in table headings or highlited parts of the UI. </span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-swedol-light'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-swedol-dark'}>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#8B9400</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa()</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand Dark</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-swedol-dark'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-blue-3'}>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#1877F2</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa()</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Interactive</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-blue-3'}
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Theme Grolls */}
        <SubHeaderComponent
            subContent={'Grolls is one of Alligos four biggest concept brands.'}
            subTitle={'Grolls'}
        />

        <GridHeaderComponent/>

        <div className={'color-grid-container'} role={'listbox'}>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-grolls-brand'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>7.42:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#F57500</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(245, 117, 0, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand</span>
                    <span className={'body-md'}>The primary color of Grolls.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-grolls-brand'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-grolls-light'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>18.45:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.19:1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#FDE3CC</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(253, 238, 221, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand Light</span>
                    <span className={'body-md'}>Used in combination with primary or standalone as for example raised surface color in table headings or highlited parts of the UI. </span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-grolls-light'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-grolls-dark'}>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#AC5200</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa()</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand Dark</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-grolls-dark'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-blue-3'}>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#1877F2</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa()</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Interactive</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-blue-3'}
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Theme Univern */}
        <SubHeaderComponent
            subContent={'Univern is one of Alligos four biggest concept brands.'}
            subTitle={'Univern'}
        />

        <GridHeaderComponent/>

        <div className={'color-grid-container'} role={'listbox'}>
            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color color-neutral-white'}>
                    <div className={'bg-color-base bg-color-univern-brand'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-white'}></div>
                            <div className={'col-color-value body-md'}>4.54:1</div>
                            <div className={'col-color-value body-md'}>Text White-100%</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#637797</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(99,119,151,1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand</span>
                    <span className={'body-md'}>The primary color of Univern.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-univern-brand'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-univern-light'}>
                        <div className={'label-sm'} style={{marginBottom: '8px'}}>WCAG</div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'}></div>
                            <div className={'col-color-value body-md'}>16.45:1</div>
                            <div className={'col-color-value body-md'}>Text Highest Emphasis</div>
                        </div>
                        <div className={'color-value-wrapper'}>
                            <div className={'col-color-value bullet-black'} style={{opacity: '70%'}}></div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>7.1</div>
                            <div className={'col-color-value body-md'} style={{opacity: '70%'}}>Text High Emphasis</div>
                        </div>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#DEE5E8</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa(233, 238, 241, 1)</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand Light</span>
                    <span className={'body-md'}>Used in combination with primary or standalone as for example raised surface color in table headings or highlited parts of the UI. </span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-univern-light'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-univern-dark'}>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#D16400</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa()</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Brand Dark</span>
                    <span className={'body-md'}>XXX</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-univern-dark'}
                        />
                    </div>
                </div>
            </div>

            <div className={'color-grid-row'}>
                <div className={'content-grid-row-inner-color'}>
                    <div className={'bg-color-base bg-color-blue-3'}>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <div className={'body-md'} style={{opacity: '0.6'}}>#1877F2</div>
                        <div className={'body-md'} style={{opacity: '0.6'}}>RGBa()</div>
                    </div>
                </div>
                <div className={'content-grid-row-inner-description'}>
                    <span className={'title-md'} style={{paddingBottom:'8px'}}>Interactive</span>
                    <span className={'body-md'}>The primary color of Tools.</span>
                </div>
                <div className={'sb-grid-item-token'}>
                    <div className={'body-md'}>
                        <CopyToClipboard
                            tokenName={'bg-color-blue-3'}
                        />
                    </div>
                </div>
            </div>
        </div>

    </main>
</div>;

export default SystemColors;
