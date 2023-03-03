import { LinkIcon } from '@sanity/icons'

export default {
  title: 'Internal link to another page',
  name: 'internalLink',
  type: 'object',
  icon: LinkIcon,
  fields: [
    {
      title: 'Page',
      name: 'pageLink',
      type: 'reference',
      to: [{ type: 'page' }]
    }
  ]
}
