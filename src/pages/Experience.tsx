import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import "../styling/Experience.css";
import Typography from '@mui/material/Typography';
import { experienceList } from '../constant';
import { Box, Chip, Grid2 as Grid, Step, StepConnector, StepLabel, Stepper, styled } from '@mui/material';
import CustomStepIcon from '../components/StepIcon';
import { Helmet } from 'react-helmet-async';
import TextGlitchEffect from '../components/GlitchText2';
// import { ReactTyped } from 'react-typed';

const CustomStepConnector = styled(StepConnector)(() => ({
  '& .MuiStepConnector-line': {
    position: 'relative',
    top: '8px',
  },
}));

const Experience: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  const selectedExperience = useMemo(() => experienceList[selected], [selected]);

  return (
    <motion.div
      id="page-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Helmet>
        <link rel="preload" href="./assets/my-image.webp" as="image" type="image/webp" />
      </Helmet>
      <Box sx={{ marginTop: '5rem' }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="h1">Experience</Typography>
          </Grid>
          <Grid size={12} alignContent={'center'} alignItems={'center'} justifyItems={'center'}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                position: 'relative',
              }}
            >
              <Box sx={{ flex: 1, maxWidth: '800px' }}>
                <Stepper activeStep={selected} alternativeLabel connector={<CustomStepConnector />}>
                  {experienceList.map((item, index) => (
                    <Step key={item.name}>
                      <StepLabel
                        onClick={() => handleClick(index)}
                        StepIconComponent={() => (
                          <CustomStepIcon
                            icon={item.imageURL}
                            name={item.name}
                            active={selected === index}
                          />
                        )}
                      />
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
          </Grid>
          <Grid size={12} alignContent={'center'} alignItems={'center'} justifyItems={'center'}>
            <Box id="experience-container">
              <TextGlitchEffect
                text={selectedExperience.name}
                speed={40}
                letterCase="lowercase"
                className="glitchText"
                type="alphanumeric"
                startOnLoad
                componentContainer="h2"
                style={{marginTop:'0'}}
              />
              <div className="timeline-content">
                <Typography variant="h6" style={{ marginTop: '1rem' }}>
                  Responsibilities:
                </Typography>
                <ul>
                  {selectedExperience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      <Typography variant="body2"> {responsibility}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
              <Typography variant="h6" style={{ marginTop: '1rem' }}>
                Tech stack used:
              </Typography>
              <div className="timeline-stack-list-container">
                {selectedExperience.stack.map((stackItem) => (
                  <Chip
                    key={stackItem.name}
                    style={{ backgroundColor: stackItem.color, color: '#fff' }}
                    label={stackItem.name}
                  />
                ))}
              </div>
            </Box>

          </Grid>
        </Grid>




      </Box>
    </motion.div>
  );
};

export default Experience;
