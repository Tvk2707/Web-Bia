import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Products() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const products = [
    {
      id: 1,
      brand: 'KING BILLIARDS',
      name: 'KING NEXUS',
      price: '69 Triệu',
      description: 'Bàn bi-a cao cấp với thiết kế hiện đại, mặt chơi chuyên nghiệp',
      images: [
        '/web-bia-images/05-products/king-billiards-king-nexus/01_z8073127555502_b6cf0618f3b074956499f431f838b329_a49af547.jpg',
        '/web-bia-images/05-products/king-billiards-king-nexus/02_z8073127559716_31ded73e99b732966fe7f641bc73b3ac_d4ff2bc2.jpg',
        '/web-bia-images/05-products/king-billiards-king-nexus/03_z8073127566749_7b7808a0db53b48eb3a6f7fcb7e5deeb_6c436223.webp',
        '/web-bia-images/05-products/king-billiards-king-nexus/04_z8073127578520_db38c924dfa903bb20e7d05dd870e75c_04797560.webp',
      ]
    },
    {
      id: 2,
      brand: 'KING BILLIARDS',
      name: 'KING LUXURY',
      price: '56 Triệu',
      description: 'Bàn bi-a cao cấp với thiết kế sang trọng, mặt chơi xanh lá',
      images: [
        '/web-bia-images/05-products/king-billiards-king-luxury/01_z8073146436199_e2178df2580fd87153e64fe02ccac1d3_479c79a7.jpg',
        '/web-bia-images/05-products/king-billiards-king-luxury/02_z8073146443616_88ebb4bd68095b1559f79ea431e5060f_9558d900.jpg',
        '/web-bia-images/05-products/king-billiards-king-luxury/03_z8073146453807_8bec4256de8b1ed2cb520ef5f64d08eb_49f35570.jpg',
      ]
    },
    {
      id: 3,
      brand: 'KING BILLIARDS',
      name: 'KING WINNER',
      price: '52 Triệu',
      description: 'Bàn bi-a cao cấp với thiết kế hiện đại, mặt chơi xám bạc',
      images: [
        '/web-bia-images/05-products/king-billiards-king-winner/01_z8073138375759_96ce85d0c048ee2c2cbe6666ff5ab9fe_747de17c.jpg',
        '/web-bia-images/05-products/king-billiards-king-winner/02_z8073138385632_c549febb67fa9d5e2413b3db90859516_c6bd69af.jpg',
        '/web-bia-images/05-products/king-billiards-king-winner/03_z8073138395142_f4efe66b626a5dc7543bd15d54e63efc_aab1e2e7.jpg',
        '/web-bia-images/05-products/king-billiards-king-winner/04_z8073138372289_b52a0653b9e530982d912159561b3331_c56488b2.jpg',
      ]
    },
    {
      id: 4,
      brand: 'KING BILLIARDS',
      name: 'KING ALPHA',
      price: '42 Triệu',
      description: 'Bàn bi-a cao cấp với thiết kế sang trọng, mặt chơi xám nhạt',
      images: [
        '/web-bia-images/05-products/king-billiards-king-alpha/01_z8073147785413_e3ed7d03984215ebe787786026a83f44_06717f85.jpg',
        '/web-bia-images/05-products/king-billiards-king-alpha/02_z8073147794915_7d8328ffec21d2e3e6b308d4de1a0a33_4a5cfcc5.jpg',
        '/web-bia-images/05-products/king-billiards-king-alpha/03_z8073147800086_60fe8f5f944da787cc36666bd2761043_0cbc3b45.jpg',
        '/web-bia-images/05-products/king-billiards-king-alpha/04_z8073147809464_da791215620567325c128064b8582145_9a5d0171.jpg',
      ]
    },
    {
      id: 5,
      brand: 'KING BILLIARDS',
      name: 'KING ULTRA-X',
      price: '37 Triệu',
      description: 'Bàn bi-a cao cấp với thiết kế hiện đại, mặt chơi xanh dương',
      images: [
        '/web-bia-images/05-products/king-billiards-king-ultra-x/01_z8073147973966_16e547d81e7e106be8ed04f8f6e32812_79dbd931.jpg',
        '/web-bia-images/05-products/king-billiards-king-ultra-x/02_z8073148004125_93d0071a61dd46cc67baec690c93b313_e26aff96.jpg',
        '/web-bia-images/05-products/king-billiards-king-ultra-x/03_z8073147968737_be59b97088cd22ba27879f256e35f4da_9b66b7b5.jpg',
        '/web-bia-images/05-products/king-billiards-king-ultra-x/04_z8073147983833_319fca49808c545109158c8f9bf6fde7_172d2618.jpg',
      ]
    },
    {
      id: 6,
      brand: 'KING KONG',
      name: 'ELIZABETH - S26',
      price: '68 Triệu',
      description: 'Bàn bi-a cao cấp từ thương hiệu KING KONG, thiết kế sang trọng với mặt chơi xám trắng',
      images: [
        '/web-bia-images/05-products/king-kong-elizabeth-s26/01_z8073160372104_59ee47efa8918fd61cddf5843cfa38b4_6d422f1b.jpg',
        '/web-bia-images/05-products/king-kong-elizabeth-s26/02_z8073160404364_74a44ec52ce1d6ef5b6690890b4c6f1b_3047e024.jpg',
        '/web-bia-images/05-products/king-kong-elizabeth-s26/03_z8073160443948_7d957acccaba1f869a35a93326671358_f222186e.jpg',
        '/web-bia-images/05-products/king-kong-elizabeth-s26/04_z8073160482053_d9bfa92048386c276d9fbef835e16960_94d5d45d.jpg',
        '/web-bia-images/05-products/king-kong-elizabeth-s26/05_z8073160528855_e53e261172d0f67dcdc9b0a203693bec_2acb2f8d.jpg',
        '/web-bia-images/05-products/king-kong-elizabeth-s26/06_z8073160562276_a00194b1f5618668f5cf5b3a8cf66a7f_c1e23d9d.jpg',
        '/web-bia-images/05-products/king-kong-elizabeth-s26/07_z8073163268988_5d6edde6ed11b3d97a44833feef63a3b_c24395a3.jpg',
        '/web-bia-images/05-products/king-kong-elizabeth-s26/08_z8073163301949_f369965fddad286fc8b4ad9320ab713d_13f60cc5.jpg',
      ]
    },
    {
      id: 7,
      brand: 'KING KONG',
      name: 'ROYAL',
      price: '56 Triệu',
      description: 'Bàn bi-a cao cấp từ thương hiệu KING KONG, thiết kế hiện đại với mặt chơi trắng xám',
      images: [
        '/web-bia-images/05-products/king-kong-royal/01_z8073178483583_e0b00be52a08bb3603ab930dd301cb4a_64615b79.jpg',
        '/web-bia-images/05-products/king-kong-royal/02_z8073178522686_76d3791b353fbd8a579064aef8863f10_ea612f91.jpg',
        '/web-bia-images/05-products/king-kong-royal/03_z8073178557594_be4ddb3767b662692ea2728fd2d26f54_e3b3da10.jpg',
        '/web-bia-images/05-products/king-kong-royal/04_z8073660558498_0cf0b2f3df32729221d848e15a4013f1_d71fc8fe.jpg',
        '/web-bia-images/05-products/king-kong-royal/05_z8073660563116_a7fccb836b972622902b1b4fa20717af_197f7a48.jpg',
        '/web-bia-images/05-products/king-kong-royal/06_z8073660570655_23ac8ec8ff4d6af4b80b58ea23646d21_0d359636.jpg',
        '/web-bia-images/05-products/king-kong-royal/07_z8073660586434_4909f6e82aac902714608362dd7249b4_e9bd2759.jpg',
      ]
    },
    {
      id: 8,
      brand: 'KK KING',
      name: 'VICTORY',
      price: '70 Triệu',
      description: 'Bàn bi-a cao cấp từ thương hiệu KK KING, thiết kế sang trọng với mặt chơi xanh dương',
      images: [
        '/web-bia-images/05-products/kk-king-victory/01_z8073110138383_30130445dc18f5f09eb352b4668c6f4e_8d30be34.webp',
        '/web-bia-images/05-products/kk-king-victory/02_z8073110138088_97d6c55c3d120f82ad0de869d6e96cf7_c241aba1.webp',
        '/web-bia-images/05-products/kk-king-victory/03_z8073110148187_a45452793b847a20562b8b842e1b6263_2ae71cff.webp',
        '/web-bia-images/05-products/kk-king-victory/04_z8073110156229_a322474389e9c0d442b8595da355eb5b_7e8ecdda.webp',
        '/web-bia-images/05-products/kk-king-victory/05_z8073110169857_36531874d3c3a223f5da79ca67b3d006_1434f092.webp',
        '/web-bia-images/05-products/kk-king-victory/06_z8073110173586_8e08b7689254e49393f91e9dd7c90daa_8fa4bf45.webp',
        '/web-bia-images/05-products/kk-king-victory/07_z8073110164414_71f32b08741549f0f5e7aaf944fd2966_4e863acf.webp',
        '/web-bia-images/05-products/kk-king-victory/08_z8073110485034_d160c1de2b1b9c47c02353c0bdd05c7e_9714c39d.webp',
        '/web-bia-images/05-products/kk-king-victory/09_z8073110176728_d18d6c03c4fd9fd55de677a6c55f6072_589f7e2e.webp',
      ]
    },
    {
      id: 9,
      brand: 'KK KING',
      name: 'IMPERIAL PLATINUM',
      price: '68 Triệu',
      description: 'Bàn bi-a cao cấp từ thương hiệu KK KING, thiết kế sang trọng với mặt chơi đỏ, khung gỗ nâu',
      images: [
        '/web-bia-images/05-products/kk-king-imperial-platinum/01_z8073113085434_1479d6afbd997fcfd0bf77d4a70cd05f_82c3bf7c.jpg',
        '/web-bia-images/05-products/kk-king-imperial-platinum/02_z8073113069776_42b7e18ca854dd261cb04ab86f431505_2ffbaeb3.webp',
        '/web-bia-images/05-products/kk-king-imperial-platinum/03_z8073113098238_e42de30e38f81c1cb8d2cd6d8f63450a_ebb9e68b.webp',
        '/web-bia-images/05-products/kk-king-imperial-platinum/04_z8073113060903_0b6c515426994cc8268f6a37ce9658f9_87e3b6ed.webp',
        '/web-bia-images/05-products/kk-king-imperial-platinum/05_z8073113078152_e2c389720c9e5fbcf32ee982ff136bd5_fa53964f.webp',
        '/web-bia-images/05-products/kk-king-imperial-platinum/06_z8073113118542_8007f6ca685960fd86157ed9aab74bf3_b98b402a.webp',
        '/web-bia-images/05-products/kk-king-imperial-platinum/07_z8073113103192_7ddd12a435792fb30ebaf7ee0927b195_66d30a71.webp',
        '/web-bia-images/05-products/kk-king-imperial-platinum/08_z8073113089239_5d8412a4f189013ad6412fd483c9513f_3593f490.webp',
        '/web-bia-images/05-products/kk-king-imperial-platinum/09_z8073113107789_56b8f544951167e5b1e5965bb7b52020_769754dd.webp',
      ]
    },
    {
      id: 10,
      brand: 'KK KING',
      name: 'NOVA',
      price: '62 Triệu',
      description: 'Bàn bi-a cao cấp từ thương hiệu KK KING, thiết kế hiện đại với mặt chơi xanh nhạt',
      images: [
        '/web-bia-images/05-products/kk-king-nova/01_z8073116972981_3c7f17e012affd681eb94555f777a054_f848faf0.jpg',
        '/web-bia-images/05-products/kk-king-nova/02_z8073116979998_c4cb6b86f96d4fe30f19c6638b5e0e61_89934596.webp',
        '/web-bia-images/05-products/kk-king-nova/03_z8073116986717_e973333f40bd4b3706a0bce0c5267ce5_d8d35a65.webp',
        '/web-bia-images/05-products/kk-king-nova/04_z8073116986301_315ce628490ca87744e3e970b3e09345_4ed196cf.webp',
      ]
    },
    {
      id: 11,
      brand: 'KK KING',
      name: 'K9025',
      price: '60 Triệu',
      description: 'Bàn bi-a cao cấp từ thương hiệu KK KING, thiết kế hiện đại với mặt chơi xanh dương',
      images: [
        '/web-bia-images/05-products/kk-king-k9025/01_1_62bdc7a8.webp',
        '/web-bia-images/05-products/kk-king-k9025/02_z8073118607875_844429e5ab5a9fb07d85e662ee01da1c_a48677fc.webp',
        '/web-bia-images/05-products/kk-king-k9025/03_z8073118613623_aff43603f40c61a4d28733330188183b_8a014676.webp',
        '/web-bia-images/05-products/kk-king-k9025/04_z8073118622529_c78a338f36bb082a19332640e3bf1235_1410a671.webp',
        '/web-bia-images/05-products/kk-king-k9025/05_z8073118630310_361145803dbea392550cd5a64db30604_9921aa71.webp',
        '/web-bia-images/05-products/kk-king-k9025/06_z8073118634494_516ab630c7121f687f18c3d6b705e89b_7d8572c1.webp',
        '/web-bia-images/05-products/kk-king-k9025/07_z8073118639790_fdb28ed55fa1e294803627a9e5f457f0_3e31dd28.webp',
        '/web-bia-images/05-products/kk-king-k9025/08_z8073118642878_b44bc7aee1dbac1be56a4a12213b44d8_232b7b36.webp',
      ]
    },
    {
      id: 12,
      brand: 'KK KING',
      name: 'EMPEROR',
      price: '80 Triệu',
      description: 'Bàn bi-a cao cấp từ thương hiệu KK KING, thiết kế sang trọng với mặt chơi xanh dương, khung gỗ đen',
      images: [
        '/web-bia-images/05-products/kk-king-emperor/01_z8073121788516_ccd213750764257f7e5df8a739e07bc3_2112e11f.webp',
        '/web-bia-images/05-products/kk-king-emperor/02_1_bbd69d57.webp',
        '/web-bia-images/05-products/kk-king-emperor/03_z8073121800481_ff459f96bf6f4e67cafc4eacfb55316f_b905e184.webp',
        '/web-bia-images/05-products/kk-king-emperor/04_z8073121790355_01185aea496576b5e4412fde622045f9_67e665d6.webp',
        '/web-bia-images/05-products/kk-king-emperor/05_z8073121816092_4a6bc59ac223ad5a27e359e8b0099c40_7c0c4c90.webp',
        '/web-bia-images/05-products/kk-king-emperor/06_z8073121803264_35baf4b8fd56f86f010554e7402b0bde_c85b574f.webp',
        '/web-bia-images/05-products/kk-king-emperor/07_z8073123024159_6d5a52f7822403322783a448742360f8_daa279f3.webp',
        '/web-bia-images/05-products/kk-king-emperor/08_z8073121815814_8ceef0ae4c446262f7ec852464662450_80c14390.webp',
        '/web-bia-images/05-products/kk-king-emperor/09_z8073121828475_4dff97d6c4a8d72ca0eb4c729aaee102_20c1a199.webp',
      ]
    },
    {
      id: 13,
      brand: 'RASSION',
      name: 'ACURA',
      price: 'Liên Hệ',
      description: 'Bàn bi-a cao cấp từ thương hiệu RASSION, thiết kế hiện đại với mặt chơi xám, khung gỗ tối',
      images: [
        '/web-bia-images/05-products/rassion-acura/01_z8073181325015_e40f4a1b63b3a958447be47669a8ab58_da841f35.jpg',
      ]
    },
    {
      id: 14,
      brand: 'AILEEX',
      name: 'CROWS24 LUXURY ỐP ĐEN',
      price: 'Liên Hệ',
      description: 'Bàn bi-a cao cấp từ thương hiệu AILEEX, thiết kế sang trọng với mặt chơi trắng, khung gỗ đen',
      images: [
        '/web-bia-images/05-products/aileex-crows24-luxury-op-den/01_z8073197157855_f01d2b9a58cbe1958cc7d01c11890b41_3f428aae.jpg',
        '/web-bia-images/05-products/aileex-crows24-luxury-op-den/02_z8073208160411_67705f1e4b99edb2ea68cac9b93b25c8_cdbe6841.jpg',
      ]
    },
    {
      id: 15,
      brand: 'QUEEN',
      name: 'ALPHA',
      price: '52 Triệu',
      description: 'Bàn bi-a cao cấp từ thương hiệu QUEEN, thiết kế hiện đại với mặt chơi trắng, khung gỗ bạc',
      images: [
        '/web-bia-images/05-products/queen-alpha/01_z8073211969318_01f74b70a6ff8843e23e23daa1b52990_9bf8753c.jpg',
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">Sản Phẩm</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Bàn BI-A</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Các sản phẩm bàn bi-a cao cấp từ những thương hiệu hàng đầu thế giới</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden border border-yellow-600/20 hover:border-yellow-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/20">
              {/* Product Image */}
              <div className="relative bg-gray-800 h-64 overflow-hidden cursor-pointer group" onClick={() => { setSelectedProductId(product.id); setSelectedImageIndex(0); }}>
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">Xem chi tiết</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">{product.brand}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                
                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-800 p-3 rounded-lg border-l-2 border-yellow-600">
                    <p className="text-gray-400 text-xs mb-1">Giá</p>
                    <p className="text-xl font-bold text-yellow-600">{product.price}</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg border-l-2 border-yellow-600">
                    <p className="text-gray-400 text-xs mb-1">Hình Ảnh</p>
                    <p className="text-xl font-bold text-yellow-600">{product.images.length}</p>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setSelectedProductId(product.id); setSelectedImageIndex(idx); }}
                      className="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-yellow-600 transition-all"
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProductId !== null && products.find(p => p.id === selectedProductId) && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProductId(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-600 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Main Image */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={products.find(p => p.id === selectedProductId)!.images[selectedImageIndex]} 
                alt="Product"
                className="w-full h-auto opacity-0 animate-fadeIn"
              />

              {/* Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => setSelectedImageIndex(selectedImageIndex === 0 ? products.find(p => p.id === selectedProductId)!.images.length - 1 : selectedImageIndex - 1)}
                  className="bg-yellow-600/80 hover:bg-yellow-600 text-white p-2 rounded-full transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => setSelectedImageIndex(selectedImageIndex === products.find(p => p.id === selectedProductId)!.images.length - 1 ? 0 : selectedImageIndex + 1)}
                  className="bg-yellow-600/80 hover:bg-yellow-600 text-white p-2 rounded-full transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {selectedImageIndex + 1} / {products.find(p => p.id === selectedProductId)!.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {products.find(p => p.id === selectedProductId)!.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx ? 'border-yellow-600' : 'border-gray-700 hover:border-yellow-600/50'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
