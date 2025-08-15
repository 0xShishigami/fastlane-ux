module.exports = {
  allowLocalFiles: true,
  engine: ({ marp }) => marp.use(require('@kazumatu981/markdown-it-kroki'), {
      entrypoint: "https://kroki.io",
  }),
  themeSet: [
    './themes/rose-pine-dawn.css',
    './themes/rose-pine-moon.css',
    './themes/rose-pine.css',
  ]
}