import { renderAsync } from "npm:@resvg/resvg-js@2.6.2";

import type { ComponentChildren } from "preact";

import svg from "~/libs/imgx/svg.ts";

export default async function png(
  element: ComponentChildren,
  size: [number, number],
) {
  return (await renderAsync(await svg(element, size), {
    fitTo: { mode: "original" },
    font: {
      loadSystemFonts: false,
    },
  })).asPng();
}
