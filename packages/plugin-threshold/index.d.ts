import { ImageCallback } from '@jimp/core';

interface Threshold {
  threshold(opts: {
    max: number,
    replace?: number,
    autoGreyscale?: boolean
  }, cb?: ImageCallback): this;
}

export default function(): Threshold;
