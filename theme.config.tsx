import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 500, fontSize: '1.35em' }}>ISELP Programming</span>,
  project: {
    link: 'https://github.com/benceruleanlu/iselp2',
  },
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
  }
}

export default config
