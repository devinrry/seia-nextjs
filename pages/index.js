import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-wrapper-content">
                <h1>Bangkit Bergerak Tumbuh Bersama</h1>
                <br />
                <p>
                  SEIA adalah sebuah layanan dari Kode Koding untuk membantu
                  UMKM terus melaju dan tumbuh dalam menjawab tantangan di era
                  digital saat ini.
                </p>
                <button type="button" className="default-btn">
                  Selengkapnya<span></span>
                </button>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="main-banner-wrapper-image">
                <img
                  src="/img/bg-e1604710640565.png"
                  className="d-inline w-100"
                  // style={{ height: auto; maxWidth: 100% }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-content container">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <div className="col">
              <div className="card h-100">
                <img src="/img/web-dev.png" alt="" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">Website Development</h5>
                  <p className="card-text">
                    Tingkatkan nilai dan kredibilitas usaha anda untuk
                    menjangkau pasar yang lebih luas lagi.
                  </p>
                  <a href="" className="btn btn-link">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="/img/branding.png" alt="" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">Branding & Design</h5>
                  <p className="card-text">
                    Produk saja tidak cukup. Branding dan Desain merupakan
                    faktor penting untuk usaha Anda.
                  </p>
                  <a href="" className="btn btn-link">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/img/content-provider-1-2.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Content Provider</h5>
                  <p className="card-text">
                    Membantu Anda dalam merencanakan, membuat dan mengelola
                    konten digital.
                  </p>
                  <a href="" className="btn btn-link">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container text-center">
          <h2>
            Jangan ragu untuk menghubungi kami, mari diskusi tentang usaha dan
            ide anda.
          </h2>
          <br />
          <p>
            Setelah itu ijinkan kami untuk memberikan solusi keratif ataupun
            hanya sekedar saran sebagai seorang teman. Diluar itu semua kami
            siap untuk menjadi mitra usaha anda untuk terus melaju dan tumbuh.
          </p>
          <button type="button" className="default-btn">
            <i className="fas fa-whatsapp"></i>
            Hubungi Kami
            <span></span>
          </button>
        </div>
      </div>
    </Layout>
  );
}
