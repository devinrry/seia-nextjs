export const getData = async () => {
  const resp = await fetch('https://seia-kodekoding.herokuapp.com/products');
  const res = await resp.json();
  const products = res.map((data) => ({
    id: data.id,
    name: data.product_name,
    category: data.category,
  }));
  return products;
};

export const DEFAULT_SEO = {
  title: 'SEIA - KODE KODING',
  description:
    'SEIA adalah sebuah layanan dari Kode Koding untuk membantu UMKM terus melaju dan tumbuh dalam menjawab tantangan di era digital saat ini.',
  // keywords: 'seia',
  author: 'devi',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.seia-kodekoding.com',
    title: 'SEIA - KODE KODING',
    description:
      'SEIA adalah sebuah layanan dari Kode Koding untuk membantu UMKM terus melaju dan tumbuh dalam menjawab tantangan di era digital saat ini.',
    image:
      'https://seia.kodekoding.com/wp-content/uploads/2020/12/logo-seia-web.png',
    site_name: 'Kemenparekraf',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@KodeKoding',
    title: 'SEIA - KODE KODING',
    description:
      'SEIA adalah sebuah layanan dari Kode Koding untuk membantu UMKM terus melaju dan tumbuh dalam menjawab tantangan di era digital saat ini.',
    image:
      'https://seia.kodekoding.com/wp-content/uploads/2020/12/logo-seia-web.png',
  },
};
