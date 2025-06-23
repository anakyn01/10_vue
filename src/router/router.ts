/*npm install vue-router */
import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/coms/Home.vue';
import Nav1 from '@/components/nav/Nav1.vue';
import Nav2 from '@/components/nav/Nav2.vue';
import Nav3 from '@/components/nav/Nav3.vue';
import Nav4 from '@/components/nav/Nav4.vue';
import Nav5 from '@/components/nav/Nav5.vue';
import Button from '@/components/coms/Button.vue';
import Expan from '@/components/coms/Expan.vue';
import HelloWorld from '@/components/coms/HelloWorld.vue';
import Tooltip from '@/components/coms/Tooltip.vue';
import Bread from '@/components/coms/Bread.vue';
import Bottom1 from '@/components/nav/Bottom1.vue';
import Fbutton from '@/components/coms/Fbutton.vue';
import Footers from '@/components/coms/Footers.vue';
import Tabs from '@/components/coms/Tabs.vue';
import Page from '@/components/coms/Page.vue';
import Dir from '@/components/ref/Dir.vue';
import Events from '@/components/ref/Events.vue';
import Met from '@/components/ref/Met.vue';
import Comp from '@/components/ref/Comp.vue';
import Vmodel from '@/components/ref/Vmodel.vue';
import What from '@/components/ref/What.vue';
import Auto from '@/components/coms/Auto.vue';
import Btoggle from '@/components/coms/Btoggle.vue';
import Check from '@/components/coms/Check.vue';
import Chip from '@/components/coms/Chip.vue';
import Combo from '@/components/coms/Combo.vue';
import Cslide from '@/components/coms/Cslide.vue';
import Custom from '@/components/coms/Custom.vue';
import File from '@/components/coms/File.vue';
import Form from '@/components/coms/Form.vue';
import Igroup from '@/components/coms/Igroup.vue';
import Nums from '@/components/coms/Nums.vue';
import Otp from '@/components/coms/Otp.vue';
import Radio from '@/components/coms/Radio.vue';
import Range from '@/components/coms/Range.vue';
import Slideg from '@/components/coms/Slideg.vue';
import Step from '@/components/coms/Step.vue';
import Sw from '@/components/coms/Sw.vue';
import Texta from '@/components/coms/Texta.vue';
import Textf from '@/components/coms/Textf.vue';
import Windows from '@/components/coms/Windows.vue';
import Alerts from '@/components/coms/Alerts.vue';
import Badges from '@/components/coms/Badges.vue';
import Banner from '@/components/coms/Banner.vue';
import Empty from '@/components/coms/Empty.vue';
import Hover from '@/components/coms/Hover.vue';
import Pcircular from '@/components/coms/Pcircular.vue';
import Plinear from '@/components/coms/Plinear.vue';
import Rating from '@/components/coms/Rating.vue';
import Skloaders from '@/components/coms/Skloaders.vue';
import Sbars from '@/components/coms/Sbars.vue';
import Queue from '@/components/coms/Queue.vue';
import Time from '@/components/coms/Time.vue';
import Ratio from '@/components/coms/Ratio.vue';
import Ava from '@/components/coms/Ava.vue';
import Icons from '@/components/coms/Icons.vue';
import Imgs from '@/components/coms/Imgs.vue';
import Parallax from '@/components/coms/Parallax.vue';

const routes = [
   { path: '/', redirect: '/home' }, // 기본 리디렉션
  { path: '/home', component: Home },
  { path: '/nav1', component: Nav1 },
  { path: '/nav2', component: Nav2 },
  { path: '/nav3', component: Nav3 },
  { path: '/nav4', component: Nav4 },
  { path: '/nav5', component: Nav5 },
  { path: '/button', component: Button },
  { path: '/expan', component: Expan },
  { path: '/hello', component: HelloWorld },
  { path: '/tooltip', component: Tooltip },
  { path: '/bread', component: Bread},
  { path: '/bottom1', component: Bottom1},
  { path: '/fbutton', component: Fbutton},
  { path: '/footers', component: Footers},
  { path: '/tabs', component: Tabs},
  { path: '/page', component: Page},
  { path: '/dir', component: Dir},
  { path: '/events', component: Events},
  { path: '/fs', component: Met},
  { path: '/computed', component: Comp},
  { path: '/vmodel', component: Vmodel},
  { path: '/watchers', component: What},
  { path: '/auto', component: Auto },
  { path: '/btoggle', component: Btoggle },
  { path: '/check', component: Check },
  { path: '/chip', component: Chip },
  { path: '/combo', component: Combo },
  { path: '/cslide', component: Cslide },
  { path: '/custom', component: Custom },
  { path: '/file', component: File },
  { path: '/form', component: Form },
  { path: '/igroup', component: Igroup },
  { path: '/nums', component: Nums },
  { path: '/otp', component: Otp },
  { path: '/radio', component: Radio },
  { path: '/range', component: Range },
  { path: '/slideg', component: Slideg },
  { path: '/step', component: Step },
  { path: '/sw', component: Sw },
  { path: '/texta', component: Texta },
  { path: '/textf', component: Textf },
  { path: '/windows', component: Windows },
  { path: '/alerts', component: Alerts },
  { path: '/badges', component: Badges },
  { path: '/banner', component: Banner },
   { path: '/empty', component: Empty },
  { path: '/hover', component: Hover },
  { path: '/pcircular', component: Pcircular },
  { path: '/plinear', component: Plinear },
  { path: '/rating', component: Rating },
  { path: '/skloaders', component: Skloaders },
  { path: '/sbars', component: Sbars },
  { path: '/queue', component: Queue },
  { path: '/time', component: Time },
  { path: '/ratio', component: Ratio },
  { path: '/ava', component: Ava },
  { path: '/icons', component: Icons },
  { path: '/imgs', component: Imgs },
  { path: '/parallax', component: Parallax },
  { path: '/ratings', component: Rating },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;