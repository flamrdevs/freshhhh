import fs from "node:fs/promises";
import path from "node:path";

import satori, { type Font } from "satori";

import type { ComponentChildren } from "preact";

let fonts: Font[] = [];

export default async function svg(
  element: ComponentChildren,
  [width, height]: [number, number],
) {
  if (!fonts.length) {
    const load = async (weight: Font["weight"]): Promise<Font> => ({
      name: "mono",
      data: (await fs.readFile(
        path.resolve(
          Deno.cwd(),
          `libs/imgx/fonts/spline-sans-mono-${weight}.woff`,
        ),
      )).buffer,
      style: "normal",
      weight,
    });

    fonts = await Promise.all(
      ([300, 400, 500, 600, 700] as const).map((weight) => load(weight)),
    );
  }

  return await satori(element, { fonts, width, height });
}
