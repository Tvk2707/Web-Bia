import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: '86 BILLIARDS - SÓC SƠN',
      location: 'Sóc Sơn, Hà Nội',
      area: '300m²',
      tables: '10 Bàn',
      specs: '300m² - 10 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế Art Deco hiện đại, 10 bàn billiards chuyên nghiệp, khu VIP riêng biệt, hệ thống ánh sáng LED tối ưu.',
      images: [
        '/web-bia-images/04-projects/86-billiards-soc-son/01_z8073222150088_4cdd1135ed0e2675a7115dce4505d5cb_eaad5e04.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/02_1_18e85118.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/03_z8073222126210_5db28f9386cc5bbbf108067a99727126_9cdd5a94.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/04_z8073222130279_38f67425ac64dec4f4eaa19d5e460de8_0e7d23d8.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/05_z8073222156629_f75f497b45145712769997b4c878f396_b5da6b8a.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/06_z8073222159698_bd7f55ba7dcab919a708d4b3699c598b_da82b34d.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/07_z8073222162118_37b277127de3229a6838995ee3934926_8d77b966.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/08_z8073222168560_82264ce8b853c143cbb1a4bea9c6f9f1_a7d56659.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/09_z8073222180547_00e4dfd0ca7acdc60953a1fccdf0cd0e_52353e88.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/10_z8073222187171_3bdbeb3eda1f729582093a2107f5f726_0ec9507e.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/11_z8073222192540_1d74a5f17b52dff11b22a95272c1e9a5_75b3ce97.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/12_z8073222201118_8afb8d927784af52525d9ec559ad9022_19e91ad1.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/13_z8073222201389_d0613f958ab21c58354c42630cc43d1d_3be5a961.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/14_z8073222210297_6c9bffbbbd195f62b8a4553ca7bbe60b_e10c5d89.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/15_z8073222222956_bf3c2bf1fabb12930cdf8d881c78a5ee_a8bdbf7a.jpg',
        '/web-bia-images/04-projects/86-billiards-soc-son/16_z8073222231510_d69ad9b05e225288e7cf12558c3c6ea1_98a565e9.jpg',
      ]
    },
    {
      id: 2,
      name: 'HZ BILLIARDS - VĨNH PHÚC',
      location: 'Vĩnh Phúc',
      area: '400m²',
      tables: '12 Bàn',
      specs: '400m² - 12 bàn',
      description: 'Câu lạc bộ Billiards hạng sang với diện tích 400m², 12 bàn billiards cao cấp, thiết kế nội thất luxury, khu bar và lounge riêng, hệ thống âm thanh chuyên nghiệp.',
      images: [
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/01_z8073224157248_0753cd557a50475d15ecc0578f0518cf_2cf2a863.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/02_z8073224160086_a1502816e915353477a29fce23446f80_cc7640c1.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/03_z8073224172379_b4b9cb2ce0ab1eabe158796add35faf4_970809c0.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/04_z8073224177076_2a025061af17aa2844c03558435518a4_63c7255d.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/05_z8073224179866_e7db79eb360b029bacfa058b436d67bb_1c554fd3.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/06_z8073224191360_37047188c061724a207e360160726a56_629e343d.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/07_z8073224196980_8aeb4631d09124be39520bb0c9ff22ef_ba2b687c.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/08_z8073224203651_381040587ff788fab7b8762b4ecd8205_55008634.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/09_z8073224206409_ce7f8d85add950eda38282883190a764_cc5c30f5.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/10_z8073224217113_ff309ec9eadc1701fd8d62c49d3bae92_c4e0e6b9.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/11_z8073224227854_5b9a751593c3d5dfd707ddf244d62fc3_dd5d24fa.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/12_z8073224233175_7876ba81c185181ce36720ce134405dd_efa9caa4.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/13_z8073224237749_bb5084a05f9c9cc2195d012c430398a0_98a68d5e.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/14_z8073224239260_4ccb1da65dc48c89b33de241847d5e13_663d0356.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/15_z8073224244914_5d4d133119ebed53c6be54d087cff3f3_4285b251.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/16_z8073224251719_e265a01aeb123d39bde1c28e603304db_a708de00.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/17_z8073224265303_ab3618e1d647490ef5283296d759bb40_bc249e6d.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/18_z8073224266934_f0c1351251a2157d12e30fa919b71865_3e272ead.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/19_z8073224275883_67f2f9f70d7176953d5d24256e2d61fc_e30b3f76.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/20_z8073224279552_d6d4f62914434b495b64d1a8dc63cf64_59b773e9.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/21_z8073224287153_8163bdc4465b705efb139d1a70fa75fd_5993727f.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/22_z8073224131375_53c98bcff9f25f76a329fc57dd5f80db_eca79046.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/23_z8073224120981_1fe1b86f1f2d7348d7f97afb85c1c1ff_c462a0a4.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/24_z8073224126668_234eb7d7172c5663172d10824f559d11_803b8f39.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/25_z8073224145355_5fba95036879249bee521314ead12655_c92af978.jpg',
        '/web-bia-images/04-projects/hz-billiards-vinh-phuc/26_z8073224144542_5763157c051651164b401fe441b59641_3bd6b913.jpg',
      ]
    },
    {
      id: 3,
      name: 'TL BILLIARDS - BẮC NINH',
      location: 'Bắc Ninh',
      area: '300m²',
      tables: '10 Bàn',
      specs: '300m² - 10 bàn',
      description: 'Câu lạc bộ Billiards hiện đại tại Bắc Ninh với 10 bàn billiards chuyên nghiệp, thiết kế nội thất sang trọng, khu lounge thoải mái, hệ thống chiếu sáng LED chuyên dụng.',
      images: [
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/01_z8073224650569_75626b3b8b0f6c414979efb1fdcb0d14_4b6276c9.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/02_z8073224650850_f1fe29d3be94cc6e7e7f4afdc0a8c2e3_6b40cc8a.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/03_z8073224657079_1db7f58ab2301987b45c47f01392eb5f_cf2a634e.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/04_z8073224665744_8f8373531b6e64ba7dff4b325c719d68_ee88fa80.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/05_z8073224691135_f8aa61043f4325529246dd23c6533c93_967e42c3.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/06_z8073224698193_ad536bc036f478f033d3eb0d08b3e16e_ec73c012.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/07_z8073224671708_dcf94493c0ac15bc65279664362e0e73_729e2fa8.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/08_z8073224680755_2c9ab4ab4f2148f5492aec1e48f958bb_45c41b69.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/09_z8073224689675_8e1dbb2266987d9e4cf3da8840e32fe8_af0520af.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/10_z8073224769453_135895d60a1583754b69a8a5e2570ced_18a39f4c.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/11_z8073224723979_34f2802aa9174d60e093830a645c8456_748586cb.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/12_z8073224712958_0cf31a806db9055ef98f43421c27bf38_9ca965a3.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/13_z8073224722611_0ac247dfc4f167f81b56a8117a712952_d79ff903.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/14_z8073224745734_2ee44b2eb7b86decabd2092777408df5_292b474f.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/15_z8073224701966_bb0aea64992263f13f6e1bf5854177ca_45d043fc.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/16_z8073224739052_0547b48b9ce1a4ef80d055172a19e79c_e10d1966.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/17_z8073224752558_b4a7c06bde919cede0d73a76a95891d1_d799dfdc.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/18_z8073224763078_bf5bf5b12186a05b8c5ed352a392222d_e088e6c9.jpg',
        '/web-bia-images/04-projects/tl-billiards-bac-ninh/19_z8073224752860_887ad923e0dee85fb179150cf48cfff4_75033577.jpg',
      ]
    },
    {
      id: 4,
      name: 'CP BILLIARDS - VĨNH PHÚC',
      location: 'Vĩnh Phúc',
      area: '500m²',
      tables: '12 Bàn',
      specs: '500m² - 12 bàn',
      description: 'Câu lạc bộ Billiards cao cấp nhất với diện tích 500m², 12 bàn billiards hạng sang, thiết kế nội thất luxury đẳng cấp, khu VIP riêng biệt, bar lounge sang trọng, hệ thống âm thanh và ánh sáng chuyên nghiệp.',
      images: [
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/01_z8073225376218_e91ed467670e63c6bd0c9cc4756a7e95_8a777c17.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/02_z8073225385506_c09b9a84849f69abec55407bd9bff618_7880c060.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/03_z8073225395066_8a495e8a740e11a18e668f1c6f214493_c3e12c47.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/04_z8073225396526_5c1ccf094d1a4dee90a78d3ea30696ae_1a4cda5a.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/05_z8073225405573_f9888a73831625a2015556e75aa08a29_a6e27f3f.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/06_z8073225411198_4da13c390a70dee355312c7666489c39_7a26cc6e.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/07_z8073225411466_1e4a36a9e6e16d840dc830e1474e07f9_885bd230.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/08_z8073225426874_b26d765d88c7ee76150a71a7c81ed1dc_553ecc49.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/09_z8073225431374_1f2deb3c85ee46d293a4f0f55faa7e11_40013c5a.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/10_z8073225439242_1ed03511ca825abfc582f380a984ce59_c333f103.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/11_z8073225444764_7423cf91d8a8e7867c6cdaeb0dd79edf_d2b13d75.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/12_z8073225452624_f2abcd6e8797112e5bb63d431c50eca5_6e542121.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/13_z8073225457828_257d16e0c1397bba118628b6753b9659_bbceebd5.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/14_z8073225466462_42db7939f8a22f09b35e583e78db030a_bd027ee4.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/15_z8073225475175_99b11fd30364038a92612c3ccf945568_84e31396.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/16_z8073225481714_87fcb1711f82eff6ebb20155ea84a65e_126bc81d.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/17_z8073225486271_e69fce5e22be9f7d8a2850c8c839c0c3_67857d27.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/18_z8073225486795_484de97abae2399e42c730d6316543d5_de7bc5b6.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/19_z8073225013953_c29ec5b3492fba4f2cb7c74db860d5cc_590e4a20.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/20_z8073225022312_f0616e2e7539617f5f0849bba268a01b_63ddeffc.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/21_z8073225023016_da576a9fc1a3dc75818ad2f7dbb30b7e_6a6e69d7.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/22_z8073225355816_0a7a2e161b63f42439153488550b5067_dfd65bef.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/23_z8073225361530_883956fa22fabaf7f4d06468ad12693f_35a68911.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/24_z8073225047390_7645976d224df3bd2f93e7e4f19938cf_c282c694.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/25_z8073225038778_3a44805cede9059d57a319a63becdc81_08917530.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/26_z8073225036056_f08f5dc372cb3a48b29f2b29a957476c_f8da1b73.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/27_z8073225041781_e9b17a5a7c2e4d1c4a75b9b9e76ae8a6_9965a264.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/28_z8073225370483_6a1753bed39140fa9965aa06a34b07dc_e0391ad8.webp',
        '/web-bia-images/04-projects/cp-billiards-vinh-phuc/29_z8073225065473_174f959817eef44e8cc162e281ab1ecd_ad7e74a3.webp',
      ]
    },
    {
      id: 5,
      name: 'KING BILLIARDS - HÀ NỘI',
      location: 'Hà Nội',
      area: '2200m²',
      tables: '32 Bàn',
      specs: '2200m² - 32 bàn',
      description: 'Dự án Billiards lớn nhất và sang trọng nhất với diện tích 2200m² trên 2 tầng, hơn 30 bàn billiards cao cấp, thiết kế nội thất luxury đẳng cấp quốc tế, khu VIP riêng biệt, bar lounge hạng sang, nhà hàng, phòng karaoke, hệ thống âm thanh và ánh sáng chuyên nghiệp, đỗ xe rộng rãi.',
      images: [
        '/web-bia-images/04-projects/king-billiards-ha-noi/01_z8073227701848_55830a1b2e05ad6fec065739e5461161_2befcb75.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/02_z8073227013035_ae6f3b0cf67ea1e4c6b98ccaa30d67f9_4194c7a2.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/03_z8073227006158_2716acea0f4ca3485f65a79033a47bb4_abe3d844.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/04_z8073227027157_7ba1b552214204159dd9a66e3579f667_4d207b53.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/05_z8073227019849_38637df96649ccb1e331fc1df8f0a466_bf7a05ec.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/06_z8073227057947_c283ffffde1b387b97d2c245972e70d3_e991e2c1.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/07_z8073227035766_f77b52f6083280c29ebc0a904fa9448e_b1ab9896.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/08_z8073227052250_62ad36b049d5dcdc33406bfa99ff0b84_f4170265.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/09_z8073227044188_7eae2a1d2a439d73bee182e2d42cfba4_3badd5db.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/10_z8073227689485_dc496bac08ca3b0caf275d2ad8c42aff_67ada173.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/11_z8073227706616_9c6b32c7b8311aea153171b56bdfe5d7_1f9abf1e.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/12_z8073227706815_d3d53a9eee4094472749017df67a4162_6225e800.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/13_z8073227715107_dafc87c9c73e73243522191e4b5efc5c_4cbe562e.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/14_z8073227722479_54fb6dc9e6672b8cb9217aa70db4bc79_e7258c32.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/15_z8073227733620_c5b21b3aa3994a808a061d652ced16f9_b3184421.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/16_z8073227734587_18b8cbf64638ffd4330522bfe940d55a_a36a01ad.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/17_z8073227742463_aa0acc4dfd2804c46f0a8644e4b0303a_76aae2ba.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/18_z8073227749024_4efa7eac3fc0c5edddd0fe3ead099cd6_928c54b5.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/19_z8073227760243_c3f35c15386411580563a4e338c1b0f3_14d36b5f.jpg',
        '/web-bia-images/04-projects/king-billiards-ha-noi/20_z8073227688130_10ee5bbe7b1b99148e6de29c54c05f36_8b3abf0e.jpg',
      ]
    },
    {
      id: 6,
      name: 'CONIE BILLIARDS - SÀI GÒN',
      location: 'Sài Gòn',
      area: '700m²',
      tables: '23 Bàn',
      specs: '700m² - 23 bàn',
      description: 'Câu lạc bộ Billiards hiện đại tại Sài Gòn với 700m², 23 bàn billiards cao cấp, thiết kế nội thất luxury với neon signage, khu lounge thoải mái, bar sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên dụng, không gian thoáng đãng và hiện đại.',
      images: [
        '/web-bia-images/04-projects/conie-billiards-sai-gon/01_z8073228189182_f7cd7f37a83dc79b182ff6db136d6fe3_9af2c4b9.jpg',
        '/web-bia-images/04-projects/conie-billiards-sai-gon/02_z8073228196177_b628c5444366287c3ec98c5a1d4a6b15_d0ea3766.jpg',
        '/web-bia-images/04-projects/conie-billiards-sai-gon/03_z8073228206547_a6b807997e359b388d65fd2fe7a0c659_a13a93cd.jpg',
        '/web-bia-images/04-projects/conie-billiards-sai-gon/04_z8073228206260_02af2b94dce6f5d6caac1f195a902a39_036c0888.jpg',
        '/web-bia-images/04-projects/conie-billiards-sai-gon/05_z8073228219238_c8b8a0a7f71ca95ac47022713f8e4923_e8d15b1a.jpg',
        '/web-bia-images/04-projects/conie-billiards-sai-gon/06_z8073228223867_0584acc10d46a15055a1cb3bd2da90da_5fdeb75c.jpg',
        '/web-bia-images/04-projects/conie-billiards-sai-gon/07_z8073228237548_dbcd366d608447ca609d88dce2d1e542_4dceac3f.jpg',
        '/web-bia-images/04-projects/conie-billiards-sai-gon/08_z8073228582237_69746053ac949ed6864120c9ef75933f_1364a595.jpg',
        '/web-bia-images/04-projects/conie-billiards-sai-gon/09_z8073228240058_42b505e2b1efa65cba2aa94c25b1209c_f09084ea.jpg',
        '/web-bia-images/04-projects/conie-billiards-sai-gon/10_z8073228218579_440fe1d937b1cfbcdd08ed9fea3f8831_e7433089.jpg',
      ]
    },
    {
      id: 7,
      name: 'TINO BILLIARDS - VĨNH PHÚC',
      location: 'Vĩnh Phúc',
      area: '300m²',
      tables: '10 Bàn',
      specs: '300m² - 10 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế neon signage hiện đại, nội thất luxury kết hợp đen, vàng, xám, 10 bàn billiards hạng sang, khu VIP riêng biệt, bar lounge sang trọng, phòng vệ sinh cao cấp, hệ thống chiếu sáng chuyên nghiệp, không gian hiện đại và thoáng đãng.',
      images: [
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/01_z8073262586764_e3eeca6d7b7e847a7eef21c1db873cba_8a07d18f.jpg',
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/02_z8073262577798_480ff2826376d73e9b2574f02febf9c4_fe497f31.jpg',
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/03_z8073262565506_c0cd1b92e94721e5c506a3f425747c58_e80bf336.jpg',
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/04_z8073262582628_f88f180f23df2a8ef131800cf46f73be_17e856cb.jpg',
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/05_z8073262595561_23ef3f1dcfa7eb58633d57e54e85142c_7c6dd6cd.jpg',
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/06_z8073262596900_4f6bf6c0399f60de405771bcc528859c_e454cfe4.jpg',
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/07_z8073262617313_46bcb9f0a020c2dd30ef9f50fd4669cb_a9c33e48.jpg',
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/08_z8073262609949_469d1581b749cf0ff1fe0538536bee18_0583b7d0.jpg',
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/09_z8073262618548_f232932e526f11bb18d6a2b9712443a4_bf9595a7.jpg',
        '/web-bia-images/04-projects/tino-billiards-vinh-phuc/10_z8073262626008_14471fd6da511ebb294479b2157f7430_546f981d.jpg',
      ]
    },
    {
      id: 8,
      name: 'TH BILLIARDS HN - 2 TẦNG',
      location: 'Hà Nội',
      area: '600m²',
      tables: '20 Bàn',
      specs: '600m² - 20 bàn',
      description: 'Câu lạc bộ Billiards cao cấp trên 2 tầng với thiết kế neon signage hiện đại, nội thất luxury đẳng cấp, 10 bàn billiards hạng sang, khu VIP riêng biệt, bar lounge sang trọng, phòng karaoke VIP, hệ thống chiếu sáng LED chuyên nghiệp, không gian thoáng đãng và hiện đại.',
      images: [
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/01_z8073263006549_84ff69e22feb9d284b9bbba0f94a7d88_44c590ba.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/02_z8073263009178_bbe2a847ec8314f4fb6a2cd2ac9edd22_f0c6d17c.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/03_z8073263018793_28cdc81a4a0f35c6cbbf768037c82df4_c74c9478.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/04_z8073263034581_c5eb2dd31fc7e51bcd3882e809e49248_467354d0.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/05_z8073263040336_5a86b92abc73ca03d5109303d7c709a6_37e1fdde.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/06_z8073263020936_e381d70d7bdc674d25fae12b4b1a09fe_5d83b13c.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/07_z8073264486720_a726283044d9319718a24ca2e34df7f5_2085a4f1.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/08_z8073264505693_ce2fbd1c8858b6c9c207b4816dc82d4a_5c4ddef5.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/09_z8073264506012_4f14ce59360666e34835b6f9d5ae2959_48a1124b.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/10_z8073264521716_237fb28e180bea92b39b70458d11f4a9_2381c772.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/11_z8073264494411_2fe0257c0d4abca80a13ec883dbdcd34_635b7306.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/12_z8073264548168_eccbdfee79fd852bf3bcd7c2e846a600_a1f5f5f8.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/13_z8073264522594_9c990cded69a6b4c39476124a8ba8319_92ef4b24.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/14_z8073264530635_b0a17dca4eb6144323e6fef4334610ad_053b3eb1.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/15_z8073264536569_9107e4da4fcbc335de93aabe94ae96cb_314a927e.jpg',
        '/web-bia-images/04-projects/th-billiards-hn-2-tang/16_z8073264546755_03436c8e5666c02b2bb5e6ae39a5f96d_aec098db.jpg',
      ]
    },
    {
      id: 9,
      name: '247 BILLIARDS - VĨNH PHÚC',
      location: 'Vĩnh Phúc',
      area: '300m²',
      tables: '10 Bàn',
      specs: '300m² - 10 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage đỏ cam nổi bật, nội thất luxury kết hợp xám, đen, trắng, 10 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, không gian thoáng đãng.',
      images: [
        '/web-bia-images/04-projects/247-billiards-vinh-phuc/01_z8073265046210_247516151abf5e2baa85e41d170737fc_e79647c1.jpg',
        '/web-bia-images/04-projects/247-billiards-vinh-phuc/02_z8073265019351_11cce13d9a29353b5a871d2c406ca1a8_62e88156.jpg',
        '/web-bia-images/04-projects/247-billiards-vinh-phuc/03_z8073265024773_9ac320bfca81c0c24f6b0e9562a01031_af4220df.jpg',
        '/web-bia-images/04-projects/247-billiards-vinh-phuc/04_z8073265030543_e0bf5d8ead4d9eb0489dd3d44356cfbf_f02723bd.jpg',
        '/web-bia-images/04-projects/247-billiards-vinh-phuc/05_z8073265037760_756112425a63f580dd3dfa8f7a70c4c4_0aafce34.jpg',
        '/web-bia-images/04-projects/247-billiards-vinh-phuc/06_z8073265057586_c49812ee1661308c10a7700e26844851_07ac7812.jpg',
        '/web-bia-images/04-projects/247-billiards-vinh-phuc/07_z8073265048403_632b2df0c6cd7a0996ecc53b38e080d0_5bf24207.jpg',
      ]
    },
    {
      id: 10,
      name: 'CONNECT BILLIARDS - THÁI NGUYÊN',
      location: 'Thái Nguyên',
      area: '350m²',
      tables: '12 Bàn',
      specs: '350m² - 12 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage đỏ nổi bật, nội thất luxury kết hợp xám, đen, trắng, 12 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, không gian thoáng đãng và hiện đại.',
      images: [
        '/web-bia-images/04-projects/connect-billiards-thai-nguyen/01_z8073265542494_0d19ead024992428c066d3ba2e53d1fc_489b79a5.jpg',
        '/web-bia-images/04-projects/connect-billiards-thai-nguyen/02_z8073265492728_fe8a029ebc2d8f211fbbf26d0025c52f_778d9b43.jpg',
        '/web-bia-images/04-projects/connect-billiards-thai-nguyen/03_z8073265504793_522042dc5092f2490d3ed65625fb17d2_a1645368.jpg',
        '/web-bia-images/04-projects/connect-billiards-thai-nguyen/04_z8073265513738_d22579e31eae1348c614447c4bacf1e9_27a793ff.jpg',
        '/web-bia-images/04-projects/connect-billiards-thai-nguyen/05_z8073265527568_e83f21ff5bc22f658c5053a4bd888c7c_a54a2661.jpg',
        '/web-bia-images/04-projects/connect-billiards-thai-nguyen/06_z8073265522094_a71438f82fb22fe0eff6b50b017abed2_77d9ee9c.jpg',
        '/web-bia-images/04-projects/connect-billiards-thai-nguyen/07_z8073265527866_b44f7a4fa615e0ed25edff4884f08a35_54350825.jpg',
        '/web-bia-images/04-projects/connect-billiards-thai-nguyen/08_z8073265544166_4b2489a1e60e3f6e54c042c0e4ade712_352027f6.jpg',
      ]
    },
    {
      id: 11,
      name: '88 BILLIARDS - VĨNH PHÚC',
      location: 'Vĩnh Phúc',
      area: '260m²',
      tables: '9 Bàn',
      specs: '260m² - 9 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage nổi bật, nội thất luxury kết hợp xám, đen, trắng, 9 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, không gian thoáng đãng.',
      images: [
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/01_z8073265901595_7b1a42cce34473088e03dd0ec86259f2_84e84079.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/02_z8073265902865_af35eeaf73f73dcde40eb475c51bd963_13015060.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/03_z8073265908727_2ca883739b77f28699e2d63f548decc2_4b41083d.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/04_z8073265915478_b465cff6dd60317b61e8c0a4e7cb0263_031ef76d.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/05_z8073265928071_878fcbcf5c9512420d0debfba03114e6_37dbef61.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/06_z8073265936289_e78de2a1cc046c3e14439af55d7c8d4f_c095db25.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/07_z8073265941384_b372fd9982bf4e761caeb1106bbf7423_afbb1cb7.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/08_z8073265895199_88d39c115d3e23ea9710f4e1fbf25b20_3aabf9b6.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/09_z8073265948830_6107efffff6e0e15b18388b9521c8de5_9e3f3d06.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/10_z8073265952452_34cbf8cd2ccfeeed1f2f46165ad490f1_02c7ee66.jpg',
        '/web-bia-images/04-projects/88-billiards-vinh-phuc/11_z8073265957348_b2f3c55abe534b49ab99fcbb2144fed8_feb4bae5.jpg',
      ]
    },
    {
      id: 12,
      name: 'PN BILLIARDS - HÀ NAM',
      location: 'Hà Nam',
      area: '160m²',
      tables: '6 Bàn',
      specs: '160m² - 6 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage nổi bật, nội thất luxury kết hợp xám, đen, trắng, 6 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, không gian thoáng đãng.',
      images: [
        '/web-bia-images/04-projects/pn-billiards-ha-nam/01_z8073266324669_debe5e42b4a337e15dbe3c76d003f7d9_ac1d8d57.jpg',
        '/web-bia-images/04-projects/pn-billiards-ha-nam/02_z8073266334325_897c5e99402cc81e1455fb8ba2566bd2_22c0a37a.jpg',
        '/web-bia-images/04-projects/pn-billiards-ha-nam/03_z8073266329493_2606fc0817b539d16a03fed8264120e7_71ea5427.jpg',
        '/web-bia-images/04-projects/pn-billiards-ha-nam/04_z8073266340731_214567693e7256c4eb021c5f8fbeb7aa_a88d4ebf.jpg',
        '/web-bia-images/04-projects/pn-billiards-ha-nam/05_z8073266351152_ba1711c6b3986c463e7ed7c3186674aa_fd45df23.jpg',
      ]
    },
    {
      id: 13,
      name: 'NGỌ BILLIARDS - SÓC SƠN',
      location: 'Sóc Sơn',
      area: '300m²',
      tables: '10 Bàn',
      specs: '300m² - 10 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage xanh dương nổi bật, nội thất luxury kết hợp xám, đen, trắng, 10 bàn billiards Queen hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, không gian thoáng đãng.',
      images: [
        '/web-bia-images/04-projects/ngo-billiards-soc-son/01_z8073266878317_0bea8dd6bfb01639a93fb4821c3bfac3_c0972349.jpg',
        '/web-bia-images/04-projects/ngo-billiards-soc-son/02_z8073266890055_9df15c3c8f16b397883c86142043d3e8_b08e23be.jpg',
        '/web-bia-images/04-projects/ngo-billiards-soc-son/03_z8073266898696_a737d528ab8724d6cd8f8101100d313a_47a8e5ca.jpg',
        '/web-bia-images/04-projects/ngo-billiards-soc-son/04_z8073266901492_7d49c4f85932cc58e9e5c40ada3980a9_a24572a7.jpg',
        '/web-bia-images/04-projects/ngo-billiards-soc-son/05_z8073266908567_d1a2e1e5cf5d5877b8dcd1f8c7c5712c_6d35b686.jpg',
      ]
    },
    {
      id: 14,
      name: 'SAM BILLIARDS - VĨNH PHÚC',
      location: 'Vĩnh Phúc',
      area: '180m²',
      tables: '7 Bàn',
      specs: '180m² - 7 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage đỏ nổi bật, nội thất luxury kết hợp xám, đen, trắng, 7 bàn billiards Apollo hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, artwork độc đáo, không gian thoáng đãng.',
      images: [
        '/web-bia-images/04-projects/sam-billiards-vinh-phuc/01_z8073267318353_cc3efaf37fc79e89e2f7ffe5342ece84_d869647b.jpg',
        '/web-bia-images/04-projects/sam-billiards-vinh-phuc/02_z8073267323050_1a16ec212465c60e845dfb76b68d271b_559ba13e.jpg',
        '/web-bia-images/04-projects/sam-billiards-vinh-phuc/03_z8073267332516_bdaa71fbd4bebb49b64ca741969af78d_3786aede.jpg',
        '/web-bia-images/04-projects/sam-billiards-vinh-phuc/04_z8073267342889_95805560d2e520d789a683f47b79917a_f048c7a2.jpg',
        '/web-bia-images/04-projects/sam-billiards-vinh-phuc/05_z8073267344374_1fc4ea2f801f3922aceb47e795c8a994_30dd0db0.jpg',
        '/web-bia-images/04-projects/sam-billiards-vinh-phuc/06_z8073267356847_0041adf405724946c95aaf40464b5105_4e13ac54.jpg',
        '/web-bia-images/04-projects/sam-billiards-vinh-phuc/07_z8073267364706_19e4834306268a67e75cef5800bef493_f55acb3d.jpg',
        '/web-bia-images/04-projects/sam-billiards-vinh-phuc/08_z8073267369584_02769d75065d741399db8923429fde62_1fa4fbe9.jpg',
        '/web-bia-images/04-projects/sam-billiards-vinh-phuc/09_3336f019-776e-46e8-8c40-003afff3fd70_507c8938.jpg',
      ]
    },
    {
      id: 15,
      name: 'SHINNO BILLIARDS - HÀ NAM',
      location: 'Hà Nam',
      area: '200m²',
      tables: '8 Bàn',
      specs: '200m² - 8 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage vàng/cam nổi bật, nội thất luxury kết hợp đen, xám, trắng, 8 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp với đèn treo trang trí, artwork độc đáo, không gian thoáng đãng với cây xanh trang trí.',
      images: [
        '/web-bia-images/04-projects/shinno-billiards-ha-nam/01_z8073267749963_f33c9ffd807985538aa939d256dac42f_b07eba9b.jpg',
        '/web-bia-images/04-projects/shinno-billiards-ha-nam/02_z8073267759357_73aa769e8c692ca0dd7fbf13dd13ecbd_3140b2ce.jpg',
        '/web-bia-images/04-projects/shinno-billiards-ha-nam/03_z8073267763277_4be21af337164222463548e11e634a64_5f10283c.jpg',
        '/web-bia-images/04-projects/shinno-billiards-ha-nam/04_z8073267773931_5ed23626e01a2a92e4f9fe179b945548_567b714f.jpg',
        '/web-bia-images/04-projects/shinno-billiards-ha-nam/05_a121f263-b870-4f69-bb87-101a31da744b_5eedca2c.jpg',
        '/web-bia-images/04-projects/shinno-billiards-ha-nam/06_z8073267748523_bd0a048a55220ecdf243a30943b3b925_1b0f065e.jpg',
      ]
    },
    {
      id: 16,
      name: 'STAR BILLIARDS - VĨNH PHÚC',
      location: 'Vĩnh Phúc',
      area: '300m²',
      tables: '12 Bàn',
      specs: '300m² - 12 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage xanh lá nổi bật, nội thất luxury kết hợp đen, xám, trắng, 12 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, artwork độc đáo, không gian thoáng đãng và hiện đại.',
      images: [
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/01_z8073268176328_e78364ca14b775e96b32746ae013f0fe_01fb9008.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/02_z8073268177405_12006cc1e128615f9794323862ab0370_76818b31.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/03_z8073268191056_8638dab61ca05a9d803a3219ed6aa12e_2a4f649d.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/04_z8073268161414_e0c40edd67d23bd713cbf65195fb5446_70267cbe.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/05_z8073268160981_eee5cd7e94337c04a4c11b036aff246f_025a7e59.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/06_z8073270012556_7bc174b149c62901c9bff5bff550dabf_28314936.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/07_z8073268198988_71d6a31efbcacb11b23ce07117564dbb_d0ef08c2.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/08_z8073268203696_27d4c674b19ba862baf396e044cff164_1694092c.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/09_z8073268191198_118e5efeeb8bd16014185325565658bf_9f9bb8b7.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/10_z8073268217546_36b097425b7f81a81e14a5db89f5c010_563ecf8a.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/11_z8073268718259_e450ac82fc140d9381edee58845d49d3_38891896.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/12_z8073269094216_273e8f498039c3bc66d4cd7510747f42_9570ec80.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/13_z8073268988515_4cea4709314a877fada442b333cdeb5c_2f4df9f3.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/14_z8073268218777_cd8f26260eaa6c57dd1e6455c79221e6_65422081.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/15_z8073268227143_f04e278de3ddcf0cb3ef95c31fe3f46d_74f8b460.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/16_z8073269057986_ab9f8d78f5f58c650661b42e36d457d9_495c944c.jpg',
        '/web-bia-images/04-projects/star-billiards-vinh-phuc/17_z8073269081113_96a65f56dbe0a6830122e9ab40b4e5d4_2a8d56a1.jpg',
      ]
    },
    {
      id: 17,
      name: 'HL BILLIARDS - BẮC GIANG',
      location: 'Bắc Giang',
      area: '200m²',
      tables: '7 Bàn',
      specs: '200m² - 7 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage vàng/cam nổi bật, nội thất luxury kết hợp đen, xám, cam, 7 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, artwork độc đáo, không gian thoáng đãng và hiện đại.',
      images: [
        '/web-bia-images/04-projects/hl-billiards-bac-giang/01_z8073268620324_e19c2e4ad62b34934983d41eec747fba_3d90ecfa.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/02_z8073268630817_19bcd081df3f62d110fe32b5805321cc_01ec2854.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/03_z8073268617925_73b54503586feb6df703d241b4bbac40_56c87dd7.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/04_z8073268634567_b1ddde35d6a93bc6db4f79d58a15cdb4_b0a40179.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/05_z8073268648830_fa9d87222ed31ea404dc462b57b9121c_1bc294c8.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/06_z8073268650546_87eb0023bde51d5e3768fe34914aa5d1_50461f52.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/07_z8073268595716_5e67dcf848eb4042f0dc49a5000f4428_ef778639.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/08_z8073268660632_04ad1c9e69bd3eb856bba337c818fa5c_a96ad016.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/09_z8073268607728_4ad975ec2afe826dcd26c4e35f1c8fff_ecf25de4.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/10_z8073268668208_fe3f2a290b3ce8d801b2661941d042ad_6ee7d99c.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/11_z8073268675504_845578df1ca1a607c77a29f8a6022e57_4157cf8c.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/12_z8073268683867_1bbd086deba316cec9bc214e68727240_91e6caf9.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/13_z8073268687031_147fb8e81b814d0a1afbde8409c30735_692d1080.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/14_z8073268696200_c6c582dcc5d754de07cf3964ddb0aa82_5cfc4bde.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/15_z8073268612873_1e32806681c87c31fbe7ca27731c2cde_adb9d038.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/16_z8073268704920_a73b80f5ac677e4a44ee52698b3eb3fb_f11e7b06.jpg',
        '/web-bia-images/04-projects/hl-billiards-bac-giang/17_z8073268710705_7a24d473d8fa973bb660232d99d8e4b8_5870d96f.jpg',
      ]
    },
    {
      id: 18,
      name: 'ROBIN BILLIARDS + CAFE',
      location: 'Hà Nội',
      area: '1000m²',
      tables: '16 Bàn',
      specs: '1000m² - 16 bàn',
      description: 'Dự án Billiards + Cafe cao cấp với diện tích 1000m², kết hợp 16 bàn billiards hạng sang, cafe sang trọng, thiết kế nội thất luxury đẳng cấp, khu VIP riêng biệt, bar lounge hạng sang, phòng meeting, hệ thống âm thanh và ánh sáng chuyên nghiệp, không gian hiện đại và thoáng đãng.',
      images: [
        '/web-bia-images/04-projects/robin-billiards-cafe/01_z8073269129312_0934a2c630fd4dd5d66cfe4ff2cd79ed_5765ae59.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/02_z8073269094511_15498e75b2f0274b73259f13a4be0cb4_6cf32578.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/03_z8073269113030_96d81c43a67f2949be56489744f4ad5d_d5638680.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/04_z8073269103135_e4c52da766f5634475e234d74cfce30a_ca141d3d.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/05_z8073269122966_48a691f058a512acee0161064ae7fb42_ae1917ff.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/06_1_441624bc.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/07_z8073269119344_24a10af24d8ad850ceb5692369d04db9_9b8716d4.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/08_z8073269137461_9eda8a2a2dd9663256c63a796366ebfc_53989f5e.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/09_z8073269165363_05f6379f92add885b37670b39990eeae_2b5b84fd.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/10_z8073269151033_1785b34f5b26e1ef87103e89d67c50c5_4cde3e30.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/11_z8073269168356_b9543d7cc0a10604c36be9d6cc503835_dc34aa08.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/12_z8073269176466_00c019620010ab7269975b910d8af580_59691bb2.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/13_z8073269182066_6c75e5834b27901cf8b2acff1fb5bb48_32042518.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/14_z8073269199658_43b83fd41c737a9fd986b0906e08bff1_63445178.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/15_z8073269174453_598cb073abc037d7cfc3e8f7df48d155_ee3e6832.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/16_z8073269213658_f5f41271a26f1748da215418e37d49ac_a80eabc8.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/17_z8073269198746_3f9e584a97316bf13cb2200d1a7aaa37_55a0663b.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/18_z8073269207516_4de56dd7ad44b58b5053d44418111f0c_c6e84c5d.jpg',
        '/web-bia-images/04-projects/robin-billiards-cafe/19_z8073269221064_2aa042e5348ddd1dd5c35e4ee9c7f925_de23401a.jpg',
      ]
    },
    {
      id: 19,
      name: 'K5 BILLIARDS - LÀO CAI',
      location: 'Lào Cai',
      area: '300m²',
      tables: '12 Bàn',
      specs: '300m² - 12 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage xanh lá nổi bật, nội thất luxury kết hợp đen, xám, trắng, 12 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp với đèn treo trang trí, artwork độc đáo, không gian thoáng đãng và hiện đại.',
      images: [
        '/web-bia-images/04-projects/k5-billiards-lao-cai/01_z8073269510837_7c80387efb997f6c17484418348a5d22_4ba854f8.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/02_1_c454a1c5.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/03_z8073269500423_d92a00e038e1c13af13f2757438cc401_89120f14.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/04_z8073269568456_0a4a446f6c7e157f23ec3523f7af5391_e653eb59.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/05_z8073269574230_87fd07f94f1afd298d6ce394c7921bf4_e191d458.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/06_z8073269581648_08397d46007502b0ecd52aaac4f6ada8_35ae412e.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/07_z8073269502882_443217fcbd066c85f26cbf07cb581638_c6839a29.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/08_z8073269591242_bd1fac170b12c8ca8b8c6beb09a41369_d6e7619c.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/09_z8073270025541_ecabca9d6ee7948b1929f860ea2720fd_4f788817.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/10_z8073269524156_59c99bfc9cf043141628f0152244a67c_8f25a6ef.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/11_z8073269533502_f12ef88b98e4a7fc88679c6b620d839f_0235ccec.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/12_z8073269545058_9dfa2a7b06b9e7990ce0cff7ff3ebb87_801b9d46.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/13_z8073269547025_473be888610c8cfe089de69b73ed8229_7218409b.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/14_z8073269550282_327f10cd63bb0d6bd2b1b7159e9b3957_58d0010a.jpg',
        '/web-bia-images/04-projects/k5-billiards-lao-cai/15_z8073269558831_5e9b58a4ea71a40a970e26985b70ba66_f45e92d2.jpg',
      ]
    },
    {
      id: 20,
      name: 'GMQ BILLIARDS - HÀ NỘI',
      location: 'Hà Nội',
      area: '450m²',
      tables: '16 Bàn',
      specs: '450m² - 16 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage đỏ/cam nổi bật, nội thất luxury kết hợp đen, xám, đỏ, 16 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, artwork độc đáo, không gian thoáng đãng và hiện đại.',
      images: [
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/01_1(1)_e7c391ad.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/02_1(2)_d638ef3b.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/03_1(4)_93788f1e.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/04_1(5)_24a2b2fb.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/05_1(3)_8966fff4.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/06_1(7)_a96161af.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/07_1(10)_ac8a19fc.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/08_1(6)_2646c7a1.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/09_1(9)_1ba52260.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/10_1(11)_d6a84d74.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/11_1(8)_6ce3cd53.jpg',
        '/web-bia-images/04-projects/gmq-billiards-ha-noi/12_1(12)_1cf68276.jpg',
      ]
    },
    {
      id: 21,
      name: 'A99 BILLIARDS - BẮC NINH',
      location: 'Bắc Ninh',
      area: '1400m²',
      tables: '30 Bàn',
      specs: '1400m² - 30 bàn',
      description: 'Dự án Billiards siêu khủng với diện tích 1400m², kết hợp 30 bàn billiards hạng sang, thiết kế nội thất luxury đẳng cấp, khu VIP riêng biệt, bar lounge hạng sang, phòng meeting, nhà hàng, hệ thống âm thanh và ánh sáng chuyên nghiệp, không gian hiện đại, thoáng đãng và đẳng cấp.',
      images: [
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/01_z8073270439154_c4837c7a73dbae540cbd7ebb699c8608_5159bdc0.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/02_z8073270406146_3617420d6f8afbd3e733f48f9bc4c101_81b6a3d0.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/03_z8073270415679_cc29d8b8fbd8fe75d6a2cfb72e238ab7_0a7488f3.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/04_z8073270422446_554f91a7460c794f8b2de22f9055e6e7_c674dee8.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/05_z8073270429748_b94ba19a865f4e9abcb90986e664e69e_b42396df.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/06_z8073270445090_b0e003df6b78c3d00946651c0552786b_30fd0355.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/07_z8073270447278_6349078e33b825f3712ae2bd0d90ca6e_f064dd74.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/08_z8073270458543_1a8414eb82838b5622de4b91e778eb0a_5fdbad14.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/09_z8073270460912_3077e5e715bbd2592301056ceb595066_e96255d8.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/10_z8073270466231_b3be2685f9f0b23745e9882d98916b4d_b14e6e3a.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/11_z8073270476808_c98a51c45aadc791a3e469da9221fe99_21a54cdf.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/12_z8073270485134_db1539ebeb7ce48f026ba81b8d82ae08_90f6a230.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/13_z8073270493431_e4524d92eae976f447c499b53f64d7ec_8790c44c.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/14_z8073270497242_e9d94328994a33334d20dec2fe3b2a44_a656d9c9.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/15_z8073270500640_be289148c02936a1a8e6598d120e41f1_6f5c0243.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/16_z8073270514343_46fbe378b57c2bade1bcb603392d14dc_8808ec65.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/17_z8073270515684_19d35e64523d93b7fc7fce8c03db2de6_73245da1.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/18_z8073270527822_dbbc9980edc1d4e42b41dd2b920100f6_9c3667a2.jpg',
        '/web-bia-images/04-projects/a99-billiards-bac-ninh/19_z8073270530219_3c20ec6439f90626fd7bc5bbe2580bdc_4b813c48.jpg',
      ]
    },
    {
      id: 22,
      name: 'DỨA DỨA BILLIARDS - LÀO CAI',
      location: 'Lào Cai',
      area: '500m²',
      tables: '15 Bàn',
      specs: '500m² - 15 bàn',
      description: 'Câu lạc bộ Billiards cao cấp với thiết kế hiện đại, neon signage vàng/cam nổi bật, nội thất luxury kết hợp gạch đỏ, đen, xám, 15 bàn billiards hạng sang, bar lounge sang trọng, phòng VIP riêng biệt, hệ thống chiếu sáng LED chuyên nghiệp, artwork độc đáo, không gian thoáng đãng và hiện đại.',
      images: [
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/01_1_ac3f71cd.jpg',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/02_z8073314937859_5efd16e17f61c5187a61d16134d7e383_a6e3a602.webp',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/03_z8073314932015_b6acdf51bed5d14f4d57a84d44357397_8cce4086.webp',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/04_z8073314932845_860282df8643d290f4ed32195e89fc6a_748075bb.webp',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/05_z8073314948870_848ecb119e641267d352b1ec40df3d4c_edc0a2bb.webp',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/06_z8073314958160_ab0f1de754273ec18ac6985bd0f04471_2c75b325.webp',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/07_z8073314962126_96bbd7bda35cfb3ee9dfe3d3445e1695_91b10ce5.webp',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/08_z8073314975256_54741f009b89b73467039e797be9674e_65d332b2.webp',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/09_z8073314922641_b73c42f3ddefe33cc629363286eef33a_1b0111ed.webp',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/10_z8073315187514_921ac2dd8b9b3858fe0eaf6bd76b9a72_db71d61c.webp',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/11_z8073316758408_53ed03df2ce300b9f317aab46c5fb44d_a3429331.jpg',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/12_z8073316737463_df022f863155d74c2148fd15c690e39a_f1c5cac1.jpg',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/13_z8073316756829_1bb7b6ff221ea948072c864c50de74d9_fd99bb43.jpg',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/14_z8073316771689_25a16349fbdd352581e5da6b6f4354b0_e21df434.jpg',
        '/web-bia-images/04-projects/dua-dua-billiards-lao-cai/15_z8073316748531_dd83eed7a6926976c1c445cef914d36f_c1bf52a9.jpg',
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="subtitle text-yellow-600 text-sm mb-4">Dự Án Tiêu Biểu</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Các Câu Lạc Bộ Đã Hoàn Thiện
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Những công trình Billiards sang trọng được thiết kế và thi công bởi HZdesign
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-xl overflow-hidden border-2 border-yellow-600/20 hover:border-yellow-600 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-yellow-600 font-semibold">{project.location}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg border-l-2 border-yellow-600">
                      <p className="text-gray-400 text-sm mb-1">Diện Tích</p>
                      <p className="text-2xl font-bold text-yellow-600">{project.area}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg border-l-2 border-yellow-600">
                      <p className="text-gray-400 text-sm mb-1">Số Bàn</p>
                      <p className="text-2xl font-bold text-yellow-600">{project.tables}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Mô Tả Dự Án</h4>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => {
                        setSelectedProjectId(projects.findIndex(p => p.id === project.id));
                        setSelectedImageIndex(0);
                      }}
                      className="flex-1 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all transform hover:scale-105 font-semibold"
                    >
                      Xem Chi Tiết
                    </button>
                    <button className="flex-1 px-6 py-3 border-2 border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600/10 transition-all font-semibold">
                      Liên Hệ
                    </button>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="space-y-4">
                  <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group" onClick={() => {
                        setSelectedProjectId(projects.findIndex(p => p.id === project.id));
                        setSelectedImageIndex(0);
                      }}>
                    <img 
                      src={project.images[0]} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">Xem {project.images.length} ảnh</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-2 max-h-80 overflow-y-auto">
                    {project.images.map((img, idx) => (
                      <div 
                        key={idx} 
                        className="relative h-16 rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => {
                        setSelectedProjectId(projects.findIndex(p => p.id === project.id));
                        setSelectedImageIndex(idx);
                      }}
                      >
                        <img 
                          src={img} 
                          alt={`${project.name} - ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProjectId !== null && projects[selectedProjectId] && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProjectId(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-600 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Main Image */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={projects[selectedProjectId].images[selectedImageIndex]} 
                alt="Gallery"
                className="w-full h-auto opacity-0 animate-fadeIn"
              />

              {/* Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => setSelectedImageIndex(selectedImageIndex === 0 ? projects[selectedProjectId].images.length - 1 : selectedImageIndex - 1)}
                  className="bg-yellow-600/80 hover:bg-yellow-600 text-white p-2 rounded-full transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => setSelectedImageIndex(selectedImageIndex === projects[selectedProjectId].images.length - 1 ? 0 : selectedImageIndex + 1)}
                  className="bg-yellow-600/80 hover:bg-yellow-600 text-white p-2 rounded-full transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {selectedImageIndex + 1} / {projects[selectedProjectId].images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {projects[selectedProjectId].images.map((img, idx) => (
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
