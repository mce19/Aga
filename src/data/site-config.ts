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
    title: 'Idicr',
    subtitle: 'Construyendo Presencia y Confianza en la Web',
    description: 'Idicr, Especialista en desarrollo de aplicaciones web',
    image: {
        src: '/Aga/Idicr-paginas-web-costa-rica.webp',
        alt: 'Idicr - Desarrollo de aplicaciones web'
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
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Construyendo tu identidad digital',
        text: "**Idicr**, te ayuda a construir una identidad digital sólida y profesional. Mi meta es mejorar tu presencia en Google, construyendo una aplicacion web que destaque a tu empresa como un referente en tu comunidad. Descubre cómo puedo ayudarte a construir una identidad digital sólida que genere confianza en tus clientes y haga crecer tu empresa. Explora mis proyectos para ver cómo podemos lograrlo juntos."
        ,
        image: {
            src: '/Aga/Idicr-paginas-web-costa-rica.webp',
            alt: 'Maykol Castro O. Fundador y Seo de Idicr'
        },
        actions: [
            {
                text: 'Contactame',
                href: '/Aga/contact'
            }
        ]
    },
    subscribe: {
        title: 'Fortalece Tu Identidad Digital con IDICR',
        text: 'No dejes pasar la oportunidad de elevar tu marca. Dale a tu empresa una identidad digital sòlida con Idicr.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
