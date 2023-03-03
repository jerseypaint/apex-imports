export default {
    title: 'Link Boxes',
    name: 'linkBoxes',
    type: 'object',
    fields: [
      {
        title: 'Link Box',
        name: 'linkBox',
        type: 'array',
        of:[{ type: 'linkBox' }]
      }
    ]
  }