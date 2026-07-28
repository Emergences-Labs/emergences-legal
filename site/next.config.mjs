/** @type {import('next').NextConfig} */
// The package ships ESM + type declarations but no bundled build, so Next
// transpiles it like first-party source. That is also what keeps the document
// text tree-shakeable rather than shipped whole into a client chunk.
export default { transpilePackages: ["@emergences/legal"] };
