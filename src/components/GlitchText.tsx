import React from "react";

interface GlitchTextProps {
    text: string;
    stacks?: number; // Number of stacks, defaults to 3
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, stacks = 3 }) => {
    return (
        <div className="stack" style={{ "--stacks": stacks } as React.CSSProperties}>
            <span style={{ "--index": 0 } as React.CSSProperties}>{text}</span>
            <span style={{ "--index": 1 } as React.CSSProperties}>{text}</span>
            <span style={{ "--index": 2 } as React.CSSProperties}>{text}</span>
        </div>
    );
};

export default GlitchText;
