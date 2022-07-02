import styled from 'styled-components';

const Wave = ({ children }) => {
    return (
        <Div>
            {children}
            <svg>
                <filter id="wave">
                    <feTurbulence x="-50" y="-50" baseFrequency="0.01" numOctaves="10" seed="10">
                        <animate
                            attributeName="baseFrequency"
                            dur="20"
                            values="0.01; 0.02; 0.01"
                            repeatCount="indefinite"
                        />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="30" />
                </filter>
            </svg>
        </Div>
    );
};

const Div = styled.div`
    svg {
        display: none;
    }
`;

export default Wave;
