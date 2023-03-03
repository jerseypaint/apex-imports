export default {
    title: 'Footer',
    name: 'footer',
    type: 'object',
    fields: [
      {
        title: 'Logo',
        name: 'logo',
        type: 'image'
      },
      {
          title: 'Menu',
          name: 'menu',
          type: 'array',
          of: [{ type: 'internalLink' }]
      },
      {
          title: 'Copyright',
          name: 'copyright',
          type: 'simpleBlockContent',
      }
    ]
  }