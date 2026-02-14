import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Correia Pro Tennis',
        short_name: 'Correia Tennis',
        description: 'Aulas de tênis, baby tennis e treinamento de equipes em São Paulo.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/images/logo.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
