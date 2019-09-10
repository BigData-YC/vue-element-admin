/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/form',
  component: Layout,
  redirect: 'noRedirect',
  name: 'elementUI',
  meta: {
    title: 'Form',
    icon: 'component'
  },
  children: [
    {
      path: 'general',
      component: () => import('@/views/form/general'),
      name: 'general',
      meta: { title: '一般表单' }
    },
    {
      path: 'inline',
      component: () => import('@/views/form/inline'),
      name: 'inline',
      meta: { title: '行内表单' }
    },
    {
      path: 'position',
      component: () => import('@/views/form/position'),
      name: 'position',
      meta: { title: '对齐表单' }
    },
    {
      path: 'verification',
      component: () => import('@/views/form/verification'),
      name: 'verification',
      meta: { title: '校验表单' }
    },
    {
      path: 'deVerification',
      component: () => import('@/views/form/deVerification'),
      name: 'deVerification',
      meta: { title: '自定义校验' }
    },
    {
      path: 'dynamic',
      component: () => import('@/views/form/dynamic'),
      name: 'dynamic',
      meta: { title: '动态添加' }
    },
    {
      path: 'number',
      component: () => import('@/views/form/number'),
      name: 'number',
      meta: { title: '数字校验' }
    },
    {
      path: 'size',
      component: () => import('@/views/form/size'),
      name: 'size',
      meta: { title: '大小控制' }
    },
    {
      path: 'mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: { title: 'Component Mixin' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: 'Back To Top' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: 'DragDialogDemo',
      meta: { title: 'Drag Dialog' }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/drag-select'),
      name: 'DragSelectDemo',
      meta: { title: 'Drag Select' }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/components-demo/dnd-list'),
      name: 'DndListDemo',
      meta: { title: 'Dnd List' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/components-demo/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: { title: 'Drag Kanban' }
    }
  ]
}

export default componentsRouter
