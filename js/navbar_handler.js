NavbarJS_set_navbar(document.getElementById("navbar"));

NavbarJS_create_item({
    type: NavbarJS_ITEM_LINK,
    inner: "Home",
    href: "index.html",
    id: "navbar-item-home",
    classlist_item: ["nav-item"],
    classlist_link: ["nav-link","text-white"]
});

NavbarJS_create_item({
    type: NavbarJS_ITEM_LINK,
    inner: "Videos",
    href: "videos.html",
    id: "navbar-item-videos",
    classlist_item: ["nav-item"],
    classlist_link: ["nav-link","text-white"]
});

NavbarJS_create_item({
    type: NavbarJS_ITEM_LINK,
    inner: "Channel",
    href: "https://www.youtube.com/channel/UCZX2Bzb_b58hdsthBWU3PDg",
    id: "navbar-item-channel",
    target: "_blank",
    classlist_item: ["nav-item"],
    classlist_link: ["nav-link","text-white"]
});

NavbarJS_create_item({
    type: NavbarJS_ITEM_LINK,
    inner: "SMP",
    href: "https://discord.gg/DcxBkunxzk",
    id: "navbar-item-smp",
    target: "_blank",
    classlist_item: ["nav-item"],
    classlist_link: ["nav-link","text-white"]
});