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
  style({ maxWidth: 'calc(100%)' }),
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
  style({}),
  style({
    width: 'calc((100% / 8) * 1)',
    transform: 'translateY(calc(-100% * 2))',
  }),
  style({
    width: 'calc((100% / 8) * 2)',
    transform: 'translateY(calc(-100% * 4))',
  }),
  style({
    width: 'calc((100% / 8) * 3)',
    transform: 'translateY(calc(-100% * 6))',
  }),
  style({
    width: 'calc((100% / 8) * 4)',
    transform: 'translateY(calc(-100% * 8))',
  }),
  style({
    width: 'calc((100% / 8) * 5)',
    transform: 'translateY(calc(-100% * 6))',
  }),
  style({
    width: 'calc((100% / 8) * 6)',
    transform: 'translateY(calc(-100% * 4))',
  }),
  style({
    width: 'calc((100% / 8) * 7)',
    transform: 'translateY(calc(-100% * 2))',
  }),
  style({
    width: 'calc((100% / 8) * 8)',
    transform: 'translateY(calc(-100%))',
  }),
]);

export const dotTextPhases = [
  '.',
  '.',
  '.',
  '.',
  'f',
  'fu',
  'ful',
  'full',
  'fulls',
  'fullst',
  'fullsta',
  'fullstac',
  'fullstack',
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
