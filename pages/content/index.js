import Image from 'next/image';

export default function Content() {
  return (
    <div>
      <div className="content container mb-5">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 p-5">
            <div>
              <Image
                src="/img/content-provider-1-2.png"
                alt="content"
                className="w-100 justify-content-center align-items-center"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 p-5">
            <div>
              <h2>
                Solusi Untuk Aktif dan Konsisten Dalam Memberikan Informasi
                Kepada Pelanggan
              </h2>
              <p>
                Kami memiliki banyak talenta dan konten kreator untuk membantu
                menyelesaikan segala permasalahan kamu di dunia digital dengan
                mengelola sosial media dan membuat desain konten yang keren dan
                kreatif agar kamu dapat fokus dalam pengembangan usaha kamu
                kedepannya.
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
                  <h4 className="card-title">SOSIAL MEDIA MANAGEMEN</h4>
                  <p className="card-text">
                    Mempresentasikan usaha kamu melalui pengelolaan akun sosial
                    media yang baik dalam upaya meningkatkan penjualan dan
                    awareness kepada khalayak
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 style="font-weight: bold;">Rp 1.499.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="checkout.html" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">SOSIAL MEDIA ADMIN</h4>
                  <p className="card-text">
                    Pengelolaan akun sosial media usaha kamu agar aktif dan
                    konsisten update setiap harinya tanpa perlu repot memikirkan
                    desain, caption dan hashtag yang tepat
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 style="font-weight: bold;">Rp 599.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="checkout.html" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">SOSIAL MEDIA TEMPLATE</h4>
                  <p className="card-text">
                    Pembuatan template untuk usaha kamu dengan hasil akhir
                    berupa file Photoshop atau PowerPoint yang akan memudahkan
                    kamu untuk edit, save, dan share
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 style="font-weight: bold;">Rp 99.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="checkout.html" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
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
                  <h4 className="card-title">KONTEN FOTO</h4>
                  <p className="card-text">
                    Membantu dalam pembuatan foto baik untuk produk,
                    suasana/tempat maupun profile dari usaha kamu
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 style="font-weight: bold;">Rp 299.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="checkout.html" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">KONTEN VIDEO</h4>
                  <p className="card-text">
                    Membantu dalam pembuatan video baik untuk produk,
                    suasana/tempat maupun profile dari usaha kamu
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 style="font-weight: bold;">Rp 299.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="checkout.html" className="default-btn">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">PENULISAN ARTIKEL</h4>
                  <p className="card-text">
                    Pembuatan tulisan atau artikel baik untuk produk,
                    suasana/tempat maupun profile dari usaha kamu
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p>HARGA MULAI DARI</p>
                  <h1 style="font-weight: bold;">Rp 49.000</h1>
                  <p>KONSULTASI GRATIS</p>
                  <a href="checkout.html" className="default-btn">
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
    </div>
  );
}
