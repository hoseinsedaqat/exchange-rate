module.exports = {
    pwa: {
        name: 'Exchange-Rate-App',
        themeColor: "#333",
        iconPaths: {
            favicon32: './public/img/icons/favicon-32x32-dunplab-manifest-38104.png',
            favicon16: './public/img/icons/favicon-16x16-dunplab-manifest-38104.png',
            appleTouchIcon: './public/img/icons/apple-icon-152x152-dunplab-manifest-38104.png',
            msTileImage: './public/img/icons/apple-icon-144x144-dunplab-manifest-38104.png'
        },
        manifestOptions: {
            background_color: "#333",
            icons: [
                {
                    src: "./public/img/icons/android-icon-192x192-dunplab-manifest-38104.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "./public/img/icons/apple-icon-152x152-dunplab-manifest-38104.png",
                    sizes: "512x512",
                    type: "image/png"
                },
                {
                    src: "./public/img/icons/android-icon-192x192-dunplab-manifest-38104.png",
                    sizes: "192x192",
                    type: "image/png",
                    purpose: "maskable"
                },
                {
                    src: "./public/img/icons/apple-icon-152x152-dunplab-manifest-38104.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "maskable"
                }
            ],
        }
    }
}
