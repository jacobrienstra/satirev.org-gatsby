// tsconfig.json
module.exports = {
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
    jsx: "preserve",
    lib: ["dom", "esnext"],
    strict: true,
    noEmit: true,
    isolatedModules: true,
    esModuleInterop: true,
    noUnusedLocals: false,
  },
  exclude: ["node_modules", "public", ".cache"],
};