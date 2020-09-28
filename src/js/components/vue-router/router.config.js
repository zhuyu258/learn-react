
import News from "./page/news"
import Details from "./page/details"
import Music from "./page/music"

export default [
  {
    path: '/music',
    component: Music,
  },
  {
    path: '/news',
    component: News,
    name: "news",
    children: [
      {
        path: '/details',
        component: Details,
        name: "details",
      }
    ]
  },

]
