import { Box, StepIconProps } from '@mui/material';
import { useEffect, useState } from 'react';

// Define the props for the CustomStepIcon component
interface CustomStepIconProps {
    icon: string;
    name: string;
}

// Custom Icon Component
const CustomStepIcon: React.FC<StepIconProps & CustomStepIconProps> = ({
    icon,
    name,
    active,
    // completed,
}) => {
    const [_, setIsAnimating] = useState(false);

    useEffect(() => {
        if (active) {
            setIsAnimating(true);
            const timer = setTimeout(() => setIsAnimating(false), 500); // Animation duration
            return () => clearTimeout(timer);
        }
    }, [active]);

    return <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            color: 'white',
            transform: active ? 'scale(1.2)' : 'scale(1)', // Animation on active state
            transition: 'transform 0.3s ease', // Smooth transition
            '&:hover': {
                cursor: 'pointer'
            }
        }}
    >
        <img
            src={icon}
            alt={name}
            className="timeline-icon"
            style={{ width: '24px', height: '24px', borderRadius: '50%' }}
        />
    </Box>
};

export default CustomStepIcon;