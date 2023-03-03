import {EyeOpenIcon, DocumentIcon} from '@sanity/icons'
import {ArticlePreview} from '../components/views/ArticlePreview'
import {JsonView} from '../components/views/JsonView'
import S from '@sanity/desk-tool/structure-builder'

export default {
  name: 'vehicle',
  type: 'document',
  title: 'Vehicle',
  views: [
    S.view.component(ArticlePreview).title('Preview').icon(EyeOpenIcon),
    S.view.component(JsonView).title('JSON').icon(DocumentIcon),
  ],
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              title: 'alt',
              name: 'alt',
              type: 'string',
              validation: Rule => Rule.required().error('Alt tags are required for SEO'),
            }
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'make',
      type: 'string',
      title: 'Make',
    },
    {
      name: 'model',
      type: 'string',
      title: 'Model',
    },
    {
      name: 'year',
      type: 'number',
      title: 'Year',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'mileage',
      type: 'number',
      title: 'Mileage',
    },
    {
      name: 'engine',
      type: 'string',
      title: 'Engine',
    },
    {
      name: 'drivetrain',
      type: 'string',
      title: 'Drivetrain',
    },
    {
      name: 'transmission',
      type: 'string',
      title: 'Transmission'
    },
    {
      name: 'exterior_color',
      type: 'string',
      title: 'Exterior Color'
    },
    {
      name: 'interior_color',
      type: 'string',
      title: 'Interior Color'
    },
    {
      name: 'description',
      type: 'simpleBlockContent',
      title: 'Description',
    },
    {
      name: 'exterior_description',
      type: 'simpleBlockContent',
      title: 'Exterior Description'
    },
    {
      name: 'interior_description',
      type: 'simpleBlockContent',
      title: 'Interior Description'
    },
    {
      name: 'performance_description',
      type: 'simpleBlockContent',
      title: 'Performance Description'
    }
  ],
  preview: {
    select: {
      subtitle: '_id',
      media: 'images.0',
      make: 'make',
      model: 'model',
      year: 'year'
    },
    prepare: ({make, model, year, subtitle, media}) => {
      const title = year + ' ' + make + ' ' + model
      return {
        title: title,
        subtitle,
        media
      }
    }
  }
}
