export class DrawSizeRating {
  constructor(
    public baseDrawSize:number,
    public displayedDrawSizes: number[]
  ) {};
}

export const DEFAULT_DRAWS_SIZES: DrawSizeRating =
  new DrawSizeRating (16, [2,3,4,5,6,8,12,16]);
export const LARGE_DRAWS_SIZES: DrawSizeRating =
  new DrawSizeRating (16, [2,4,6,8,12,16,24,32,64]);
