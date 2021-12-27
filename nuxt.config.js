
export default {
	/*
	** Nuxt rendering mode
	** See https://nuxtjs.org/api/configuration-mode
	*/
	mode: 'universal',
	/*
	** Nuxt target
	** See https://nuxtjs.org/api/configuration-target
	*/
	target: 'server',
	/*
	** Headers of the page
	** See https://nuxtjs.org/api/configuration-head
	*/
	server: {
		port: 3000, // default: 3000
		host: '0.0.0.0', // default: localhost,
		timing: false
	},

	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Global CSS
	*/
	css: [
	],
	/*
	** Plugins to load before mounting the App
	** https://nuxtjs.org/guide/plugins
	*/
	plugins: [
	],
	/*
	** Auto import components
	** See https://nuxtjs.org/api/configuration-components
	*/
	components: true,
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [

	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://github.com/nuxt/content
		'@nuxt/content',
        '@nuxtjs/color-mode',
		'@nuxtjs/style-resources',
		[
			'nuxt-i18n',
			{
				locales: [
					{
						code: 'ru',
						iso: 'ru-RU',
						name: 'Russian',
					},
					{
						code: 'en',
						iso: 'en-US',
						name: 'English',
					},
					{
						code: 'uk',
						iso: 'uk-UA',
						name: 'Ukrainian',
					},
				],
				defaultLocale: 'ru',
				strategy: 'prefix',
				vueI18n: {
					fallbackLocale: 'ru',
					messages: {
						ru: require('./locales/ru-ru.json'),
						en: require('./locales/en-us.json'),
						uk: require('./locales/uk-ua.json'),
					}
				}
			}
		]
	],

	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {},
	/*
	** Content module configuration
	** See https://content.nuxtjs.org/configuration
	*/
	content: {
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-dracula.css'
			}
		},
		fullTextSearchFields: ['title', 'description']
	},
	/*
	** Build configuration
	** See https://nuxtjs.org/api/configuration-build/
	*/
	build: {
	},

	styleResources: {
		scss: [
			'assets/css/global.scss'
		]
	},

	transition: {
		name: 'AnimationState',
		mode: 'out-in'
	},

    loading: {
        color: '#01c086',
        height: '3px'
    },

    colorMode: {
        preference: 'dark',
    }
}
