const NeDB = require('nedb');
const path = require('path');
const db = new NeDB({
  filename: path.join(__dirname, 'datadaerah.db'), // Store the database in a file
  autoload: true
});

// Data sample (example from your JSON data)
const data = [
    {
      "nama_daerah": "Kabupaten Aceh Besar",
      "provinsi": "Aceh",
      "gambar": "https://img.freepik.com/free-photo/green-mountain-landscape_1417-1781.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Mie Aceh Cut Banta",
            "alamat": "Jl. Banda Aceh-Medan Km 12",
            "deskripsi": "Mie Aceh pedas dengan bumbu rempah khas",
            "gambar": "https://img.freepik.com/free-photo/spicy-noodle-dish_141793-3480.jpg"
          }
        ],
        "gunung": [
          {
            "nama": "Gunung Seulawah Agam",
            "alamat": "Kecamatan Seulimeum",
            "deskripsi": "Gunung berapi aktif dengan kawah yang indah",
            "gambar": "https://img.freepik.com/free-photo/volcanic-mountain_1417-1782.jpg"
          }
        ],
        "danau_pantai": [
          {
            "nama": "Pantai Lhoknga",
            "alamat": "Kecamatan Lhoknga",
            "deskripsi": "Pantai dengan pasir putih dan ombak yang cocok untuk selancar",
            "gambar": "https://img.freepik.com/free-photo/tropical-beach_1417-1783.jpg"
          }
        ],
        "bangunan_bersejarah": [
          {
            "nama": "Benteng Indra Patra",
            "alamat": "Desa Ladong",
            "deskripsi": "Benteng peninggalan kerajaan Hindu pertama di Aceh",
            "gambar": "https://img.freepik.com/free-photo/ancient-fortress_1417-1784.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kota Medan",
      "provinsi": "Sumatera Utara",
      "gambar": "https://img.freepik.com/free-photo/city-skyline_1417-1785.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Sop Buntut Sinar Pagi",
            "alamat": "Jl. Selat Panjang No.16",
            "deskripsi": "Sop buntut dengan bumbu khas Medan",
            "gambar": "https://img.freepik.com/free-photo/beef-soup_141793-3481.jpg"
          }
        ],
        "bangunan_bersejarah": [
          {
            "nama": "Istana Maimun",
            "alamat": "Jl. Brigjen Katamso",
            "deskripsi": "Istana peninggalan Kesultanan Deli",
            "gambar": "https://img.freepik.com/free-photo/historic-palace_1417-1786.jpg"
          }
        ],
        "mall": [
          {
            "nama": "Sun Plaza",
            "alamat": "Jl. H. Zainul Arifin No.7",
            "deskripsi": "Mall modern di pusat kota Medan",
            "gambar": "https://img.freepik.com/free-photo/shopping-mall_1417-1787.jpg"
          }
        ],
        "hotel": [
          {
            "nama": "JW Marriott Hotel Medan",
            "alamat": "Jl. Putri Hijau No.10",
            "deskripsi": "Hotel bintang 5 dengan fasilitas mewah",
            "gambar": "https://img.freepik.com/free-photo/luxury-hotel_1417-1788.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kota Padang",
      "provinsi": "Sumatera Barat",
      "gambar": "https://img.freepik.com/free-photo/coastal-city_1417-1789.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Rumah Makan Sederhana",
            "alamat": "Jl. Pondok No.13",
            "deskripsi": "Tempat makan Padang terkenal dengan rendangnya",
            "gambar": "https://img.freepik.com/free-photo/indonesian-rendang-dish_141793-3482.jpg"
          }
        ],
        "danau_pantai": [
          {
            "nama": "Pantai Air Manis",
            "alamat": "Kecamatan Padang Selatan",
            "deskripsi": "Pantai dengan legenda Malin Kundang",
            "gambar": "https://img.freepik.com/free-photo/rocky-beach_1417-1790.jpg"
          }
        ],
        "bangunan_bersejarah": [
          {
            "nama": "Museum Adityawarman",
            "alamat": "Jl. Diponegoro No.10",
            "deskripsi": "Museum budaya Minangkabau",
            "gambar": "https://img.freepik.com/free-photo/traditional-museum_1417-1791.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kota Pekanbaru",
      "provinsi": "Riau",
      "gambar": "https://img.freepik.com/free-photo/modern-city_1417-1792.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Pondok Ikan Bakar",
            "alamat": "Jl. Riau No.88",
            "deskripsi": "Ikan bakar dengan bumbu khas Melayu",
            "gambar": "https://img.freepik.com/free-photo/grilled-fish_141793-3483.jpg"
          }
        ],
        "mall": [
          {
            "nama": "Mal SKA",
            "alamat": "Jl. Tengku Zainal Abidin",
            "deskripsi": "Mall terbesar di Pekanbaru",
            "gambar": "https://img.freepik.com/free-photo/shopping-center_1417-1793.jpg"
          }
        ],
        "hotel": [
          {
            "nama": "The Premiere Hotel Pekanbaru",
            "alamat": "Jl. Jend. Sudirman No.456",
            "deskripsi": "Hotel bintang 4 dengan kolam renang rooftop",
            "gambar": "https://img.freepik.com/free-photo/modern-hotel_1417-1794.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kota Jambi",
      "provinsi": "Jambi",
      "gambar": "https://img.freepik.com/free-photo/river-city_1417-1795.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Sate Padang Asli",
            "alamat": "Jl. Sultan Thaha No.45",
            "deskripsi": "Sate dengan kuah kental khas Jambi",
            "gambar": "https://img.freepik.com/free-photo/satay-dish_141793-3484.jpg"
          }
        ],
        "danau_pantai": [
          {
            "nama": "Danau Sipin",
            "alamat": "Kecamatan Danau Teluk",
            "deskripsi": "Danau alami di tengah kota",
            "gambar": "https://img.freepik.com/free-photo/lake-view_1417-1796.jpg"
          }
        ],
        "bangunan_bersejarah": [
          {
            "nama": "Candi Muaro Jambi",
            "alamat": "Kecamatan Maro Sebo",
            "deskripsi": "Kompleks candi Hindu-Buddha terluas di Indonesia",
            "gambar": "https://img.freepik.com/free-photo/ancient-temple_1417-1797.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kota Palembang",
      "provinsi": "Sumatera Selatan",
      "gambar": "https://img.freepik.com/free-photo/river-city_1417-1798.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Pempek Pak Raden",
            "alamat": "Jl. Jend. Sudirman No.123",
            "deskripsi": "Pempek kapal selam dengan cuko khas",
            "gambar": "https://img.freepik.com/free-photo/fish-cake_141793-3485.jpg"
          }
        ],
        "danau_pantai": [
          {
            "nama": "Jembatan Ampera",
            "alamat": "Jl. Jend. Sudirman",
            "deskripsi": "Ikon kota Palembang di atas Sungai Musi",
            "gambar": "https://img.freepik.com/free-photo/bridge-river_1417-1799.jpg"
          }
        ],
        "bangunan_bersejarah": [
          {
            "nama": "Benteng Kuto Besak",
            "alamat": "Jl. Sultan Mahmud Badaruddin",
            "deskripsi": "Benteng peninggalan Kesultanan Palembang",
            "gambar": "https://img.freepik.com/free-photo/historic-fort_1417-1800.jpg"
          }
        ],
        "mall": [
          {
            "nama": "Palembang Icon Mall",
            "alamat": "Jl. Letkol Iskandar",
            "deskripsi": "Mall modern dengan berbagai tenant",
            "gambar": "https://img.freepik.com/free-photo/shopping-complex_1417-1801.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kota Bengkulu",
      "provinsi": "Bengkulu",
      "gambar": "https://img.freepik.com/free-photo/coastal-town_1417-1802.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Pondok Bagura",
            "alamat": "Jl. Pariwisata No.12",
            "deskripsi": "Tempat makan khas Bengkulu dengan gulai bagar",
            "gambar": "https://img.freepik.com/free-photo/spicy-curry_141793-3486.jpg"
          }
        ],
        "danau_pantai": [
          {
            "nama": "Pantai Panjang",
            "alamat": "Kecamatan Teluk Segara",
            "deskripsi": "Pantai dengan garis pantai terpanjang di Bengkulu",
            "gambar": "https://img.freepik.com/free-photo/long-beach_1417-1803.jpg"
          }
        ],
        "bangunan_bersejarah": [
          {
            "nama": "Benteng Marlborough",
            "alamat": "Jl. Benteng",
            "deskripsi": "Benteng peninggalan Inggris abad ke-18",
            "gambar": "https://img.freepik.com/free-photo/colonial-fort_1417-1804.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kota Bandar Lampung",
      "provinsi": "Lampung",
      "gambar": "https://img.freepik.com/free-photo/city-harbor_1417-1805.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Gulai Taboh",
            "alamat": "Jl. Wolter Monginsidi No.34",
            "deskripsi": "Gulai ikan dengan bumbu khas Lampung",
            "gambar": "https://img.freepik.com/free-photo/fish-curry_141793-3487.jpg"
          }
        ],
        "danau_pantai": [
          {
            "nama": "Pantai Mutun",
            "alamat": "Kecamatan Padang Cermin",
            "deskripsi": "Pantai dengan pemandangan Teluk Lampung",
            "gambar": "https://img.freepik.com/free-photo/bay-view_1417-1806.jpg"
          }
        ],
        "mall": [
          {
            "nama": "Mall Kartini",
            "alamat": "Jl. Kartini No.1",
            "deskripsi": "Mall pertama di Bandar Lampung",
            "gambar": "https://img.freepik.com/free-photo/shopping-mall_1417-1807.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kota Serang",
      "provinsi": "Banten",
      "gambar": "https://img.freepik.com/free-photo/historic-city_1417-1808.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Sate Bandeng",
            "alamat": "Jl. Ki Mas Jong No.5",
            "deskripsi": "Sate dari daging bandeng tanpa duri",
            "gambar": "https://img.freepik.com/free-photo/fish-satay_141793-3488.jpg"
          }
        ],
        "bangunan_bersejarah": [
          {
            "nama": "Masjid Agung Banten",
            "alamat": "Jl. Banten Lama",
            "deskripsi": "Masjid peninggalan Kesultanan Banten",
            "gambar": "https://img.freepik.com/free-photo/historic-mosque_1417-1809.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kota Bogor",
      "provinsi": "Jawa Barat",
      "gambar": "https://img.freepik.com/free-photo/green-city_1417-1810.jpg",
      "wisata": {
        "kuliner": [
          {
            "nama": "Soto Mie Bogor",
            "alamat": "Jl. Suryakencana No.5",
            "deskripsi": "Soto mie dengan kuah kuning khas Bogor",
            "gambar": "https://img.freepik.com/free-photo/noodle-soup_141793-3489.jpg"
          }
        ],
        "bangunan_bersejarah": [
          {
            "nama": "Istana Bogor",
            "alamat": "Jl. Ir. H. Juanda No.1",
            "deskripsi": "Istana kepresidenan dengan taman rusa",
            "gambar": "https://img.freepik.com/free-photo/presidential-palace_1417-1811.jpg"
          }
        ],
        "mall": [
          {
            "nama": "Botani Square",
            "alamat": "Jl. Raya Pajajaran",
            "deskripsi": "Mall dengan konsep alam dan taman",
            "gambar": "https://img.freepik.com/free-photo/shopping-mall_1417-1812.jpg"
          }
        ]
      }
    },
    {
      "nama_daerah": "Kabupaten Sukabumi",
      "provinsi": "Jawa Barat",
      "gambar": "https://img.freepik.com/free-photo/mountain-town_1417-1813.jpg",
      "wisata": {
        "gunung": [
          {
            "nama": "Gunung Gede Pangrango",
            "alamat": "Taman Nasional Gunung Gede Pangrango",
            "deskripsi": "Gunung dengan ekosistem hutan hujan tropis",
            "gambar": "https://img.freepik.com/free-photo/mountain-peak_1417-1814.jpg"
          }
        ],
        "danau_pantai": [
          {
            "nama": "Pantai Palabuhanratu",
            "alamat": "Kecamatan Palabuhanratu",
            "deskripsi": "Pantai dengan ombak besar dan tebing indah",
            "gambar": "https://img.freepik.com/free-photo/cliff-beach_1417-1815.jpg"
          }
        ]
      }
    }
  ];  

