import {LinkIcon} from '@sanity/icons'

export default {
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  icon: LinkIcon,
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Open in new window',
      name: 'openInNewWindow',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'href',
    },
  },
}
