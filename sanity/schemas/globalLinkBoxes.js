export default {
  name: 'globalLinkBoxes',
  type: 'document',
  title: 'Global Link Boxes',
  fields: [
    {
      title: 'Link Box',
      name: 'globalLinkBox',
      type: 'linkBox',
    }
  ],
  preview: {
    select: {
      title: 'globalLinkBox.heading',
      media: 'globalLinkBox.backgroundImage'
    }
  }
}
