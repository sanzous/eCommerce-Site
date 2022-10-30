import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    //connects to correct project
    projectId: 'vbjzx9td',
    //dev/production status
    dataset: 'production',
    apiVersion: '2022-10-29',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)