// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import {CogIcon as SettingsIcon} from '@sanity/icons'
import {getDocumentNodeWithViews} from './plugins/views-in-schema/documentNodeWithViews'

export const getDefaultDocumentNode = getDocumentNodeWithViews
const excludedDocumentTypes = ['siteSettings', 'homePage', 'media', 'globalLinkBoxes']

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .title('Settings')
        .id('siteSettings')
        .schemaType('siteSettings')
        .icon(SettingsIcon),
      S.divider(),
      S.documentListItem()
        .title('Home Page')
        .id('_homePage')
        .schemaType('homePage'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !excludedDocumentTypes.includes(listItem.getId())
      ),
      S.divider(),
      S.documentTypeListItem('globalLinkBoxes').title('Link Boxes').id('globalLinkBoxes'),
    ])
