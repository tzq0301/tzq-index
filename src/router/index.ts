import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AwardsView from '../views/AwardsView.vue'
import HowToOptimizeYourCode from "../blogs/2022/HowToOptimizeYourCode.vue"
import DockerRemoveNoneImages from "../blogs/2022/DockerRemoveNoneImages.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogView,
        },
        {
            path: '/blog/how-to-optimize-your-code',
            component: HowToOptimizeYourCode
        },
        {
            path: '/blog/docker-remove-none-images',
            component: DockerRemoveNoneImages
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/awards',
            name: 'awards',
            component: AwardsView
        },
    ]
})

export default router
