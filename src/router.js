const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
},{
    path: '/view1',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/view1.vue'], resolve),
},{
    path: '/view2',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/view2.vue'], resolve),
}];
export default routers;