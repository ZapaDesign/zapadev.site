---
title: Шпаргалка по MongoBD
---

# Se asombroso

Vice letterpress brooklyn jianbing, blue bottle sriracha sustainable. Literally chillwave squid, lomo vexillologist godard affogato whatever shabby chic vaporware kitsch polaroid. Farm-to-table lumbersexual 8-bit deep v, gochujang pok pok hella. Hashtag tumeric normcore synth freegan, poutine sustainable selfies post-ironic pork belly.

![](https://media.giphy.com/media/KzM1lAfJjCWNq/source.gif)

```javascript
export default {
  name: 'portfolio',
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}/portfolio`).fetch()
    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  }
}
```