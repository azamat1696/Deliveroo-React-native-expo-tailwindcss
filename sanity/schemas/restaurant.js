import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
        name: 'name',
        title: 'Restaurant name',
        type: 'string',
        validation: Rule => Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image of restaurant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of restaurant',
      type: 'number',
    },
    {
        name: 'long',
        title: 'Longitude of restaurant',
        type: 'number',
    },
    {
       name: 'address',
       title: 'Address of restaurant',
       type: 'string',
       validation: Rule => Rule.required()

    },
    {
        name: 'rating',
        title: 'Rating of restaurant from 1 to 5',
        type: 'number',
      validation: (Rule) =>
          Rule.required()
              .min(1)
              .max(5)
              .error('A restaurant must have between 1 and 5 dishes')

    },
    {
      name: 'type',
      title: 'Category',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}]
    },
    {
        name: 'dishes',
        title: 'Dishes',
        type: 'array',
        of: [ { type: "reference",to: [{ type: "dish" }] } ],
    }

    ]

})
