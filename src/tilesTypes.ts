import { TileType } from "./tileType.ts";

const tilesTypesRaw: [number[], number[], boolean, boolean][] = [
    [[0, 0, 0, 0], [9, 9, 9, 9, 9, 9, 9, 9], true, false],
    [[0, 0, 0, 1], [9, 9, 9, 9, 9, 9, 9, 9], true, false],
    [[5, 5, 5, 5], [0, 0, 0, 0, 0, 0, 0, 0], false, true],
    [[5, 5, 5, 0], [0, 0, 0, 0, 0, 0, 9, 9], false, false],
    [[5, 5, 5, 0], [0, 0, 0, 0, 0, 0, 9, 9], false, true],
    [[5, 5, 5, 1], [0, 0, 0, 0, 0, 0, 9, 10], false, false],
    [[5, 5, 5, 1], [0, 0, 0, 0, 0, 0, 9, 10], false, true],
    [[5, 5, 5, 1], [0, 0, 0, 0, 0, 0, 9, 10], false, false],
    [[5, 5, 0, 0], [0, 0, 0, 0, 9, 9, 9, 9], false, true],
    [[5, 5, 1, 1], [0, 0, 0, 0, 9, 10, 10, 9], false, false],
    [[5, 5, 1, 1], [0, 0, 0, 0, 9, 10, 10, 9], false, true],
    [[5, 0, 5, 0], [0, 0, 9, 9, 0, 0, 10, 10], false, false],
    [[5, 0, 5, 0], [0, 0, 9, 9, 0, 0, 10, 10], false, true],
    [[5, 6, 0, 0], [0, 0, 0, 0, 9, 9, 9, 9], false, false],
    [[0, 5, 0, 6], [9, 9, 0, 0, 9, 9, 0, 0], false, false],
    [[0, 5, 0, 0], [9, 9, 0, 0, 9, 9, 9, 9], false, false],
    [[1, 5, 0, 1], [9, 10, 0, 0, 10, 10, 10, 9], false, false],
    [[0, 5, 1, 1], [9, 9, 0, 0, 9, 10, 10, 9], false, false],
    [[1, 5, 2, 3], [9, 10, 0, 0, 10, 11, 11, 9], false, false],
    [[1, 5, 1, 0], [9, 10, 0, 0, 10, 9, 9, 9], false, false],
    [[0, 1, 0, 1], [9, 9, 9, 10, 10, 10, 10, 9], false, false],
    [[1, 0, 0, 1], [9, 10, 10, 10, 10, 10, 10, 9], false, false],
    [[1, 0, 2, 3], [9, 10, 10, 10, 10, 11, 11, 9], false, false],
    [[1, 2, 3, 4], [9, 10, 10, 11, 11, 12, 12, 9], false, false],
];

const tilesTypes: TileType[] = tilesTypesRaw.map((x) => {
    return { sides: x[0], halfs: x[1], monastery: x[2], shield: x[3] };
});

export default tilesTypes;