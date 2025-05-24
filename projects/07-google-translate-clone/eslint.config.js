import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  module.exports ={
    env: {
      browser: true,
      es2021: true
    },
    extends:[
      'plugin:react/recommended',
      'standard-with-typescript',
    ],
    parserOptions:{
    ecmaVersion: "latest",
    sourceType: "module",
    project:'./tsconfig.json'
    },
    plugins:[
      'react',
      'typescript-eslint'
    ],
    rules:{
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/react-in-jsx-scope': 'off',
    }
},
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
