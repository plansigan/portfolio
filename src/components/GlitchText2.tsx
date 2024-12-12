import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const SPECIAL_CHARS = '~`!@#$%^&*()-+=/*[]{}:<>?';
const NUMBERS = '0123456789';

interface Props {
  componentContainer?: React.ElementType;
  text: string;
  speed?: number;
  letterCase?: 'lowercase' | 'uppercase';
  className?: string;
  type?: 'alphabets' | 'specialchars' | 'numbers' | 'alphanumeric';
  startOnLoad?: boolean;
  style?: any;
}

const TYPES = {
  ALPHABETS: 'alphabets',
  NUMBERS: 'numbers',
  SPECIAL_CHARS: 'specialchars',
  ALPHA_NUMERIC: 'alphanumeric',
} as const;

let interval: any = null;

const TextGlitchEffect: React.FC<Props> = ({
  componentContainer = 'p',
  text,
  speed = 30,
  letterCase = 'uppercase',
  className,
  type = 'alphabets',
  startOnLoad = false,
  style = {}
}) => {
  const elementRef = useRef<HTMLElement | null>(null);

  const startGlitchEffect = (target: HTMLElement): void => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval((): void => {
      if (!target) return;

      target.innerText = target.innerText
        .split('')
        .map((_alphabet: string, index: number) => {
          if (index < iteration) {
            return target.dataset.value![index];
          }

          let letters: string = LETTERS;

          switch (type) {
            case TYPES.ALPHABETS:
              letters = LETTERS;
              break;
            case TYPES.NUMBERS:
              letters = NUMBERS;
              break;
            case TYPES.SPECIAL_CHARS:
              letters = SPECIAL_CHARS;
              break;
            case TYPES.ALPHA_NUMERIC:
              letters = LETTERS + NUMBERS;
              break;
          }

          const individualLetter =
            letters[Math.floor(Math.random() * letters.length)];

          return letterCase === 'uppercase'
            ? individualLetter.toUpperCase()
            : individualLetter.toLowerCase();
        })
        .join('');

      if (iteration >= target.dataset.value!.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    if (startOnLoad && elementRef.current) {
      startGlitchEffect(elementRef.current);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startOnLoad, text, speed, type, letterCase]);

  return (
    <Box
      component={componentContainer}
      ref={elementRef}
      data-value={text}
      onMouseEnter={
        startOnLoad
          ? undefined
          : (e:any) => startGlitchEffect(e.target as HTMLElement)
      }
      className={className}
      style={{
        fontVariantNumeric: 'tabular-nums',
        ...style
      }}
    >
      {text}
    </Box>
  );
};

export default TextGlitchEffect;
