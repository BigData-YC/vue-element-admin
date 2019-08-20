/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/element',
  component: Layout,
  redirect: 'noRedirect',
  name: 'elementUI',
  meta: {
    title: 'ElementUI',
    icon: 'component'
  },
  children: [
    {
      path: 'MessageBox',
      component: () => import('@/views/elementUI/MessageBox'),
      name: 'MessageBox',
      meta: { title: 'MessageBox' }
    },
    {
      path: 'Dialog',
      component: () => import('@/views/elementUI/Dialog'),
      name: 'Dialog',
      meta: { title: 'Dialog' }
    },
    {
      path: 'Popover',
      component: () => import('@/views/elementUI/Popover'),
      name: 'Popover',
      meta: { title: 'Popover' }
    },
    {
      path: 'Slider',
      component: () => import('@/views/elementUI/Slider'),
      name: 'Slider',
      meta: { title: 'Slider' }
    },
    {
      path: 'Upload',
      component: () => import('@/views/elementUI/Upload'),
      name: 'Upload',
      meta: { title: 'Upload' }
    },
    {
      path: 'Form',
      component: () => import('@/views/elementUI/Form'),
      name: 'Form',
      meta: { title: 'Form' }
    },
    {
      path: 'Message',
      component: () => import('@/views/elementUI/Message'),
      name: 'Message',
      meta: { title: 'Message' }
    },
    {
      path: 'Transfer',
      component: () => import('@/views/elementUI/Transfer'),
      name: 'Transfer',
      meta: { title: 'Transfer' }
    },
    {
      path: 'Tree',
      component: () => import('@/views/elementUI/Tree'),
      name: 'Tree',
      meta: { title: 'Tree' }
    },
    {
      path: 'Tag',
      component: () => import('@/views/elementUI/Tag'),
      name: 'Tag',
      meta: { title: 'Tag' }
    },
    {
      path: 'Loading',
      component: () => import('@/views/elementUI/Loading'),
      name: 'Loading',
      meta: { title: 'Loading' }
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
