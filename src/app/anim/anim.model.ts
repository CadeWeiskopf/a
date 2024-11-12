import {
  animate,
  AnimationStyleMetadata,
  AnimationTransitionMetadata,
  state,
  style,
  transition,
} from '@angular/animations';

export const wordsFrames = generateStates([
  style({}),
  style({ width: 'calc(100%)' }),
]);

export const cadeFrames = generateStates([
  style({}),
  style({}),
  style({ width: '0%' }),
]);

export const lCadeFrames = generateStates([
  style({}),
  style({}),
  style({
    fontSize: 'clamp(1.5rem, 8vmin, 6rem)',
    lineHeight: 'clamp(1.5rem, 8vmin, 6rem)',
  }),
]);

export const cadeSpanFrames = generateStates([
  style({}),
  style({}),
  style({ width: '0%' }),
]);

export const cadeTrailFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({ width: '20px' }),
]);

export const wFrames = generateStates([
  style({}),
  style({}),
  style({}),
  // style({ maxWidth: '100%', width: 'auto' }),
  style({ maxWidth: '0px', width: '0px' }),
]);

export const wSpanFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({}),
  style({ width: '0%' }),
]);

export const lWFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({}),
  style({
    fontSize: 'clamp(1.5rem, 8vmin, 6rem)',
    lineHeight: 'clamp(1.5rem, 8vmin, 6rem)',
  }),
]);

//    transform: translate(-50px, -50px);

export const dotFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({ width: 'calc(100%)' }),
]);

export const dotSpanFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({}),
  style({ opacity: '0' }),
  style({
    width: 'calc((100% / 8) * 1.875)',
    transform: 'translateY(calc(-100% * 0.833)) rotateZ(-36deg)',
  }),
  style({
    width: 'calc((100% / 8) * 2.75)',
    transform: 'translateY(calc(-100% * 3.5)) rotateZ(-216deg)',
  }),
  style({
    width: 'calc((100% / 8) * 3.625)',
    transform: 'translateY(calc(-100% * 4.833)) rotateZ(-288deg)',
  }),
  style({
    width: 'calc((100% / 8) * 4.5)',
    transform: 'translateY(calc(-100% * 5)) rotate(-360deg)',
  }),
  style({
    width: 'calc((100% / 8) * 8)',
    transform: 'translateY(calc(-50%)) rotate(-360deg)',
    fontSize: 'clamp(1.5rem, 8vmin, 6rem)',
    lineHeight: 'clamp(1.5rem, 8vmin, 6rem)',
    textTransform: 'uppercase',
    padding: '0 0.2rem',
  }),
]);

export const devFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({}),
  style({
    position: 'absolute',
    right: '0px',
  }),
  style({
    position: 'absolute',
    right: '0px',
    width: 'calc((100% / 8) * 1.875)',
    transform: 'translateY(calc(100% * 0.833)) rotateZ(36deg)',
  }),
  style({
    position: 'absolute',
    right: '0px',
    width: 'calc((100% / 8) * 2.75)',
    transform: 'translateY(calc(100% * 3.5)) rotateZ(216deg)',
  }),
  style({
    position: 'absolute',
    right: '0px',
    width: 'calc((100% / 8) * 3.625)',
    transform: 'translateY(calc(100% * 4.833)) rotateZ(288deg)',
  }),
  style({
    position: 'absolute',
    right: '0px',
    width: 'calc((100% / 8) * 4.5)',
    transform: 'translateY(calc(100% * 5)) rotate(360deg)',
  }),

  style({
    position: 'absolute',
    right: '0px',
    width: 'calc((100% / 8) * 8)',
    transform: 'translateY(calc(50%)) rotate(360deg)',
    // fontSize: '2em',
    textTransform: 'uppercase',
  }),
]);

export const leftFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({
    width: '25%',
  }),
]);

export const rightFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({
    width: '100%',
  }),
]);

export const devSpanFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({
    fontSize: 'clamp(1.5rem, 8vmin, 6rem)',
    lineHeight: 'clamp(1.5rem, 8vmin, 6rem)',
    padding: '0 0.2rem',
  }),
]);

export const dotTextPhases = [
  '.',
  '.',
  '.',
  '.',
  '.',
  'f',
  'fu',
  'ful',
  'full',
  'fullstack',
];

export const devTextPhases = [
  '',
  '',
  '',
  '',
  '',
  'e',
  'el',
  'elo',
  'elop',
  'eloper',
];

export const canvasFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({}),
  style({
    transform: 'translateX(25%)',
  }),
]);

function generateStates(styles: AnimationStyleMetadata[]) {
  return styles.map((e, i) => state(`frame${i}`, e));
}

export const generateAnimateCalls = (
  frameCount: number,
  uniqueAnimations?: {
    [frameTransition: string]: string;
  },
  defaultAnimation = '500ms ease-in'
): AnimationTransitionMetadata[] => {
  const animates: AnimationTransitionMetadata[] = [];
  for (let i = 0; i < frameCount - 1; i++) {
    const forwardTransitionKey = `frame${i} => frame${i + 1}`;
    animates.push(
      transition(forwardTransitionKey, [
        animate(uniqueAnimations?.[forwardTransitionKey] ?? defaultAnimation),
      ])
    );

    const reverseTransitionKey = `frame${i + 1} => frame${i}`;
    animates.push(
      transition(reverseTransitionKey, [
        animate(uniqueAnimations?.[reverseTransitionKey] ?? defaultAnimation),
      ])
    );
  }
  return animates;
};
