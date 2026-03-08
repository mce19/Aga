export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Webstudio',
    subtitle: 'Construyendo Presencia y Confianza en la Web',
    description: 'Webstudio, Especialista en desarrollo de aplicaciones web',
    image: {
        src: '/Aga/Idicr-paginas-web-costa-rica.webp',
        alt: 'Webstudio - Desarrollo de aplicaciones web'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/Aga'
        },
        {
            text: 'Proyectos',
            href: '/Aga/projects'
        },
        {
            text: 'Blog',
            href: '/Aga/blog'
        },
        // {
        //     text: 'Precios',
        //     href: '/Aga/price'
        // },
        {
            text: 'Sobre mi',
            href: '/Aga/about'
        },
    ],
    footerNavLinks: [
        {
            text: 'Sobre mi',
            href: '/Aga/about'
        },
        {
            text: 'Contacto',
            href: '/Aga/contact'
        },
        {
            text: 'Condiciones de servicio',
            href: '/Aga/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/webcrstudio'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/webcrstudio'
        },
        {
            text: 'TikTok',
            href: 'https://www.tiktok.com/@webcrstudio'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/company/webcrstudio'
        }
    ],
    hero: {
        title: 'Construyendo tu identidad digital',
        text: "**¿Tu negocio no aparece en Google?** Creo páginas web rápidas, profesionales y optimizadas para posicionarte en Costa Rica — para que tus clientes te encuentren antes que a tu competencia."
        ,
        image: {
            src: '/Aga/Idicr-paginas-web-costa-rica.webp',
            alt: 'Maykol Castro O. Fundador y CEO de Webstudio'
        },
        actions: [
            {
                text: 'Contactame',
                href: '/Aga/contact'
            }
        ]
    },
    subscribe: {
        title: 'Fortalece Tu Identidad Digital con Webstudio',
        text: 'No dejes pasar la oportunidad de elevar tu marca. Dale a tu empresa una identidad digital sólida con Webstudio.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
