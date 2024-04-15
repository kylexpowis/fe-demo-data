import React from 'react';
import { keyframes } from '@emotion/react';
import { styled } from '@emotion/styled';

const pulse = keyframes`
    0% {
    box-shadow: 0 0 8px #00ff00, inset 0 0 8px #00ff00;
    }
    50% {
    box-shadow: 0 0 16px #00ff00, inset 0 0 14px #00ff00;
    }
    100% {
    box-shadow: 0 0 8px #00ff00, inset 0 0 8px #00ff00;
    }
`;

const GlowingCircle = styled('div')({
    backgroundColor: 'transparent',
    width: '100px',
    height: '100px',
    borderRadius: '50px',
    boxShadow: '0 0 8px #00ff00, inset 0 0 8px #00ff00',
    animation: `${pulse} 2s linear infinite`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -2,
    position: 'relative',
    margin: '60px auto',
    border: '2px solid #30ff9a',
    '& p': {
        fontSize: '24px',
        color: '#ea4c89',
        textShadow: '0 0 4px #ea4c89'
    }
});

function ServiceStatusIndicator() {
    return (
        <GlowingCircle>
            <p>Active</p>
        </GlowingCircle>
    );
}

export default ServiceStatusIndicator;
