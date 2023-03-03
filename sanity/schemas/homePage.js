import {EyeOpenIcon, DocumentIcon} from '@sanity/icons'
import {ArticlePreview} from '../components/views/ArticlePreview'
import {JsonView} from '../components/views/JsonView'
import S from '@sanity/desk-tool/structure-builder'

export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  views: [
    S.view.component(ArticlePreview).title('Preview').icon(EyeOpenIcon),
    S.view.component(JsonView).title('JSON').icon(DocumentIcon),
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Hero',
      name: 'homeHero',
      type: 'hero',
    },
    {
      title: 'Featured Vehicles',
      name: 'featuredVehicles',
      type: 'object',
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string'
        },
        {
          title: 'Link',
          name: 'link',
          type: 'internalLink'
        },
        {
          title: 'Vehicles',
          name: 'vehicles',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{ type: 'vehicle' }]
          }]
        }
      ]
    },
    {
      title: 'Footer Link Boxes',
      name: 'footerLinkBoxes',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'globalLinkBoxes' }]
      }]
    }
  ]
}
