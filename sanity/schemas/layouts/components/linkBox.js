export default {
    title: 'Link Box',
    name: 'linkBox',
    type: 'object',
    fields: [
        {
            title: 'Background Image',
            name: 'backgroundImage',
            type: 'image'
        },
        {
            title: 'Eyebrow',
            name: 'eyebrow',
            type: 'string'
        },
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'Page',
            name: 'page',
            type: 'reference',
            to: { type: 'page' }
        }
    ]
  }