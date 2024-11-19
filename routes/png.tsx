import png from "~/libs/imgx/png.ts";

export const handler = async (): Promise<Response> => {
  return new Response(
    await png(
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          border: "2px solid gray",
          backgroundColor: "black",
          color: "white",
          fontFamily: "mono",
          fontSize: 24,
          fontStyle: "normal",
          fontWeight: 500,
        }}
      >
        [jsr]
      </div>,
      [1200, 600],
    ),
    {
      headers: {
        "Content-Type": "image/png",
      },
    },
  );
};
