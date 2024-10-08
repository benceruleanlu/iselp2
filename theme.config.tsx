import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 500, fontSize: "1.15em" }}>
      ISELP Programming
    </span>
  ),
  project: {
    link: "https://github.com/benceruleanlu/iselp2",
  },
  docsRepositoryBase: "https://github.com/benceruleanlu/iselp2",
  footer: {
    component: null,
  },
  editLink: {
    component: null,
  },
  feedback: {
    labels: "documentation",
  },
  search: {
    placeholder: "Search articles...",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - ISELP Programming",
    };
  },
  sidebar: {
    toggleButton: true,
  },
};

export default config;
