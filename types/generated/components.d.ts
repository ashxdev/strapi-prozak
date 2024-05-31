import type { Schema, Attribute } from '@strapi/strapi';

export interface AddAdd extends Schema.Component {
  collectionName: 'components_add_adds';
  info: {
    displayName: 'Add';
    icon: 'ad';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    html: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'add.add': AddAdd;
    }
  }
}
