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
  style({ fontSize: '2em' }),
]);

export const cadeSpanFrames = generateStates([
  style({}),
  style({}),
  style({ width: '0%' }),
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
  style({ fontSize: '2em' }),
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
    transform: 'translateY(calc(-100% * 1.833))',
  }),
  style({
    width: 'calc((100% / 8) * 2.75)',
    transform: 'translateY(calc(-100% * 4.5))',
  }),
  style({
    width: 'calc((100% / 8) * 3.625)',
    transform: 'translateY(calc(-100% * 5.833))',
  }),
  style({
    width: 'calc((100% / 8) * 4.5)',
    transform: 'translateY(calc(-100% * 6))',
  }),
  style({
    width: 'calc((100% / 8) * 8)',
    transform: 'translateY(calc(-50%))',
    fontSize: '2em',
    textTransform: 'uppercase',
  }),
]);

export const fullStackUFrames = generateStates([
  style({}),
  style({}),
  style({}),
  style({}),
  style({
    // opacity: '0',
    // width: '0px',
  }),
  style({
    // width: 'auto',
    // opacity: '1',
    // width: 'calc((100% / 8) * 1)',
    // transform: 'translateY(calc(-100% * 2))',
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
    transform: 'translateY(calc(100% * 1.833))',
  }),
  style({
    position: 'absolute',
    right: '0px',
    width: 'calc((100% / 8) * 2.75)',
    transform: 'translateY(calc(100% * 4.5))',
  }),
  style({
    position: 'absolute',
    right: '0px',
    width: 'calc((100% / 8) * 3.625)',
    transform: 'translateY(calc(100% * 5.833))',
  }),
  style({
    position: 'absolute',
    right: '0px',
    width: 'calc((100% / 8) * 4.5)',
    transform: 'translateY(calc(100% * 6))',
  }),

  style({
    position: 'absolute',
    right: '0px',
    width: 'calc((100% / 8) * 8)',
    transform: 'translateY(calc(50%))',
    fontSize: '2em',
    textTransform: 'uppercase',
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
