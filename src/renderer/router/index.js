import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '/traits',
      name: 'traits-page',
      component: require('@/components/Traits')
    },
    {
      path: '/chapter',
      name: 'chapter-page',
      component: require('@/components/Chapters')
    },
    {
      path: '/introduction',
      name: 'introduction-page',
      component: require('@/components/Introduction')
    },

    {
      path: '/chapter/amd',
      name: 'chapter-amd-page',
      component: require('@/components/Chapters/AMD')
    },
    {
      path: '/chapter/cad',
      name: 'chapter-cad-page',
      component: require('@/components/Chapters/CAD')
    },
    {
      path: '/chapter/ra',
      name: 'chapter-ra-page',
      component: require('@/components/Chapters/RA')
    },
    {
      path: '/chapter/category_list/:category',
      name: 'categorylist-page',
      component: require('@/components/Category_list')
    },
    {
      path: '/chapter/table_filter/:focus',
      name: 'tableview-page',
      component: require('@/components/BatFilter')
    },
    {
      path: '/categories',
      name: 'categories-page',
      component: require('@/components/Categories'),
      children: [
        {
          path: ':category',
          name: 'category-page',
          component: require('@/components/Categories'),
          children: [
            {
              path: ':subcategory',
              name: 'subcategory-page',
              component: require('@/components/Categories')
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
