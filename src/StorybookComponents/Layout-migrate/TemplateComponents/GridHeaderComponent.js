import React from 'react';

const GridHeaderComponent = () => (
    <div className={'sb-grid-header-container'} role={'listbox'}>
        <span className={'alt-label-lg'}>Example</span>
        <span className={'alt-label-lg'}>Description</span>
        <span className={'alt-label-lg'}>Token</span>
    </div>
);

GridHeaderComponent.propTypes = {};

export default GridHeaderComponent;
