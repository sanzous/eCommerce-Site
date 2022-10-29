export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        //image field
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                //hotspot helps with image positioning and adapt images responsively
                hotspot: true
            }
        },
        //product field
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            //type for unique identifiers
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                //will create unique slug from product name
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        }
    ]
}