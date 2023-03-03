export default {
  title: 'Media',
  name: 'media',
  type: 'document',
  fields: [
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'}
        ]
      }
    },
    {
      title: 'Image',
      name: 'image',
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
    {
      title: 'Youtube Embed URL',
      name: 'ytEmbedUrl',
      type: 'url'
    },
  ]
}
