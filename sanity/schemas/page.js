import {EyeOpenIcon, DocumentIcon} from '@sanity/icons'
import {ArticlePreview} from '../components/views/ArticlePreview'
import {JsonView} from '../components/views/JsonView'
import S from '@sanity/desk-tool/structure-builder'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      title: 'Header',
      name: 'header',
      type: 'array',
      of: [
        {type: 'hero', type: 'pageHeader'}
      ]
    },
    {
      title: 'Template',
      name: 'template',
      type: 'string',
      options: {
        list: [
          {title: 'Inventory Index', value: 'inventoryIndex'},
          {title: 'Services', value: 'services'},
          {title: 'Contact', value: 'contact'}
        ]
      }
    },
    {
      title: 'Content Cards',
      name: 'contentCards',
      type: 'array',
      of: [
        {type: 'contentCard'}
      ],
      hidden: ({document}) => !(document?.template === 'services')
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
