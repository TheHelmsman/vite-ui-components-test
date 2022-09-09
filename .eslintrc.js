module.exports = {
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  plugins: ["prettier"],
  root: true,
  env: {
    node: true,
  },
  extends: [
    "kms",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "class-methods-use-this": 0,
    "max-len": [
      "error",
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/ban-ts-ignore": 0,
    "ts-ignore": 0,
  },
  // 'extends': [
  //   '@antfu'
  // ],
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "coverage/",
    "pnpm-lock.yaml",
    "*.js",
    "vue.config.js",
    "assets/i18n/*.json",
  ],
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
