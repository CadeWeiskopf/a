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
  style({ width: 'calc((100% / 8) * 1)', transform: 'translateY(-50px)' }),
  style({ width: 'calc((100% / 8) * 2)', transform: 'translateY(-50px)' }),
  style({ width: 'calc((100% / 8) * 3)', transform: 'translateY(-50px)' }),
  style({ width: 'calc((100% / 8) * 4)', transform: 'translateY(-50px)' }),
  style({ width: 'calc((100% / 8) * 5)', transform: 'translateY(-50px)' }),
  style({ width: 'calc((100% / 8) * 6)', transform: 'translateY(-50px)' }),
  style({ width: 'calc((100% / 8) * 7)', transform: 'translateY(-50px)' }),
  style({ width: 'calc((100% / 8) * 8)', transform: 'translateY(-50px)' }),
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
  frameCount: number
): AnimationTransitionMetadata[] => {
  const animates: AnimationTransitionMetadata[] = [];
  for (let i = 0; i < frameCount - 1; i++) {
    animates.push(
      transition(`frame${i} => frame${i + 1}`, [animate('500ms ease-in')])
    );
    animates.push(
      transition(`frame${i + 1} => frame${i}`, [animate('500ms ease-in')])
    );
  }
  return animates;
};
