import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  // tseslint.configs.recommended,
  {
    ignores: ["dist/"]
  },
  {files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,txs}"]},
  {files: ["**/*.{js}"], languageOptions:{sourceType: "commonjs"}},
  {languageOptions: {globals:globals.node}},
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
]);
