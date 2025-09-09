import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  // { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  // tseslint.configs.recommended,
  /* globalIgnores(["dist/", "eslint.config.mts"]),*/ //eslint.config.mjs.mts
  {
    ignores: ["dist/", "eslint.config.mjs"],
  },
  { files: ["src.**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"] },
  { files: ["**/*.{js}"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier,
  eslintConfigPrettier,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "prettier/prettier": ['error', {singleQuote:true}]
    },
  },
]);
