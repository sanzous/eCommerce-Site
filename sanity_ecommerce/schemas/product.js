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
        }
    ]
}