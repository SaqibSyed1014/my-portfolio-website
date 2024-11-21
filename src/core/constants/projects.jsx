import Gsap from '../../assets/icons/gsap.svg';
import Vue from '../../assets/icons/vue.svg';
import React from '../../assets/icons/react.svg';
import Webflow from '../../assets/icons/webflow.svg';
import Nuxt from '../../assets/icons/nuxt.svg';
import Tailwind from '../../assets/icons/tailwind.svg';
import Flowbite from '../../assets/icons/flowbite.svg';
import Pinia from '../../assets/icons/pinia.svg';

const techStack = {
    vue: {
        title: 'Vuejs',
        logo: Vue
    },
    react: {
        title: 'Reactjs',
        logo: React
    },
    tailwind: {
        title: 'TailwindCSS',
        logo: Tailwind
    },
    pinia: {
        title: 'Pinia',
        logo: Pinia
    },
    flowbite: {
        title: 'Flowbite',
        logo: Flowbite
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
        title: 'Dojo',
        image: '/images/dojo-cover.png',
        year: 2021,
        category: 'SaaS',
        isFeatured: true,
        techStack: [techStack.react, techStack.tailwind],
        link: 'https://app.managemydojo.com/'
    },
    {
        title: 'Woble',
        image: '/images/dojo-cover.png',
        year: 2022,
        category: 'Social Networking App',
        isFeatured: true,
        techStack: [techStack.vue, techStack.tailwind, techStack.pinia],
        link: 'https://woble.weiswiseapps.com/'
    },
    {
        title: 'Lahebo',
        image: '/images/lahebo-cover.png',
        year: 2023,
        category: 'SaaS',
        isFeatured: true,
        techStack: [techStack.vue, techStack.tailwind, techStack.pinia],
        link: 'http://lahebo.com/'
    },
    {
        title: 'Play Host',
        image: '/images/playhost-cover.png',
        year: 2024,
        category: 'Landing Page',
        isFeatured: false,
        techStack: [techStack.react, techStack.flowbite],
        link:'https://play-host.vercel.app/'
    },
    {
        title: 'Sophiana',
        image: '/images/sophiana-cover.png',
        year: 2023,
        category: 'Landing Page',
        isFeatured: false,
        techStack: [techStack.react, techStack.tailwind],
        link: 'https://sophiana-gilt.vercel.app/'
    }
];

