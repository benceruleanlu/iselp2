import { DocsThemeConfig } from 'nextra-theme-docs'

export const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 500, fontSize: '1.35em' }}>ISELP Programming</span>,
  docsRepositoryBase: 'https://github.com/benceruleanlu/iselp2',
  footer: {
    component: null,
  },
  editLink: {
    component: null,
  },
  feedback: {
    labels: 'documentation',
  },
  search: {
    placeholder: 'Search articles...',
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - ISELP Programming",
    };
  }
}
