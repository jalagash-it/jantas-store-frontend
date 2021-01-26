import { INav } from '~/interfaces/menus/nav'

const dataHeaderNavigation: INav = [
    {
        title: 'Главная',
        url: '/',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Главная', url: '/' },
                { title: 'Home 2', url: '/home-two' },
                { title: 'Offcanvas Cart', url: '/offcanvas-cart' }
            ]
        }
    },
    {
        title: 'Электронной коммерции',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Компьютеры и ноутбуки',
                                url: '',
                                children: [
                                    { title: 'Engravers', url: '' },
                                    { title: 'Wrenches', url: '' },
                                    { title: 'Wall Chaser', url: '' },
                                    { title: 'Pneumatic Tools', url: '' }
                                ]
                            },
                            {
                                /* title: 'Machine Tools',*/
                                title: 'Сетевое оборудование',
                                url: '',
                                children: [
                                    { title: 'Thread Cutting', url: '' },
                                    { title: 'Chip Blowers', url: '' },
                                    { title: 'Sharpening Machines', url: '' },
                                    { title: 'Pipe Cutters', url: '' },
                                    { title: 'Slotting machines', url: '' },
                                    { title: 'Lathes', url: '' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Hand Tools Клавиатуры и мышки',
                                url: '',
                                children: [
                                    { title: 'Screwdrivers', url: '' },
                                    { title: 'Handsaws', url: '' },
                                    { title: 'Knives', url: '' },
                                    { title: 'Axes', url: '' },
                                    { title: 'Multitools', url: '' },
                                    { title: 'Paint Tools', url: '' }
                                ]
                            },
                            {
                                title: 'Garden Equipment Комплектующие',
                                url: '',
                                children: [
                                    { title: 'Motor Pumps', url: '' },
                                    { title: 'Chainsaws', url: '' },
                                    { title: 'Electric Saws', url: '' },
                                    { title: 'Brush Cutters', url: '' }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        title: 'Магазин',
        url: '/shop/category-grid-3-columns-sidebar',
        submenu: {
            type: 'menu',
            menu: [
                {
                    title: 'Shop Grid',
                    url: '/shop/category-grid-3-columns-sidebar',
                    children: [
                        { title: '3 Columns Sidebar', url: '/shop/category-grid-3-columns-sidebar' },
                        { title: '4 Columns Full', url: '/shop/category-grid-4-columns-full' },
                        { title: '5 Columns Full', url: '/shop/category-grid-5-columns-full' }
                    ]
                },
                { title: 'Список Магазинов', url: '/shop/category-list' },
                { title: 'Shop Right Sidebar', url: '/shop/category-right-sidebar' },
                {
                    title: 'Product',
                    url: '/shop/product-standard',
                    children: [
                        { title: 'Product', url: '/shop/product-standard' },
                        { title: 'Product Alt', url: '/shop/product-columnar' },
                        { title: 'Product Sidebar', url: '/shop/product-sidebar' }
                    ]
                },
                { title: 'Корзина', url: '/shop/cart' },
                { title: 'Проверка', url: '/shop/checkout' },
                { title: 'Успех Того', url: '/shop/checkout/success' },
                { title: 'Список желаний', url: '/shop/wishlist' },
                { title: 'Сравнивать', url: '/shop/compare' },
                // { title: 'Track Order', url: '/shop/track-order' }
            ]
        }
    },
    {
        title: 'Аккаунт',
        url: '/account',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Авторизоваться', url: '/account/login' },
                { title: 'Приборная панель', url: '/account/dashboard' },
                { title: 'Редактировать Профиль', url: '/account/profile' },
                { title: 'История заказов', url: '/account/orders' },
                { title: 'Детали заказа', url: '/account/orders/5' },
                { title: 'Адресная книга', url: '/account/addresses' },
                { title: 'Изменить Адрес', url: '/account/addresses/5' },
                { title: 'Изменить пароль', url: '/account/password' }
            ]
        }
    },
    {
        title: 'Блог',
        url: '/blog/category-classic',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Классический блог', url: '/blog/category-classic' },
                { title: 'Сетка блога', url: '/blog/category-grid' },
                { title: 'Список блогов', url: '/blog/category-list' },
                { title: 'Блог Левая боковая панель', url: '/blog/category-left-sidebar' },
                { title: 'Страница Сообщения', url: '/blog/post-classic' },
                { title: 'Сообщение Без Боковой Панели', url: '/blog/post-full' }
            ]
        }
    },
    {
        title: 'Страницы',
        url: '/site/about-us',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'О нас', url: '/site/about-us' },
                { title: 'Связаться с нами', url: '/site/contact-us' },
                { title: 'Свяжитесь с Нами Alt', url: '/site/contact-us-alt' },
                { title: '404', url: '/site/not-found' },
                { title: 'Условия и положения', url: '/site/terms' },
                { title: 'FAQ', url: '/site/faq' },
                { title: 'Компоненты', url: '/site/components' },
                { title: 'Типография', url: '/site/typography' }
            ]
        }
    },
    {
        title: 'Buy Theme',
        url: 'https://themeforest.net/item/stroyka-tools-store-vuejs-ecommerce-template/27967713'
    }
]

export default dataHeaderNavigation
