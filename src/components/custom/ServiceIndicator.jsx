import React, { useEffect } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Tooltip } from '@mui/material';

const pulseGreen = keyframes`
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

const pulseYellow = keyframes`
    0% {
        box-shadow: 0 0 8px #FFFF00, inset 0 0 8px #FFFF00;
    }
    50% {
        box-shadow: 0 0 16px #FFFF00, inset 0 0 14px #FFFF00;
    }
    100% {
        box-shadow: 0 0 8px #FFFF00, inset 0 0 8px #FFFF00;
    }
`;

const GlowingCircle = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'loading'
})(({ loading }) => ({
    background: 'radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(38,255,165,0.9) 45%, rgba(38,255,165,0.5) 65%, rgba(227,255,244,0.1) 85%, rgba(227,255,244,0) 100%)',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: '50px',
    marginRight: '0.5rem',
    boxShadow: loading ? '0 0 8px #FFFF00, inset 0 0 8px #FFFF00' : '0 0 8px #00ff00, inset 0 0 8px #00ff00',
    animation: `${loading ? pulseYellow : pulseGreen} 2s linear infinite`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'relative',
    border: '1px solid transparent',
}));

function ServiceStatusIndicator({ loading }) {
    // useEffect(() => {
    //     console.log(`Loading state is now: ${loading}`);
    //     if (loading) {
    //         console.log("Starting loading effect...");
    //     } else {
    //         console.log("Loading complete.");
    //     }
    // }, [loading]);

    return (
        <Tooltip title={loading ? "Updating..." : "Real-Time Status: Live"} arrow>
            <GlowingCircle loading={loading} />
        </Tooltip>
    );
}

export default ServiceStatusIndicator;
