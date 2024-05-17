import React from 'react';

const GridHeaderComponent = () => (
    <div className={'sb-grid-header-container'} role={'listbox'}>
        <span className={'alt-label-lrg'}>Example</span>
        <span className={'alt-label-lrg'}>Description</span>
        <span className={'alt-label-lrg'}>Token</span>
    </div>
);

GridHeaderComponent.propTypes = {};

export default GridHeaderComponent;
