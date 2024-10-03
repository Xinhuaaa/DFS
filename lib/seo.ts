export const seo = {
  title: 'DFStudio | 开发者、摄影师、细节控、技术党',
  description:
    '我是DFStudio，一个充满灵感与活力的创作团队。我们致力于打造激发创意的氛围，鼓励团队成员捕捉动人瞬间 ，创作触动人心的影像作品。我们热爱摄影、艺术、创新、生活以及在光影世界中不断探索。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
