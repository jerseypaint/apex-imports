import internalLink from './internalLink'
import link from './link'

export default {
  title: 'Rich Block Content',
  name: 'richlockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        annotations: [link, internalLink],
      },
    },
  ],
}
