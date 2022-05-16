import Dashboard from '@/views/Dashboard';

const routes = [
    {
        path:'/',
        name:'Dashboard',
        component: Dashboard,
        title: 'Dashboard',
        icon: "mdi-view-dashboard",
        meta: { requireAuth: true, isAdmin: true },
        filhos: [] 
    }
]

export default routes;