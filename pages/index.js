import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <div className="main-banner">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="main-banner-wrapper-content">
              <h1>Bangkit Bergerak Tumbuh Bersama</h1>
              <br></br>
              <p>
                SEIA adalah sebuah layanan dari Kode Koding untuk membantu UMKM
                terus melaju dan tumbuh dalam menjawab tantangan di era digital
                saat ini.
              </p>
              <button type="button" className="default-btn">
                Selengkapnya<span></span>
              </button>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="main-banner-wrapper-image">
              <Image
                src="img/bg-e1604710640565.png"
                alt="banner"
                style="display: inline; height: auto; max-width: 100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card-content container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card h-100">
              <Image
                src="img/web-dev.png"
                alt="web-dev"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Website Development</h5>
                <p className="card-text">
                  Tingkatkan nilai dan kredibilitas usaha anda untuk menjangkau
                  pasar yang lebih luas lagi.
                </p>
                <a href="" className="btn btn-link">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <Image
                src="img/branding.png"
                alt="branding"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Branding & Design</h5>
                <p className="card-text">
                  Produk saja tidak cukup. Branding dan Desain merupakan faktor
                  penting untuk usaha Anda.
                </p>
                <a href="" className="btn btn-link">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <Image
                src="img/content-provider-1-2.png"
                alt="content"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Content Provider</h5>
                <p className="card-text">
                  Membantu Anda dalam merencanakan, membuat dan mengelola konten
                  digital.
                </p>
                <Link href="/" passHref>
                  <a className="btn btn-link">Selengkapnya</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact text-center">
        <h2>
          Jangan ragu untuk menghubungi kami, mari diskusi tentang usaha dan ide
          anda.
        </h2>
        <br></br>
        <p>
          Setelah itu ijinkan kami untuk memberikan solusi keratif ataupun hanya
          sekedar saran sebagai seorang teman. Diluar itu semua kami siap untuk
          menjadi mitra usaha anda untuk terus melaju dan tumbuh.
        </p>
        <button type="button" className="default-btn">
          <i className="fas fa-whatsapp"></i>
          Hubungi Kami
          <span></span>
        </button>
      </div>
    </div>
  );
}
