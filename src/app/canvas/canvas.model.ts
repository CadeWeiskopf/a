export type CalculatedCoordinates = {
  x: () => number;
  y: () => number;
};

export type Coordinates = {
  x: number;
  y: number;
};

export type Word = {
  phases: WordPhase[];
};

export type WordPhase = {
  text: string;
  position: CalculatedCoordinates;
  prevPosition?: Coordinates;
  measurement: () => TextMetrics;
};

export type Scene = {
  words: Word[];
};

const CADE_TEXT = 'cade';
const W_TEXT = 'w';
const DOT_TEXT = '.';
const DEV_TEXT = 'dev';
export let FONT_SIZE = 42; //42
export const updateFontSize = (val: number) => (FONT_SIZE = val);

const EMPTY_WORD = {
  text: '',
  position: {
    x: () => {
      return 0;
    },
    y: () => {
      return 0;
    },
  },
  measurement: () => ({ width: 0 } as unknown as TextMetrics),
} as const;

export function getFirstScene(context: CanvasRenderingContext2D): Scene {
  const fullstack: Word = {
    phases: [
      {
        text: `FullStack`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`FullStack`).width / 2
            );
          },
          y: () => {
            return FONT_SIZE * -1;
          },
        },
        measurement: () => context.measureText(`FullStack`),
      },
      {
        text: `FullStack`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`FullStack`).width / 2
            );
          },
          y: () => {
            return FONT_SIZE * -1;
          },
        },
        measurement: () => context.measureText(`FullStack`),
      },
      {
        text: `FullStack`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`FullStack`).width / 2
            );
          },
          y: () => {
            return FONT_SIZE * -1;
          },
        },
        measurement: () => context.measureText(`FullStack`),
      },
      {
        text: `FullStack`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`FullStack`).width / 2
            );
          },
          y: () => {
            return FONT_SIZE * -1;
          },
        },
        measurement: () => context.measureText(`FullStack`),
      },
      {
        text: `FullStack`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(' ').width
            );
          },
          y: () => {
            return FONT_SIZE * -1;
          },
        },
        measurement: () => context.measureText(`FullStack`),
      },
      {
        text: `FullStack`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 0.9;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 - FONT_SIZE;
          },
        },
        measurement: () => context.measureText(`FullStack`),
      },
      {
        text: `FullStack`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 0.9;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 - FONT_SIZE / 2;
          },
        },
        measurement: () => context.measureText(`FullStack`),
      },
      {
        text: `FullStack`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 0.9;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 - FONT_SIZE / 2;
          },
        },
        measurement: () => context.measureText(`FullStack`),
      },
    ],
  };

  const dev: Word = {
    phases: [
      {
        text: DEV_TEXT,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth -
              dev.phases[0].measurement().width
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DEV_TEXT),
      },
      {
        text: DEV_TEXT,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth -
              dev.phases[0].measurement().width
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DEV_TEXT),
      },
      {
        text: DEV_TEXT,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth -
              dev.phases[0].measurement().width
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DEV_TEXT),
      },
      {
        text: DEV_TEXT,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth -
              dev.phases[0].measurement().width
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DEV_TEXT),
      },
      {
        text: DEV_TEXT,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.7;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DEV_TEXT),
      },
      {
        text: `Developer`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 0.9;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(`Developer`),
      },
      {
        text: `Developer`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 0.9;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 + FONT_SIZE / 2;
          },
        },
        measurement: () => context.measureText(`Developer`),
      },
      {
        text: `Developer`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 0.9;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 + FONT_SIZE / 2;
          },
        },
        measurement: () => context.measureText(`Developer`),
      },
    ],
  };

  const dot: Word = {
    phases: [
      {
        text: DOT_TEXT,
        position: {
          x: () => {
            return (
              dev.phases[0].position.x() - dot.phases[0].measurement().width
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DOT_TEXT),
      },
      {
        text: DOT_TEXT,
        position: {
          x: () => {
            return (
              dev.phases[0].position.x() - dot.phases[0].measurement().width
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DOT_TEXT),
      },
      {
        text: DOT_TEXT,
        position: {
          x: () => {
            return (
              dev.phases[0].position.x() - dot.phases[0].measurement().width
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DOT_TEXT),
      },
      {
        text: DOT_TEXT,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.75;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DOT_TEXT),
      },
      {
        text: DOT_TEXT,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.65;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(DOT_TEXT),
      },
      {
        text: ',',
        position: {
          x: () => {
            return (
              w.phases[5].position.x() +
              w.phases[5].measurement().width +
              FONT_SIZE / 6
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(','),
      },
      {
        text: ',',
        position: {
          x: () => {
            return (
              w.phases[5].position.x() +
              w.phases[5].measurement().width +
              FONT_SIZE / 6
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(','),
      },
      {
        text: ',',
        position: {
          x: () => {
            return (
              w.phases[5].position.x() +
              w.phases[5].measurement().width +
              FONT_SIZE / 12
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(','),
      },
      {
        text: ',',
        position: {
          x: () => {
            return (
              w.phases[5].position.x() +
              w.phases[5].measurement().width +
              FONT_SIZE / 12
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(','),
      },
    ],
  };

  const w: Word = {
    phases: [
      {
        text: W_TEXT,
        position: {
          x: () => {
            return dot.phases[0].position.x() - w.phases[0].measurement().width;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(W_TEXT),
      },
      {
        text: W_TEXT,
        position: {
          x: () => {
            return dot.phases[0].position.x() - w.phases[0].measurement().width;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(W_TEXT),
      },
      {
        text: W_TEXT,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.8;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(W_TEXT),
      },
      {
        text: W_TEXT,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.6;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(W_TEXT),
      },
      {
        text: W_TEXT,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(`Weiskopf`),
      },
      {
        text: `Weiskopf`,
        position: {
          x: () => {
            return (
              cade.phases[5].position.x() +
              cade.phases[5].measurement().width +
              FONT_SIZE / 6
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(`Weiskopf`),
      },
      {
        text: `Weiskopf`,
        position: {
          x: () => {
            return (
              cade.phases[5].position.x() +
              cade.phases[5].measurement().width +
              FONT_SIZE / 6
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => context.measureText(`Weiskopf`),
      },
    ],
  };

  const cade: Word = {
    phases: [
      {
        text: CADE_TEXT,
        position: {
          x: () => {
            return (
              w.phases[0].position.x() - cade.phases[0].measurement().width
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => {
          return context.measureText(CADE_TEXT);
        },
      },
      {
        text: CADE_TEXT,
        position: {
          x: () => {
            return Math.min(
              document.documentElement.clientWidth * 0.8,
              document.documentElement.clientWidth * 0.8 -
                w.phases[1].measurement().width
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => {
          return context.measureText(CADE_TEXT);
        },
      },
      {
        text: CADE_TEXT,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.6;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => {
          return context.measureText(CADE_TEXT);
        },
      },
      {
        text: CADE_TEXT,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => {
          return context.measureText(CADE_TEXT);
        },
      },
      {
        text: `Cade`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`Cade`).width -
              context.measureText(`Weiskopf`).width -
              FONT_SIZE * 1.25
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => {
          return context.measureText(`Cade`);
        },
      },
      {
        text: `Cade`,
        position: {
          x: () => {
            return cade.phases[4].position.x();
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => {
          return context.measureText(`Cade`);
        },
      },
      {
        text: `Cade`,
        position: {
          x: () => {
            return cade.phases[4].position.x();
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5;
          },
        },
        measurement: () => {
          return context.measureText(`Cade`);
        },
      },
    ],
  };

  const securing: Word = {
    phases: [
      {
        text: `Securing data`,
        position: {
          x: () => {
            return 0;
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 + FONT_SIZE;
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Securing data`).width * -1
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 + FONT_SIZE;
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Securing data`).width * -1
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 + FONT_SIZE;
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Securing data`).width * -1
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 + FONT_SIZE;
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Securing data`).width * -1
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 + FONT_SIZE;
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Securing data`).width * -1
            );
          },
          y: () => {
            return document.documentElement.clientHeight * 0.5 + FONT_SIZE;
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Securing data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 * 1.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5 * 2
            );
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
      {
        text: `Securing data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Securing data`);
        },
      },
    ],
  };

  const storing: Word = {
    phases: [
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Storing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Storing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Storing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Storing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Storing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Storing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Storing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Storing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 * 1.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5 * 2
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
      {
        text: `Storing  data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5 * 2
            );
          },
        },
        measurement: () => {
          return context.measureText(`Storing  data`);
        },
      },
    ],
  };

  const sending: Word = {
    phases: [
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Sending  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Sending  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Sending  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Sending  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Sending  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Sending  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Sending  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Sending  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Sending  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 * 1.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
      {
        text: `Sending  data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 * 1.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Sending  data`);
        },
      },
    ],
  };

  const showing: Word = {
    phases: [
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText(`Showing  data`).width * -1
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
      {
        text: `Showing  data`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5 + FONT_SIZE * 3;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Showing  data`);
        },
      },
    ],
  };

  const via: Word = {
    phases: [
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText('Securing data').width +
              FONT_SIZE * 3
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 3 * 0.9
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
      {
        text: `Via`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText('Securing data').width +
              FONT_SIZE * 3
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 3 * 0.9
            );
          },
        },
        measurement: () => {
          return context.measureText(`Via`);
        },
      },
    ],
  };

  const reliable: Word = {
    phases: [
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText('Securing data').width +
              FONT_SIZE * 3
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 3 * 1.4
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
      {
        text: `Reliable`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText('Securing data').width +
              FONT_SIZE * 3
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 3 * 1.4
            );
          },
        },
        measurement: () => {
          return context.measureText(`Reliable`);
        },
      },
    ],
  };

  const software: Word = {
    phases: [
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return document.documentElement.clientWidth;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText('Securing data').width +
              FONT_SIZE * 3
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 3 * 1.9
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
      {
        text: `Software`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 +
              context.measureText('Securing data').width +
              FONT_SIZE * 3
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 3 * 1.9
            );
          },
        },
        measurement: () => {
          return context.measureText(`Software`);
        },
      },
    ],
  };

  const lets: Word = {
    phases: [
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`Let's Work Together`).width -
              FONT_SIZE * 0.65
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
      {
        text: `Let's `,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`Let's Work Together`).width -
              FONT_SIZE * 0.65
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Let's `);
        },
      },
    ],
  };

  const work: Word = {
    phases: [
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`Work Together`).width -
              FONT_SIZE * 0.65
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
      {
        text: `Work `,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`Work Together`).width -
              FONT_SIZE * 0.65
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Work `);
        },
      },
    ],
  };

  const together: Word = {
    phases: [
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 +
              FONT_SIZE * 2.5 +
              100
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Toge`,
        position: {
          x: () => {
            return document.documentElement.clientWidth * 0.5;
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Toge`);
        },
      },
      {
        text: `Together`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`Together`).width -
              FONT_SIZE * 0.65
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Together`);
        },
      },
      {
        text: `Together`,
        position: {
          x: () => {
            return (
              document.documentElement.clientWidth * 0.5 -
              context.measureText(`Together`).width -
              FONT_SIZE * 0.65
            );
          },
          y: () => {
            return (
              document.documentElement.clientHeight * 0.5 + FONT_SIZE * 2.5
            );
          },
        },
        measurement: () => {
          return context.measureText(`Together`);
        },
      },
    ],
  };

  return {
    words: [
      cade,
      w,
      dot,
      dev,
      fullstack,
      securing,
      storing,
      sending,
      together,
      showing,
      via,
      reliable,
      software,
      lets,
      work,
    ],
  };
}
