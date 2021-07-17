import Layout from '@/components/Layout';
import { DEFAULT_SEO } from '@/utils/index';

export default function About({ SEO }) {
  return (
    <Layout seoData={SEO}>
      <div className="content container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 p-5">
            <div>
              <img
                src="img/logo.png"
                alt=""
                className="w-100 justify-content-center align-items-center"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 p-5">
            <div>
              <h2>UMKM One-Stop-Solution</h2>
              <p>
                Sebuah layanan dari Kode Koding untuk membantu UMKM terus melaju
                dan tumbuh dalam menjawab tantangan di era digital saat ini.
                Kami bergerak sebagai mitra yang memberikan solusi kreatif
                terhadap permasalahan UMKM sebagai upaya dalam mendukung UMKM
                untuk naik kelas sehingga mampu bersaing dan berinovasi dengan
                memanfaatkan teknologi.
              </p>
              <button type="button" className="default-btn">
                <i className="fas fa-whatsapp"></i>
                Hubungi Kami
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const title = 'Tentang Kami';
  const author = 'devi';
  const SEO = {
    ...DEFAULT_SEO,
    title,
    author,
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: 'https://seia-kodekoding.com',
      title,
      site_name: 'SEIA',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@KodeKoding',
      title,
    },
  };
  return {
    props: {
      SEO,
    },
    revalidate: 10,
  };
}
