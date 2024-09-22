import Gsap from '../../assets/icons/gsap.svg';
import Vue from '../../assets/icons/vue.svg';
import React from '../../assets/icons/react.svg';
import Webflow from '../../assets/icons/webflow.svg';
import Nuxt from '../../assets/icons/nuxt.svg';

const techStack = {
    vue: {
        title: 'Vuejs',
        logo: Vue
    },
    react: {
        title: 'Reactjs',
        logo: React
    },
    webflow: {
        title: 'Webflow',
        logo: Webflow
    },
    gsap: {
        title: 'GSAP',
        logo: Gsap
    },
    nuxt: {
        title: 'Nuxtjs',
        logo: Nuxt
    }
};

export const projectsList = [
    {
        title: 'ARK/8',
        image: 'https://cdn.dribbble.com/userupload/5052099/file/original-ef38f9c0d4592bfdf3dc0af1c2397e4c.png?resize=400x300&vertical=center',
        year: 2022,
        category: 'Ecommerce',
        isFeatured: true,
        techStack: [techStack.vue, techStack.gsap, techStack.nuxt, techStack.webflow, techStack.react]
    },
    {
        title: 'ARK',
        image: 'https://cdn.dribbble.com/userupload/3350329/file/original-0fa1629e3d9558eb3861f06620df8f04.png?resize=400x300&vertical=center',
        year: 2021,
        category: 'Web Application',
        isFeatured: true,
        techStack: []
    },
    {
        title: 'AR',
        image: 'https://www.juulvrasdonk.nl/_next/image?url=%2Fimages%2Fark-8.webp&w=2048&q=75',
        year: 2024,
        category: 'Landing Page',
        isFeatured: false,
        techStack: []
    },
    {
        title: 'AR',
        image: 'https://www.juulvrasdonk.nl/_next/image?url=%2Fimages%2Fnoape.webp&w=3840&q=75',
        year: 2023,
        category: 'Ecommerce',
        isFeatured: true,
        techStack: []
    }
];

