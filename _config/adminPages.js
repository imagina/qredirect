export default {
  redirects: {
    permission: 'iredirect.redirects.manage',
    activated: true,
    authenticated: true,
    path: '/redirect/redirects/index',
    name: 'qredirect.admin.redirects',
    crud : import('@imagina/qredirect/_crud/redirects'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iredirect.cms.sidebar.adminRedirects',
    icon: 'fa-light fa-shuffle',
    subHeader: {
      refresh: true,
    }
  }
}
