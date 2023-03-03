export default {
    title: 'Page Header',
    name: 'pageHeader',
    type: 'object',
    fields: [
      {
        title: 'Title Override',
        name: 'titleOverride',
        type: 'string'
      },
      {
        title: 'Background Image',
        name: 'backgroundImage',
        type: 'image',
        fields: [
            {
                title: 'alt',
                name: 'alt',
                type: 'string',
                validation: Rule => Rule.required().error('Alt tags are required for SEO'),
            }
        ]
      },
    ]
  }