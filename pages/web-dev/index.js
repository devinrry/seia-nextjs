import Image from 'next/image';
import Layout from '@/components/Layout';
import { DEFAULT_SEO } from '@/utils/index';

export default function WebDev({ SEO }) {
  return (
    <Layout seoData={SEO}>
      <div className="content container mb-5">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 p-5">
            <div>
              <img
                src="/img/web-dev.png"
                alt="web-dev"
                className="w-100 justify-content-center align-items-center"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 p-5">
            <div>
              <h2>
                Tingkatkan Nilai Dan Kredibilitas Usaha Anda, Jangkau Pasar Yang
                Lebih Luas Lagi
              </h2>
              <p>
                Website dapat berperan sebagai citra yang menampilkan suatu
                nilai (value) dan kredibilitas dari sebuah usaha. Website juga
                dapat menyediakan informasi yang dibutuhkan oleh konsumen secara
                lengkap sehingga dapat menjangkau pasar yang lebih luas dan ikut
                memberikan kemudahan kepada pelaku usaha dalam menjalankan
                bisnisnya.
              </p>
              {/* <ul className="features-list">
                        <li><span><i className="fa fa-wordpress"></i>Layanan Bulanan</span></li>
                    </ul> */}
              <button type="button" className="default-btn">
                {/* <i className="fas fa-whatsapp"></i> */}
                Hubungi Kami
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card-product container mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-3 text-center">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">GOOGLE SITE</h4>
                  <p className="card-text">
                    Membantu pembuatan website dengan menggunakan Google Site
                    yang terintegrasi dengan Google MyBusiness
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 className="fw-bold">Rp 499.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="/register" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">WEBSITE BISNIS</h4>
                  <p className="card-text">
                    Untuk segala kebutuhan usaha mulai dari landing page,
                    profile, sampai online shop yang dibuat sesuai dengan
                    keinginan Anda
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 className="fw-bold">Rp 2.999.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="/register" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">WEBSITE MAINTENANCE</h4>
                  <p className="card-text">
                    Membantu pengelolaan dan pemeliharaan website agar tetap
                    update dengan performa yang optimal
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 className="fw-bold">Rp 99.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="/register" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-content container">
        <h2 className="text-center mb-4 fw-bold">PROSES KREATIF</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-3 text-center">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Konsultasi</h4>
                  <p className="card-text">
                    Ceritakan kepada kami tentang apa yang diinginkan dan apa
                    yang dibutuhkan
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Eksekusi</h4>
                  <p className="card-text">
                    Proses kreatif pengerjaan dimulai dari tahap brainstorming
                    sampai visualisasi hasil akhir
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Umpan Balik</h4>
                  <p className="card-text">
                    Waktunya anda menyampaikan umpan balik terhadap apa yang
                    kami kerjakan
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Selesai</h4>
                  <p className="card-text">
                    Penyelesaian tahap akhir dan kami akan mengirimkan hasil
                    pekerjaan secara langkap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const title = 'Website Development';
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
