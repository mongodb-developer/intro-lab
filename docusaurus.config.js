// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// Change here to customise config
// Name of the Github Repo, it's also the baseUrl
// Change this if hosting outside mongodb-developer
// Main page config
// Main Page Features
// UTM stuff
// Footer links (probably no need to change them)
///////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW UNLESS YOU KNOW WHAT YOU'RE DOING             //
///////////////////////////////////////////////////////////////////////////////
/** @type {import('@docusaurus/types').Config} */
/** @type {import('@docusaurus/preset-classic').Options} */
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const workshopName = "intro-lab";
const organizationName = "mongodb-developer";
const title = "Intro Lab";
const tagLine = "Set up your MongoDB cluster, import the sample data, and get started with MongoDB Atlas.";
const startButtonTitle = "Come on in!";
const favicon = "/img/favicon.svg";

const featureList = [{
    title: "Hands-On Experiences",
    illustration: "img/coding.png",

    description: `
        Learn by doing, not by reading.
    `
}, {
    title: "Amazing Instructors",
    illustration: "img/highfive.png",

    description: `
        Build it with the help of our amazing instructors, or just do it on your own.
    `
}, {
    title: "Take-Home Material",
    illustration: "img/writing.png",

    description: `
        Take home the material and keep learning.
    `
}];

const utmAdvocateName = "project.phoenix";
const utmWorkshopName = "developer.day";
const utmParams = `utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=${utmWorkshopName}&utm_term=${utmAdvocateName}`;

const footerLinks = [{
    label: "Try MongoDB Atlas",
    href: `https://www.mongodb.com/try?${utmParams}`
}, {
    label: "Forums",
    href: `https://www.mongodb.com/community/forums?${utmParams}`
}, {
    label: "Skill Badges",
    href: `https://learn.mongodb.com/skills?team=devrel&${utmParams}`
},
{
    href: `https://github.com/${organizationName}/${workshopName}`,
    label: "This lab in GitHub"
}, {
    label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
    href: "#"
}];

const {
    themes
} = require("prism-react-renderer");

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config = {
    title: `${title}`,
    tagline: `${tagLine}`,
    url: `https://${workshopName}.github.io`,
    baseUrl: `/${workshopName}/`,
    projectName: `${organizationName}.github.io`,
    organizationName: `${organizationName}`,
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: `${favicon}`,
    deploymentBranch: "gh-pages",
    staticDirectories: ["static"],

    i18n: {
        defaultLocale: "en",
        locales: ["en", "zh"]
    },

    customFields: {
        startButtonTitle: `${startButtonTitle}`,
        featureList: featureList,
        utmParams
    },

    presets: [["classic", ({
        docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl: `https://github.com/${organizationName}/${workshopName}/blob/main`
        },

        theme: {
            customCss: require.resolve("./src/css/custom.css")
        },

        gtag: {
            trackingID: "G-ZJ28V71VTQ",
            anonymizeIP: true
        }
    })]],

    plugins: [require.resolve("docusaurus-lunr-search")],

    themeConfig: ({
        docs: {
            sidebar: {
                autoCollapseCategories: true,
                hideable: true
            }
        },

        announcementBar: undefined,

        navbar: {
            title: `${title}`,

            logo: {
                alt: "MongoDB Logo",
                src: "/img/logo.svg",
                srcDark: "/img/logo-dark.svg",
                className: "navbar-logo",
                width: "135px",
                height: "100%"
            },

            items: [{
                label: "🤖 AI Lab Assistant",
                href: "https://mdb.link/lab-assistant",
                position: "right"
            }, {
                type: "localeDropdown",
                position: "right"
            }]
        },

        footer: {
            style: "dark",
            links: footerLinks
        },

        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ["powershell", "swift", "kotlin"]
        },

        mermaid: {
            theme: {
                light: "neutral",
                dark: "forest"
            }
        }
    }),

    future: {
        v4: {
            removeLegacyPostBuildHeadAttribute: true,
            useCssCascadeLayers: true
        },

        experimental_faster: {
            swcJsLoader: true,
            swcJsMinimizer: true,
            swcHtmlMinimizer: true,
            lightningCssMinimizer: true,
            rspackBundler: true,
            rspackPersistentCache: true,
            ssgWorkerThreads: true,
            mdxCrossCompilerCache: true
        },

        experimental_storage: {
            type: "localStorage",
            namespace: true
        }
    },

    markdown: {
        mermaid: true
    },

    themes: ["@docusaurus/theme-mermaid"]
};

module.exports = config;