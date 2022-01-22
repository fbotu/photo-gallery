export default {
    title: 'Photos',
    name: 'photos',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string'
      },
  
      {
        title: 'Image',
        name: 'image',
        type: 'image'
      },
      
      {
        title: 'Photographer',
        name: 'photographer',
        // A reference is a way to point to another document
        type: 'reference',
        // This reference is only allowed to point to a document of the type person,
        // we could list more types, but let's keep this simple:
        to: [{type: 'photographers'}]
      },
      {
        title: 'Caption',
        name: 'caption',
        type: 'string'
      },
    ]
  }