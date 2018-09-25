export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Category',
    url: '/category',
    icon: 'icon-list',
    children: [
      {
        name: 'Examinees',
        url: '/category/examinees',
        icon: 'icon-list'
      },
      {
        name: 'Teachers',
        url: '/category/teachers',
        icon: 'icon-list'
      },
      {
        name: 'Subjects',
        url: '/category/subjects',
        icon: 'icon-list'
      },
      {
        name: 'Parts',
        url: '/category/parts',
        icon: 'icon-list'
      },
    ]
  },
  {
    name: 'Bank',
    url: '/bank',
    icon: 'cui-bookmark',
    children: [
      {
        name: 'Questions',
        url: '/bank/questions',
        icon: 'cui-bookmark'
      },
      {
        name: 'Type_Questions',
        url: '/bank/type_questions',
        icon: 'cui-bookmark'
      }
    ]
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
];
