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
  style({ width: 'calc(100%)' }),
]);

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
