import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";
import { Tile } from "./index.ts";
import { tilesTypes } from "./types.ts";

Deno.test("Borders rotation", () => {
    const tile = new Tile(tilesTypes[23]);
    tile.rotation = 3;
    const { sides, halves } = tile.getBorders();
    assertEquals(sides, [2, 3, 4, 1]);
    assertEquals(halves, [10, 11, 11, 12, 12, 9, 9, 10]);
});

Deno.test("Get opposite side", () => {
    assertEquals(Tile.getOppositeSide(0), 2);
    assertEquals(Tile.getOppositeSide(1), 3);
    assertEquals(Tile.getOppositeSide(2), 0);
    assertEquals(Tile.getOppositeSide(3), 1);
});
