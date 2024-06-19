
type TSubmenu = {
    title: string;
    link: string
}

type TMegaManu = {
    title: string;
    link: string
    submenus: TSubmenu[]
}

interface TMenuItem {
    menuItem?: any;
    active?: string;
    id: number;
    hasDropdown?: boolean;
    title: string;
    link: string;
    submenus?: any[];
    pages?: boolean;
    megaMenu?: boolean;
    mega_menus?: TMegaManu[];
}
const menu_data: TMenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "#",
        hasDropdown: true,
        submenus: [
            { title: "Home Style 01", link: "/" },
            { title: "Home Style 02", link: "/home-2" },
            { title: "Home Style 03", link: "/home-3" },
        ],
    },

    {
        id: 4,
        title: "Services",
        link: "#",
        megaMenu: true,
        hasDropdown: false,
        // pages: true,
        menuItem: true,
        mega_menus: [
            {
                title: "Page Layout 1", link: "#",
                submenus: [
                    { title: "Home Style 01", link: "/" },
                    { title: "Home Style 02", link: "/home-2" },
                    { title: "Home Style 03", link: "/home-3" },
                    { title: "Ideas Advice", link: "/ideas-advice" },
                    { title: "Ideas Advice Details", link: "/ideas-advice-details" },
                    { title: "Team", link: "/team" },
                    { title: "Team Details", link: "/team-details" },

                ],
            },
            {
                title: "Page Layout 2", link: "#",
                submenus: [
                    { title: "About", link: "/about" },
                    { title: "Genres", link: "/genres" },
                    { title: "Genres Details", link: "/genres-details" },
                    { title: "Enquiry List", link: "/enquiry-list" },
                    { title: "Faq", link: "/faq" },
                    { title: "Join Us", link: "/join" },
                    { title: "404 Page", link: "/404-page" },
                ],
            },
            {
                title: "Page Layout 3", link: "#",
                submenus: [
                    { title: "Event", link: "/event" },
                    { title: "Event Details", link: "/event-details" },
                    { title: "How It Works", link: "/work-system" },
                    { title: "Terms & Condition", link: "/terms-condition" },
                    { title: "Privacy & Policy", link: "/privacy-policy" },
                    { title: "Refund Policy", link: "/refund-policy" },
                    { title: "Product Shipping", link: "/product-shipping" },
                ],
            },
            {
                title: "Page Layout 4", link: "#",
                submenus: [
                    { title: "Shop", link: "/shop" },
                    { title: "Shop Details", link: "/shop-details" },
                    { title: "Cart", link: "/cart" },
                    { title: "Wishlist", link: "/wishlist" },
                    { title: "Login", link: "/login" },
                    { title: "Register", link: "/signup" },
                    { title: "Contact", link: "/contact" },
                ],
            },
        ],
    },
    {
        id: 5,
        hasDropdown: true,
        title: "Blog",
        link: "/blogs",
    },

    {
        id: 3,
        hasDropdown: false,
        title: "How It Works",
        link: "/work-system",
    },
    {
        id: 2,
        hasDropdown: false,
        title: "About us",
        link: "/about",
    },
    // {
    //     id: 6,
    //     hasDropdown: false,
    //     title: "Help Center",
    //     link: "/contact",
    // },
]

export default menu_data;