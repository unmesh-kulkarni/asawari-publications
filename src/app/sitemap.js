export default function sitemap() {
  return [
    {
      url: 'https://www.asawariprakashan.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.asawariprakashan.in/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.asawariprakashan.in/contact-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }
  ]
}