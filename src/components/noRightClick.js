import React, { useRef } from 'react';
import ContextMenu from './ContextMenu';

const NoRightClick = ({ children, menuItems }) => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef}>
            {children}

            <ContextMenu
                parentRef={containerRef}
                items={menuItems}
            />
        </div>
    );
};

export default NoRightClick ;