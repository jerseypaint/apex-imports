export default {
    title: 'Content Card',
    name: 'contentCard',
    type: 'object',
    fields: [
    {
        title: 'Type',
        name: 'type',
        type: 'string',
        options: {
            list: [
            {title: 'Text', value: 'text'},
            {title: 'Text & List', value: 'textList'},
            {title: 'Media & Text', value: 'mediaText'},
            ]
        }
        },
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
        title: 'List',
        name: 'list',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Media',
        name: 'media',
        type: 'media'
      }
    ]
  }