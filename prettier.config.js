module.exports = {
  singleQuote: false,
  plugins: ["@prettier/plugin-php"],
  overrides: [
    {
      files: ["*.php"],
      options: {
        parser: "php",
      },
    },
  ],
};