// Insert data into the database
db.insert(data, function (err, newDocs) {
  if (err) {
    console.log("Error inserting data:", err);
  } else {
    console.log("Data added:", newDocs);
  }
});

db.find({ "wisata.danau_pantai": { $exists: true } }, function (err, docs) {
    if (err) {
      console.log("Error fetching data:", err);
    } else {
      console.log("Daerah dengan wisata pantai:", docs);
    }
  });

  db.find({ "wisata.kuliner": { $exists: true } }, function (err, docs) {
    if (err) {
      console.log("Error fetching data:", err);
    } else {
      console.log("Daerah dengan wisata kuliner:", docs);
    }
  });

  db.find({ "wisata.bangunan_bersejarah": { $exists: true } }, function (err, docs) {
    if (err) {
      console.log("Error fetching data:", err);
    } else {
      console.log("Daerah dengan bangunan bersejarah/museum:", docs);
    }
  });

  db.find({ "wisata.gunung": { $exists: true } }, function (err, docs) {
    if (err) {
      console.log("Error fetching data:", err);
    } else {
      console.log("Daerah dengan wisata gunung:", docs);
    }
  });

  db.find({ "wisata.mall": { $exists: true } }, function (err, docs) {
    if (err) {
      console.log("Error fetching data:", err);
    } else {
      console.log("Daerah dengan wisata mall:", docs);
    }
  });
  