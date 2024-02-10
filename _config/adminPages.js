export default {
  redirects: {
    permission: 'iredirect.redirects.manage',
    activated: true,
    authenticated: true,
    path: '/redirect/redirects/index',
    name: 'qredirect.admin.redirects',
    crud : import('modules/qredirect/_crud/redirects'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iredirect.cms.sidebar.adminRedirects',
    icon: 'fa-light fa-shuffle',
    subHeader: {
      refresh: true,
    }
  }
}
