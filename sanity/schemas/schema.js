// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import siteSettings from './siteSettings'
import externalLink from './externalLink'
import internalLink from './internalLink'
import media from './media'
import simpleBlockContent from './simpleBlockContent'
import homePage from './homePage'
import page from './page'
import vehicle from './vehicle'
import footer from './layouts/footer'
import header from './layouts/header'
import hero from './layouts/hero'
import pageHeader from './layouts/pageHeader'
import linkBox from "./layouts/components/linkBox"
import contentCard from './layouts/components/contentCard'
import globalLinkBoxes from './globalLinkBoxes'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([externalLink, internalLink, media, siteSettings, simpleBlockContent, vehicle, homePage, page, footer, header, hero, pageHeader, contentCard, globalLinkBoxes, linkBox]),
})