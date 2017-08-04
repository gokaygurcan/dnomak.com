import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/modules/Index';
import SvgTurkiyeHaritasi from '@/components/modules/SvgTurkiyeHaritasi';
import NotFound from '@/components/modules/NotFound';

import Tags from '@/components/modules/tags/Tags';
import Human from '@/components/modules/humans/Human';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/svg-turkiye-haritasi',
      name: 'SvgTurkiyeHaritasi',
      component: SvgTurkiyeHaritasi,
    },
    {
      path: '/youtube',
      name: 'Tags',
      component: Tags,
    },
    {
      path: '/:username',
      name: 'human',
      component: Human,
    },
    { path: '*', component: NotFound },
  ],
});
