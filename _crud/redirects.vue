<template></template>
<script>
  export default {
    data() {
      return {
        crudId: this.$uid()
      }
    },
    computed: {
      crudData() {
        return {
          crudId: this.crudId,
          entityName: config("main.qredirect.entityNames.redirect"),
          apiRoute: 'apiRoutes.qredirect.redirects',
          permission: 'iredirect.redirects',
          extraFormFields: 'iredirect.crud-fields.redirects',
          create: {
            title: this.$tr('iredirect.cms.newRedirect'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'from', label: this.$tr('iredirect.cms.label.redirectFrom'), field: 'from', align: 'rigth'},
              {name: 'to', label: this.$tr('iredirect.cms.label.redirectTo'), field: 'to', align: 'left'},
              {
                name: 'createdAt', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {
                name: 'updatedAt', label: this.$tr('isite.cms.form.updatedAt'), field: 'updatedAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
            ],
            requestParams: {}
          },
          update: {
            title: this.$tr('iredirect.cms.updateRedirect'),
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            userId: {value: this.$store.state.quserAuth.userId},
            redirectType: {value: '301'},
            from: {
              value: '',
              type: 'input',
              props: {
                label: `${this.$tr('iredirect.cms.label.redirectFrom')}*`,
                rules: [val => !!val || this.$tr('isite.cms.message.fieldRequired')],
              },
            },
            to: {
              value: '',
              type: 'input',
              props: {
                label: `${this.$tr('iredirect.cms.label.redirectTo')}*`,
                rules: [val => !!val || this.$tr('isite.cms.message.fieldRequired')],
              },
            },
          },
          formRight: {},
        }
      },
      //Crud info
      crudInfo() {
        return this.$store.state.qcrudComponent.component[this.crudId] || {}
      }
    },
  }
</script>
