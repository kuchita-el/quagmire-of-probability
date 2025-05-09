import { defineConfig } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

export default defineConfig([{
    extends: compat.extends("next/core-web-vitals", "next/typescript"),
}]);
