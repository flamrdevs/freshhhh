import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="flex items-center justify-center w-dvw h-dvh bg-black font-mono font-medium text-xl lg:text-2xl text-white">
        <h1>Page not found</h1>
      </div>
    </>
  );
}
