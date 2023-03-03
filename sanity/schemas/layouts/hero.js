export default {
    title: 'Hero',
    name: 'hero',
    type: 'object',
    fields: [
      {
        title: 'Heading',
        name: 'heading',
        type: 'string'
      },
      {
        title: 'Body',
        name: 'body',
        type: 'simpleBlockContent',
      },
      {
          title: 'Link',
          name: 'link',
          type: 'internalLink'
      },
      {
        title: 'Background Image',
        name: 'backgroundImage',
        type: 'image'
      }
    ]
  }