-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb2+deb7u8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 30, 2019 at 07:54 PM
-- Server version: 1.0.31
-- PHP Version: 5.4.45-0+deb7u14

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ashot`
--

-- --------------------------------------------------------

--
-- Table structure for table `gallery_category`
--

CREATE TABLE IF NOT EXISTS `gallery_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seq_number` mediumint(10) DEFAULT NULL,
  `status` smallint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `slug` (`slug`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `gallery_category`
--

INSERT INTO `gallery_category` (`id`, `name`, `slug`, `seq_number`, `status`) VALUES
(2, 'Портреты', 'portraits', 1, 1),
(3, 'Пейзажи', 'landscapes', 3, 1),
(7, 'Плакаты', 'cinemaplacard', 0, 0),
(11, 'Киев', 'kiev', 5, 0),
(22, 'Разное', 'sundry', 4, 1),
(23, 'Улыбайтесь, Господа!', 'smile', 6, 1),
(25, 'Героям слава!', 'heroes_glory', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `gallery_img`
--

CREATE TABLE IF NOT EXISTS `gallery_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gallery_category_id` mediumint(10) NOT NULL,
  `seq_number` mediumint(10) NOT NULL,
  `path` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year` mediumint(4) DEFAULT NULL,
  `material` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sell_price` smallint(6) DEFAULT NULL,
  `status` smallint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `gallery_category_id` (`gallery_category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=282 ;

--
-- Dumping data for table `gallery_img`
--

INSERT INTO `gallery_img` (`id`, `gallery_category_id`, `seq_number`, `path`, `name`, `year`, `material`, `size`, `comment`, `sell_price`, `status`) VALUES
(1, 2, 47, 'portrets/aliona.jpg', 'Портрет Алёны', 2010, 'Картон, масло', '40x50', 'частная коллекция', 0, 1),
(2, 2, 49, 'portrets/anzhela.jpg', 'Портрет Анжелы', 2010, 'Картон, масло', '40x50', 'частная коллекция', 0, 1),
(3, 2, 9, 'portrets/grischenko.jpg', 'Портрет министра иностранных дел Украины К.Грищенко', 2011, 'Масло, холст', '60x80', 'частная коллекция', 0, 1),
(4, 2, 150, 'portrets/d_medvedev_v_putin.jpg', 'Д. Медведев и В. Путин на прогулке', 2010, 'Масло, холст', '78x55', 'частная коллекция', 0, 0),
(5, 2, 22, 'portrets/boyko_n_i.jpg', 'Портрет профессора Бойко Н.И.', 2010, 'Масло, холст', '40x55', 'частная коллекция', 0, 1),
(6, 2, 55, 'portrets/dlya_restorana_napoleon_1993_99x178_sm_inet.jpg', 'Наполеон для ресторана Наполеон, (фрагмент)', 1993, 'холст, масло', '99x178', '', 0, 1),
(7, 2, 18, 'portrets/aleksey_dronov.jpg', 'Портрет профессора, д.м.н. Алексея Дронова', 2010, 'Масло, холст', '45x60', 'частная коллекция', 0, 1),
(11, 7, 25, 'cinemaplacard/kino1.jpg', 'Человек-невидимка', 1987, '', '', '', 0, 1),
(12, 7, 23, 'cinemaplacard/kino2.jpg', 'kino2.jpg', 1987, '', '', '', 0, 1),
(13, 7, 26, 'cinemaplacard/kino3.jpg', 'kino3.jpg', 1989, '', '', '', 0, 1),
(14, 7, 27, 'cinemaplacard/kino4.jpg', 'kino4.jpg', 1989, '', '', '', 0, 1),
(15, 7, 21, 'cinemaplacard/kino5.jpg', 'kino5.jpg', 1988, '', '', '', 0, 1),
(16, 7, 28, 'cinemaplacard/kino6.jpg', 'kino6.jpg', 1988, '', '', '', 0, 1),
(17, 7, 9, 'cinemaplacard/kino7.jpg', 'kino7.jpg', 1989, '', '', '', 0, 1),
(18, 7, 13, 'cinemaplacard/kino8.jpg', 'kino8.jpg', 1989, '', '', '', 0, 1),
(19, 7, 7, 'cinemaplacard/kino9.jpg', 'kino9.jpg', 1989, '', '', '', 0, 1),
(20, 7, 8, 'cinemaplacard/kino10.jpg', 'kino10.jpg', 1989, '', '', '', 0, 1),
(21, 7, 10, 'cinemaplacard/kino11.jpg', 'kino11.jpg', 1978, '', '', '', 0, 1),
(22, 7, 11, 'cinemaplacard/kino12.jpg', 'kino12.jpg', 1978, '', '', '', 0, 1),
(23, 7, 12, 'cinemaplacard/kino13.jpg', 'kino13.jpg', 1978, '', '', '', 0, 1),
(24, 7, 14, 'cinemaplacard/kino14.jpg', 'kino14.jpg', 1978, '', '', '', 0, 1),
(25, 7, 15, 'cinemaplacard/kino15.jpg', 'kino15.jpg', 1979, '', '', '', 0, 1),
(26, 7, 16, 'cinemaplacard/kino16.jpg', 'kino16.jpg', 1979, '', '', '', 0, 1),
(27, 7, 17, 'cinemaplacard/kino17.jpg', 'kino17.jpg', 1979, '', '', '', 0, 1),
(28, 7, 18, 'cinemaplacard/kino18.jpg', 'kino18.jpg', 1980, '', '', '', 0, 1),
(29, 7, 19, 'cinemaplacard/kino19.jpg', 'kino19.jpg', 1980, '', '', '', 0, 1),
(30, 7, 3, 'cinemaplacard/kino20.jpg', 'kino20.jpg', 1980, '', '', '', 0, 1),
(31, 7, 1, 'cinemaplacard/kino21.jpg', 'kino21.jpg', 1981, '', '', '', 0, 1),
(32, 7, 20, 'cinemaplacard/kino22.jpg', 'kino22.jpg', 1981, '', '', '', 0, 1),
(33, 7, 6, 'cinemaplacard/kino23.jpg', 'kino23.jpg', 1981, '', '', '', 0, 1),
(34, 7, 2, 'cinemaplacard/kino24.jpg', 'kino24.jpg', 1981, '', '', '', 0, 1),
(35, 7, 4, 'cinemaplacard/kino25.jpg', 'kino25.jpg', 1981, '', '', '', 0, 1),
(36, 7, 5, 'cinemaplacard/kino26.jpg', 'kino26.jpg', 1981, '', '', '', 0, 1),
(37, 7, 22, 'cinemaplacard/kino27.jpg', 'kino27.jpg', 1982, '', '', '', 0, 1),
(38, 7, 24, 'cinemaplacard/kino28.jpg', 'kino28.jpg', 1982, '', '', '', 0, 1),
(39, 3, 38, 'landscapes/araratskaja_dolina_001.jpg', 'Араратская долина', 2011, 'Масло, холст', '50x70', '', 2400, 1),
(40, 11, 5, 'kiev/005.jpg', '005.jpg', 0, '', '', '', 0, 1),
(41, 11, 6, 'kiev/006.jpg', '006.jpg', 0, '', '', '', 0, 1),
(42, 11, 8, 'kiev/008.jpg', '008.jpg', 0, '', '', '', 0, 1),
(43, 11, 9, 'kiev/009.jpg', '009.jpg', 0, '', '', '', 0, 1),
(44, 11, 19, 'kiev/019.jpg', '019.jpg', 0, '', '', '', 0, 1),
(45, 11, 21, 'kiev/021.jpg', '021.jpg', 0, '', '', '', 0, 1),
(46, 11, 22, 'kiev/022.jpg', '022.jpg', 0, '', '', '', 0, 1),
(47, 3, 10, 'landscapes/ararat_v_zakate_001.jpg', 'Араратская долина  на закате', 2011, 'Масло, картон', '30x40', '', 2000, 1),
(74, 2, 51, 'portrets/bregvadze_2006_66x80_sm_inet.jpg', 'Нани Брегвадзе', 2006, 'холст, масло', '66x80', '', 0, 1),
(75, 2, 5, 'portrets/julija timoshenko.jpg', 'Портрет Юлии Тимошенко', 2010, 'Масло, холст', '80x100', 'частная коллекция', 0, 0),
(76, 2, 29, 'portrets/litkovskiy_artem.jpg', 'Портрет мальчика в русской военной форме', 2011, 'Масло, холст', '50x70', 'частная коллекция', 0, 1),
(77, 2, 97, 'portrets/zhurba_2015_74x90_sm_inet.jpg', 'Семья Журба', 2015, 'холст, масло', '74x90', '', 0, 1),
(78, 2, 4, 'portrets/litvin_v.jpg', 'Литвин В.М.', 2010, 'Масло, холст', '50x60', '', 0, 1),
(79, 2, 20, 'portrets/maksimenko_g_d.jpg', 'Максименко Г.Д.', 2011, 'Масло, холст', '50x65', 'частная коллекция', 0, 1),
(80, 2, 130, 'portrets/medvedev_d.jpg', 'Портрет Дмитрия Медведева', 2011, 'Масло, холст', '60x85', 'частная коллекция', 0, 0),
(81, 2, 120, 'portrets/medvedev_d_01.jpg', 'Портрет Дмитрия Медведева', 2011, 'Масло, холст', '66x100', 'частная коллекция', 0, 0),
(82, 2, 54, 'portrets/dlya_restorana_napoleon_1993_fragment_inet.jpg', 'Наполеон для ресторана Наполеон (фрагмент)', 1993, 'холст, масло', '99x178', '', 0, 1),
(83, 2, 24, 'portrets/pedachenko_g.jpg', 'Портрет д.м.н, профессора Е.Г. Педаченко', 2010, 'Масло, холст', '50x70', 'частная коллекция', 0, 1),
(84, 2, 30, 'portrets/pinchuk_v_01.jpg', 'Пинчук Виктор', 2010, 'Масло, холст', '100x61', '', 0, 1),
(85, 2, 25, 'portrets/pirogov_a_v.jpg', 'Портрет академика АМН Украины, профессора В.А.Пирогова', 2010, 'Масло, холст', '70x100', 'частная коллекция', 0, 1),
(86, 2, 11, 'portrets/pliusch_i.jpg', 'Плющ И.С.', 2010, 'Масло, холст', '50x70', '', 0, 1),
(87, 2, 50, 'portrets/posle_poleta.jpg', 'После полета. Слава Дерябин', 2011, 'Масло, холст', '65x55', 'частная коллекция', 0, 1),
(88, 2, 10, 'portrets/prisiazhniuk_v.jpg', 'Министр АПК Украины Присяжнюк Ю.А.', 2010, 'Масло, холст', '40x50', 'коллекция МинАгроПрома', 0, 1),
(89, 2, 140, 'portrets/putin_v.jpg', 'Владимир Путин', 2009, 'Масло, холст', '45x65', 'частная коллекция', 0, 0),
(90, 2, 41, 'portrets/reznichek_b_i.jpg', 'Портрет Резниченко Б.И.', 2011, 'Масло, холст', '50x70', 'частная коллекция', 0, 1),
(91, 2, 42, 'portrets/rogovtseva_a.jpg', 'Портрет Н.А. СССР А. Роговцевой', 2004, 'Картон, масло', '40x50', 'частная коллекция', 0, 1),
(92, 2, 43, 'portrets/ryzhkova_lesia.jpg', 'Рыжкова Леся', 2011, 'Масло, холст', '70x120', 'частная коллекция', 0, 1),
(93, 2, 52, 'portrets/valentina_2016-45x60_sm_inet.jpg', 'Валентина', 2014, 'холст, масло', '45x60', '', 0, 1),
(94, 2, 56, 'portrets/dlya_restorana_napoleon_1993_fragment_1_inet.jpg', 'Наполеон для ресторана Наполеон (фрагмент)', 1993, 'холст, масло', '99x178', '', 0, 1),
(95, 2, 70, 'portrets/tabachnik_d_v_01.jpg', 'Д.В.Табачник в парке им.Т.Шевченко', 2010, 'Масло, холст', '60x45', 'частная коллекция', 0, 1),
(96, 2, 26, 'portrets/uvarov_v.jpg', 'Портрет хирурга Уварова В.Ю.', 2011, 'Масло, холст', '50x65', 'частная коллекция', 0, 1),
(97, 2, 170, 'portrets/yanukovich_v.jpg', 'Портрет Виктора Януковича', 2011, 'Масло, холст', '70x90', '', 0, 0),
(102, 3, 2, 'landscapes/odinochnoe_plavanie.jpg', 'Одиночное плавание', 2006, 'Масло, картон', '60x80', 'Частная коллекция. Украина, Ялта', 0, 1),
(103, 3, 74, 'landscapes/kiev_night.jpg', 'Київ вночі', 2001, 'Масло, холст', '50x70', 'Частная коллекция. Украина', 0, 1),
(104, 3, 8, 'landscapes/na_ohote.jpg', 'На охоте - 1', 2001, 'Масло, картон', '10x11', 'Частная  коллекция. Украина. Киев', 0, 1),
(105, 3, 9, 'landscapes/na_ohote_1.jpg', 'На охоте - 2', 2001, 'Масло, картон', '10x11', 'Частная  коллекция. Украина. Киев', 0, 1),
(106, 3, 7, 'landscapes/osen.jpg', 'Осень', 1992, 'Масло, холст', '60x80', 'Частная  коллекция. Украина. Сумы', 0, 1),
(107, 3, 3, 'landscapes/sea_landscape.jpg', 'Морской пейзаж', 2005, 'Масло, холст', '40x50', '', 0, 1),
(108, 3, 41, 'landscapes/spring_ararat.jpg', 'Ранняя весна в Араратской долине', 1994, 'Масло, картон', '35x43', 'Частная  коллекция. Армения. Ереван', 0, 1),
(109, 3, 5, 'landscapes/white_parus.jpg', 'Белеет парус одинокий', 2004, 'Масло, картон', '30x40', 'Частная  коллекция. Украина', 0, 1),
(110, 3, 4, 'landscapes/yalta_port.jpg', 'Ялтинский порт', 2001, 'Масло, холст', '40x50', 'Частная  коллекция. Украина. Ялта', 0, 1),
(111, 3, 6, 'landscapes/red_zakat.jpg', 'Полнолуние', 2005, 'Масло, холст', '30x90', 'Частная коллекция. Армения', 0, 1),
(112, 22, 1, 'sundry/aplodismenty.jpg', 'Аплодисменты - 1', 2005, 'Масло, холст', '50x60', 'Частная коллекция. Россия', 0, 1),
(113, 22, 2, 'sundry/aplodismenty_1.jpg', 'Аплодисменты - 2', 2006, 'Масло, холст', '50x60', 'Частная коллекция. Россия', 0, 1),
(114, 22, 5, 'sundry/dance_venera.jpg', 'Танец Венеры Милосской ', 2000, 'Масло, холст', '50x70', 'Частная коллекция. Армения', 0, 1),
(115, 22, 14, 'sundry/kanary.jpg', 'Отпуск а декабре (Доминиканская республика, Пунта-Кана)', 2001, 'Масло, картон', '61x81', '', 0, 1),
(116, 22, 13, 'sundry/kiss.jpg', 'Поцелуй', 2004, 'Масло, картон', '61x81', 'Частная коллекция. Россия', 0, 1),
(117, 22, 20, 'sundry/sleep_in_red.jpg', 'Спящая на красном', 2007, 'Масло, картон', '61x100', '', 0, 1),
(118, 22, 25, 'sundry/palitra.jpg', 'Палитра', 2005, 'Масло, картон', '26x32', '', 0, 1),
(119, 3, 11, 'landscapes/gory_armenii_01.jpg', 'Май в горах Армении', 1995, 'Масло, картон', '40x50', '', 2000, 1),
(120, 3, 1, 'landscapes/osen_001.jpg', 'Осенний мотив', 2011, 'Масло, холст', '50x60', '', 2700, 1),
(121, 3, 12, 'landscapes/maki_v_polnolunii_001.jpg', 'Маки в полнолунии', 2009, 'Масло, холст', '40x50', '', 4300, 1),
(122, 3, 65, 'landscapes/posle_buri_001.jpg', 'После бури', 2009, 'Масло, холст', '40x50', '', 2700, 1),
(123, 23, 1, 'smile/kiev_1810-2010.jpg', 'Киев. Мариинский парк. 1810-2010гг.', 2011, 'холст, масло', '128x150', '', 0, 1),
(124, 23, 2, 'smile/konets_pokrashenyu.jpg', 'Конец пАкращенню', 2012, 'холст, масло', '126x180', '', 0, 1),
(125, 23, 5, 'smile/ochishenie.jpg', 'Очищение', 2012, 'холст, масло', '65x100', '', 0, 1),
(126, 23, 6, 'smile/podrugi_vv.jpg', 'Подруги ВВ', 2011, 'холст, масло', '59x80', '', 0, 1),
(127, 23, 4, 'smile/pokayanie.jpg', 'Покаяние', 2012, 'холст, масло', '60x70', '', 0, 1),
(128, 23, 8, 'smile/poperedniki.jpg', 'Попередники', 2012, 'холст, масло', '60x72', '', 0, 1),
(129, 23, 10, 'smile/prazdnik_vesny_i_primireniya.jpg', 'Праздник весны и примирения', 2013, 'холст, масло', '130x178', '', 0, 1),
(130, 23, 11, 'smile/sniatie_s_kresta.jpg', 'Снятие с креста', 2013, 'холст, масло', '140x178', '', 0, 1),
(131, 23, 7, 'smile/utrom_maju_buterbrod.jpg', 'пАкращення', 2010, 'холст, масло', '76x95', '', 0, 1),
(132, 23, 3, 'smile/why_me.jpg', 'Вай мэ!', 2013, 'холст, масло', '145x176', '', 0, 1),
(133, 23, 15, 'smile/ptn_pnx (12).jpg', 'Раздел мира диктаторами', 2014, 'холст, масло', '70x98', '', 0, 1),
(134, 23, 16, 'smile/ptn_pnx-(9).jpg', 'Ангел-хранитель', 2014, 'холст, масло', '59x80', '', 0, 1),
(135, 23, 13, 'smile/ptn_pnx-(19).jpg', 'Нарушитель государственной границы', 2013, 'холст, масло', '71x100', '', 0, 1),
(136, 23, 22, 'smile/ptn_pnx-(27).jpg', 'Сон агрессора', 2014, 'холст, масло', '73x100', '', 0, 1),
(137, 23, 14, 'smile/ptn_pnx-(25).jpg', 'Охотники Таежного союза на привале', 2013, 'холст, масло', '128x150', '', 0, 1),
(138, 23, 21, 'smile/ptn_pnx-(16).jpg', 'Похищение крымской пленницы', 2014, 'холст, масло', '79x100', '', 0, 1),
(139, 23, 18, 'smile/ptn_pnx-(5).jpg', 'Встреча на Крымской земле', 2014, 'холст, масло', '99x132', '', 0, 1),
(140, 23, 19, 'smile/ptn_pnx-(33).jpg', 'Молитва прокурорши в знак благодарности в окружении ', 2014, 'холст, масло', '85x114', '', 0, 1),
(141, 23, 17, 'smile/ptn_pnx-(35).jpg', 'Отражение', 2014, 'холст, масло', '66x80', '', 0, 1),
(142, 23, 26, 'smile/ptn_pnx-(2).jpg', 'Иногда один удачный аборт спасет миллионы жизней', 2014, 'холст, масло', '60x98', '', 0, 1),
(143, 23, 12, 'smile/ptn_pnx-(31).jpg', 'Христос изгоняет беса из храма во имя мира', 2014, 'холст, масло', '120x141', '(по заказу Н. Михалькова)', 0, 1),
(144, 23, 20, 'smile/ptn_pnx-(30).jpg', 'Высшее руководство России с удивлением смотрит на Нечто украинского козака, взятого в плен ', 2014, 'холст, масло', '80x147', '', 0, 1),
(145, 23, 23, 'smile/ptn_pnx-(13).jpg', 'Этот человек ведет мир к катастрофе', 2014, 'холст, масло', '70x90', '', 0, 1),
(146, 23, 28, 'smile/ptn_pnx-(11).jpg', 'Ворошиловский стрелок', 2014, 'холст, масло', '66x80', '', 0, 1),
(147, 23, 27, 'smile/ptn_pnx-(22).jpg', 'Миру - мир! Войне - пиписька!', 2014, 'холст, масло', '101x112', '', 0, 1),
(148, 23, 29, 'smile/ptn_pnx-(21).jpg', '- Убей этого карлика, пока он не убил тебя!', 2014, 'холст, масло', '70x107', '', 0, 1),
(149, 23, 31, 'smile/ptn_pnx-(18).jpg', 'Поздравление с Новым 2015 годом - годом Барана', 2014, 'холст, масло', '70x100', '', 0, 1),
(150, 25, 33, 'smile/ptn_pnx-(29).jpg', 'Редкие минуты отдыха с другом', 2014, 'холст, масло', '60x80', '', 0, 1),
(151, 23, 30, 'smile/ptn_pnx-(28).jpg', 'Палач и его жертвы', 2014, 'холст, масло', '78x99', '', 0, 1),
(152, 23, 34, 'smile/ptn_pnx-(15).jpg', 'Молитва за Украину', 2014, 'холст, масло', '74x90', '', 0, 1),
(153, 25, 35, 'smile/ptn_pnx-(26).jpg', 'Борітеся - поборете! Вам Бог помагає!', 2014, 'холст, масло', '38x49', '', 0, 1),
(154, 25, 36, 'smile/ptn_pnx-(7).jpg', 'Слава Украине!', 2014, 'холст, масло', '64x82', '', 0, 1),
(155, 23, 9, 'smile/ptn_pnx-(14).jpg', 'Свидание', 2011, 'холст, масло', '63x97', '', 0, 1),
(156, 2, 57, 'portrets/bryuner_1984_60x80_sm_inet.jpg', 'Юль Брюнер', 1984, 'бумага, акварель', '60x80', '', 0, 1),
(157, 2, 58, 'portrets/gricacueva_2016_60kh80.jpg', 'Мадам Грицацуева', 2016, 'холст, масло', '60x80', '', 0, 1),
(158, 2, 59, 'portrets/poroshenko_2014_74kh90.jpg', 'Молитва за Украину. П. Порошенко', 2014, 'холст, масло', '74x90', '', 0, 1),
(159, 2, 60, 'portrets/professor_rozumenko_2008_45kh49.jpg', 'Портрет д.м.н., профессора Вл. Розуменко', 2008, 'холст, масло', '45x49', '', 0, 1),
(160, 2, 61, 'portrets/rostislav_2011_42kh60.jpg', 'Портрет Ростислава', 2011, 'холст, масло', '42x60', '', 0, 1),
(161, 2, 62, 'portrets/v_zaharchenko_2012_33kh45.jpg', 'Портрет В. Захарченко', 2012, 'холст, масло', '33x45', '', 0, 1),
(162, 2, 63, 'portrets/vl_peliha_2016_40kh60.jpg', 'Портрет Вл. Пелиха', 2016, 'холст, масло', '40x60', '', 0, 1),
(163, 3, 13, 'landscapes/ararat_2000_60kh80_sm_inet.jpg', 'Арарат', 2000, 'холст, масло', '60x80', '', 0, 1),
(164, 3, 14, 'landscapes/ararat_2006_46kh60_sm_inet.jpg', 'Арарат', 2006, 'холст, масло', '46x60', '', 0, 1),
(165, 3, 15, 'landscapes/armeniya_gornyi_peizazh_2004_60kh80_sm_inet.jpg', 'Армения. Горный пейзаж', 2004, 'холст, масло', '60x80', '', 0, 1),
(166, 3, 17, 'landscapes/vesna_v_gorakh_2_60x80_sm_inet.jpg', 'Весна в горах_2', 1995, 'холст, масло', '60x80', '', 0, 1),
(167, 3, 16, 'landscapes/vesennii_aragats_2006_45kh59_sm_inet.jpg', 'Весенний Арагац', 2006, 'холст, масло', '45x59', '', 0, 1),
(168, 3, 19, 'landscapes/vesna_na_aragatse_01_80x80_sm_inet.jpg', 'Весна на Арагаце', 2001, 'холст, масло', '80x80', '', 0, 1),
(169, 3, 24, 'landscapes/iz_serii_armeniya_2007_50kh60_sm_inet.jpg', 'Из серии Армения', 2007, 'холст, масло', '50x60', '', 0, 1),
(170, 3, 25, 'landscapes/krasnye_tuchi_nad_ozerom_sevan_2001_40x60_sm_inet.jpg', 'Красные тучи над озером Севан', 2001, 'холст, масло', '40x60', '', 0, 1),
(171, 3, 30, 'landscapes/ozero_van_1999_50x60_sm_inet.jpg', 'Озеро Ван', 1999, 'холст, масло', '50x60', '', 0, 1),
(172, 3, 31, 'landscapes/ozero_sevan_na_zakate_2001_29kh39_sm_inet.jpg', 'Озеро Севан на закате', 2001, 'холст, масло', '29x39', '', 0, 1),
(173, 3, 28, 'landscapes/oz_sevan_posle_buri_2001_60kh80_sm_inet.jpg', 'Озеро Севан. После бури', 2001, 'холст, масло', '60x80', '', 0, 1),
(174, 3, 29, 'landscapes/ozero_van_1997_60x80_sm_inet.jpg', 'Озеро Ван', 1997, 'холст, масло', '60x80', '', 0, 1),
(175, 3, 32, 'landscapes/ozero_sevan_2002_25kh45_sm_inet.jpg', 'Озеро Севан_1', 2002, 'холст, масло', '25x45', '', 0, 1),
(176, 3, 33, 'landscapes/ozero_sevan_2003_40x60_sm_inet.jpg', 'Озеро Севан_2', 2003, 'холст, масло', '40x60', '', 0, 1),
(177, 3, 34, 'landscapes/osen_v_gorakh_armenii__1996_30x50_sm_inet.jpg', 'Осень в горах Армении', 1996, 'холст, масло', '30x50', '', 0, 1),
(178, 3, 20, 'landscapes/vecher_ararat_2006_51kh62_sm_inet.jpg', 'Вечерний Арарат', 2006, 'холст, масло', '51x62', '', 0, 1),
(179, 3, 21, 'landscapes/vecher_sevan_2005_44kh59_sm_inet.jpg', 'Вечерний Севан', 2005, 'холст, масло', '44x59', '', 0, 1),
(180, 3, 22, 'landscapes/gornoe_ozero_zima_2007_50kh70_sm_inet.jpg', 'Горное озеро зимой', 2007, 'холст, масло', '50x70', '', 0, 1),
(181, 3, 23, 'landscapes/gory_peizazh_2001_40x50_sm_inet.jpg', 'Горный пейзаж', 2001, 'холст, масло', '40x50', '', 0, 1),
(182, 3, 36, 'landscapes/blue_ararat_2001_60kh70.jpg', 'Синий Арарат', 2001, 'холст, масло', '60x70', '', 0, 1),
(183, 3, 26, 'landscapes/krasnyi_zakat_na_ozere_sevan__2007__27x50_sm_(80x150)_inet.jpg', 'Красный закат на озере Севан', 2007, 'холст, масло', '80x150', '', 0, 1),
(184, 3, 27, 'landscapes/krasnyi_ararat_2001_60x70_sm_inet.jpg', 'Красный Арарат', 2001, 'холст, масло', '60x70', '', 0, 1),
(185, 3, 35, 'landscapes/osen_araratskaya_dolina_2001_60kh80_sm_inet.jpg', 'Осень в Араратской долине', 2001, 'холст, масло', '60x80', '', 0, 1),
(186, 3, 37, 'landscapes/tyulpany_araratskaya_dolina__50x70_01_inet.jpg', 'Тюльпаны в Араратской долине', 2001, 'холст, масло', '50x70', '', 0, 1),
(187, 3, 43, 'landscapes/iz_serii_antarktida_2006_45x60_sm_inet.jpg', 'Из серии Антарктида_1', 2006, 'холст, масло', '45x60', '', 0, 1),
(188, 3, 44, 'landscapes/iz_serii_antarktida_2007_35x45_sm_inet.jpg', 'Из серии Антарктида_2', 2007, 'холст, масло', '35x45', '', 0, 1),
(189, 3, 45, 'landscapes/iz_serii_antarktida_2007_40x50_sm_inet.jpg', 'Из серии Антарктида_3', 2007, 'холст, масло', '40x50', '', 0, 1),
(190, 3, 46, 'landscapes/iz_serii_antarktida_2007_50x60_sm_inet.jpg', 'Из серии Антарктида_4', 2007, 'холст, масло', '50x60', '', 0, 1),
(191, 3, 47, 'landscapes/iz_serii_antarktida_2008_70x100_sm_inet.jpg', 'Из серии Антарктида_5', 2008, 'холст, масло', '70x100', '', 0, 1),
(192, 3, 39, 'landscapes/utrennii_ararat_80x80_sm_inet.jpg', 'Утренний Арарат', 2011, 'холст, масло', '80x80', '', 0, 1),
(193, 3, 40, 'landscapes/rannyaya_vesna_v_araratskoi_doline_1994_38x45_sm_inet.jpg', 'Ранняя весна в Араратской долине', 1994, 'холст, масло', '38x45', '', 0, 1),
(194, 3, 42, 'landscapes/tserkov_monastyrskogo_kompleksa_airavank_oz_sevan_armeniya_2003_49kh60_sm_inter.jpg', 'Церковь монастырского комплекса Айраванк. Озеро Севан. Армения', 2003, 'холст, масло', '49x60', '', 0, 1),
(195, 3, 48, 'landscapes/norvegiya-1_63x96_sm.jpg', 'Из серии Норвегия_1', 2011, 'холст, масло', '63x96', '', 0, 1),
(196, 3, 49, 'landscapes/norvegiya-2_2008__60x90_sm_inter.jpg', 'Из серии Норвегия_2', 2008, 'холст, масло', '60x90', '', 0, 1),
(197, 3, 50, 'landscapes/norvegiya-3_2003__71x100_sm_inter.jpg', 'Из серии Норвегия_3', 2003, 'холст, масло', '71x100', '', 0, 1),
(198, 3, 51, 'landscapes/norvegiya-4_2007__74x90_sm_inter.jpg', 'Из серии Норвегия_4', 2007, 'холст, масло', '74x90', '', 0, 1),
(199, 3, 52, 'landscapes/norvegiya-5_2007__71x92_sm_inter.jpg', 'Из серии Норвегия_5', 2007, 'холст, масло', '71x92', '', 0, 1),
(200, 3, 53, 'landscapes/norvegiya-6_2007__70x88_sm_inter.jpg', 'Из серии Норвегия_6', 2007, 'холст, масло', '70x88', '', 0, 1),
(201, 3, 54, 'landscapes/norvegiya-7_2004__70x95_sm_inter.jpg', 'Из серии Норвегия_7', 2004, 'холст, масло', '70x95', '', 0, 1),
(202, 3, 55, 'landscapes/norvegiya-8_2003__61x100_sm_inet.jpg', 'Из серии Норвегия_8', 2003, 'холст, масло', '61x100', '', 0, 1),
(203, 3, 56, 'landscapes/norvegiya-9_2011__55x76_sm_inet.jpg', 'Из серии Норвегия_9', 2011, 'холст, масло', '55x76', '', 0, 1),
(204, 3, 57, 'landscapes/norvegiya-10_2001__53x78_sm_inet.jpg', 'Из серии Норвегия_10', 2001, 'холст, масло', '53x78', '', 0, 1),
(205, 3, 58, 'landscapes/norvegiya-11_2004__56x69_sm_inet.jpg', 'Из серии Норвегия_11', 2004, 'холст, масло', '56x69', '', 0, 1),
(206, 3, 59, 'landscapes/norvegiya-12_2004__50kh_70_sm_inet.jpg', 'Из серии Норвегия_12', 2004, 'холст, масло', '50x70', '', 0, 1),
(207, 3, 60, 'landscapes/norvegiya-13_2011__50kh_61_sm_inet.jpg', 'Из серии Норвегия_13', 2011, 'холст, масло', '50x61', '', 0, 1),
(208, 3, 61, 'landscapes/norvegiya-14_1999__64x80_01_inet.jpg', 'Из серии Норвегия_14', 1999, 'холст, масло', '64x80', '', 0, 1),
(209, 3, 62, 'landscapes/norvegiya-15_2007_33x50_sm.jpg', 'Из серии Норвегия_15', 2007, 'холст, масло', '33x50', '', 0, 1),
(210, 3, 63, 'landscapes/norvegiya-16_2006_45x60_sm.jpg', 'Из серии Норвегия_16', 2006, 'холст, масло', '45x60', '', 0, 1),
(211, 3, 64, 'landscapes/norvegiya-17_2007_40x50_sm.jpg', 'Из серии Норвегия_17', 2007, 'холст, масло', '40x50', '', 0, 1),
(212, 3, 66, 'landscapes/norvegiya-18_2001_45kh60_sm.jpg', 'Из серии Норвегия_18', 2001, 'холст, масло', '45x60', '', 0, 1),
(213, 3, 67, 'landscapes/norvegiya-19_2001_36x48_sm_(90x67).jpg', 'Из серии Норвегия_19', 2001, 'холст, масло', '36x48', '', 0, 1),
(214, 3, 68, 'landscapes/norvegiya-20_2007_47x58_sm_(120x97).jpg', 'Из серии Норвегия_20', 2007, 'холст, масло', '47x58', '', 0, 1),
(215, 3, 69, 'landscapes/norvegiya-21__2007_33x50_sm.jpg', 'Из серии Норвегия_21', 2007, 'холст, масло', '33x50', '', 0, 1),
(216, 3, 70, 'landscapes/bolshaya_kolokolnya_kievo-pecherskoi_lavry_2011_45x60_sm_inet.jpg', 'Большая_колокольня Киево-Печерскои&#774; лавры', 2011, 'холст, масло', '45x60', '', 0, 1),
(217, 3, 71, 'landscapes/vydubetskii_monastyr_kiev_2011_45x60.jpg', 'Выдубецкий монастырь в Киеве', 2011, 'холст, масло', '45x60', '', 0, 1),
(218, 3, 72, 'landscapes/kolokolnya_andreya_pervozvannogo_kiev_2011_45x60.jpg', 'Колокольня_Андрея Первозванного в Киеве', 2011, 'холст, масло', '45x60', '', 0, 1),
(219, 3, 73, 'landscapes/kiev_noch-_2001_53x75_sm_inet.jpg', 'Київ вночі', 2001, 'холст, масло', '53x75', '', 0, 1),
(220, 3, 75, 'landscapes/gornoe_ozero_2006_60kh80_sm_inet.jpg', 'Горное озеро', 2006, 'холст, масло', '60x80', '', 0, 1),
(221, 3, 76, 'landscapes/gornyi_peizazh_2004_50kh60_sm_inet.jpg', 'Горный пейзаж', 2004, 'холст, масло', '50x60', '', 0, 1),
(222, 3, 77, 'landscapes/zakat_na_cherkaschine_2001_50kh60_sm_inet.jpg', 'Закат на Черкащине', 2001, 'холст, масло', '50x60', '', 0, 1),
(223, 3, 78, 'landscapes/karpaty_2001_60x97_sm_inet.jpg', 'Карпаты_1', 2001, 'холст, масло', '60x97', '', 0, 1),
(224, 3, 79, 'landscapes/karpaty_2005_50x70_inet.jpg', 'Карпаты_2', 2005, 'холст, масло', '50x70', '', 0, 1),
(225, 3, 80, 'landscapes/karpaty_2004_50kh68_inet.jpg', 'Карпаты_3', 2004, 'холст, масло', '50x68', '', 0, 1),
(226, 3, 81, 'landscapes/osennie_kraski_karpat_2005_55x98_sm_inet.jpg', 'Осенние краски Карпат', 2005, 'холст, масло', '55x98', '', 0, 1),
(227, 3, 82, 'landscapes/osen_v_karpatakh_2004_60kh80_sm_inet.jpg', 'Осень в Карпатах', 2004, 'холст, масло', '60x80', '', 0, 1),
(228, 3, 83, 'landscapes/leto_1989_150x104_sm_inet.jpg', 'Лето', 1989, 'холст, масло', '150x104', '', 0, 1),
(229, 3, 84, 'landscapes/osen__2001_45x48_sm_(110x103).jpg', 'Осень', 2001, 'холст, масло', '45x48', '', 0, 1),
(230, 3, 85, 'landscapes/morskoi_peizazh_2001_33x45_sm_inet.jpg', 'Морской пейзаж', 2001, 'холст, масло', '33x45', '', 0, 1),
(231, 3, 86, 'landscapes/osennii_peizazh_1996_30x40_sm_inet.jpg', 'Осенний пейзаж', 1996, 'холст, масло', '30x40', '', 0, 1),
(232, 3, 87, 'landscapes/ottepel_2001_29_5x48.jpg', 'Оттепель', 2001, 'холст, масло', '29,5x48', '', 0, 1),
(233, 3, 88, 'landscapes/peizazh_s_derevom_1996_40x50_sm_inet.jpg', 'Пейзаж с деревом', 1996, 'холст, масло', '40x50', '', 0, 1),
(234, 3, 89, 'landscapes/kraski_ukrainy-1_2001_30x45_sm_(80x120)_inet.jpg', 'Из серии Краски Украины_1', 2001, 'холст, масло', '30x45', '', 0, 1),
(235, 3, 90, 'landscapes/kraski_ukrainy-2_2001_30x45_sm_(80x120)_inet.jpg', 'Из серии Краски Украины_2', 2001, 'холст, масло', '30x45', '', 0, 1),
(236, 3, 91, 'landscapes/kraski_ukrainy-3_2001_30x45_sm_(80x120)_inet.jpg', 'Из серии Краски Украины_3', 2001, 'холст, масло', '30x45', '', 0, 1),
(237, 3, 92, 'landscapes/kraski_ukrainy-4_2001_30x45_sm_(80x120)_inet.jpg', 'Из серии Краски Украины_2', 2001, 'холст, масло', '30x45', '', 0, 1),
(238, 3, 94, 'landscapes/_2003_50kh70_sm_inet.jpg', 'Без названия', 2003, 'холст, масло', '50x70', '', 0, 1),
(239, 3, 93, 'landscapes/reka_v_karpatakh_2001_60x80_sm_inet.jpg', 'река в Карпатах', 2001, 'холст, масло', '60x80', '', 0, 1),
(256, 25, 37, 'heroes_glory/ashot_arutyunyan_kozak.jpg', 'Козак', 1999, 'холст, масло', '103x120', 'частная коллекция', NULL, 1),
(257, 25, 38, 'heroes_glory/ashot_arutyunyan_kozaky.jpg', 'Козаки', 2010, 'холст, масло', '50x60', 'частная коллекция', NULL, 1),
(258, 2, 95, 'portrets/mazurenko_nastia.jpg', 'Портрет Анастасии', 2010, 'холст, масло', '70 х 100', 'частная коллекция', NULL, 1),
(259, 2, 96, 'portrets/devochka_s_venkom.jpg', 'Девочка с веночком', 2009, 'холст, масло', '40х50', 'частная коллекция', NULL, 1),
(260, 2, 53, 'portrets/barak_obama.jpg', 'Барак Обама', 2010, 'холст, масло', '50х70', 'частная коллекция', NULL, 1),
(261, 2, 98, 'portrets/Aleksandrova_Tomochka.jpg', 'Томочка', 2011, 'холст, масло', '50х70', 'частная коллекция', NULL, 1),
(262, 3, 99, 'landscapes/landskape_horse.jpg', 'Ветер свободы', 2001, 'холст, масло', '50х60', '', NULL, 1),
(263, 3, 100, 'landscapes/landskape_senokos.jpg', 'Сенокос', 1999, 'холст, масло', '50х70', '', 0, 1),
(264, 22, 103, 'sundry/africa_1.jpg', 'Из серии Африка. Девушка у моря', 2018, 'холст, масло', '60х80', NULL, NULL, 1),
(265, 22, 104, 'sundry/africa_2.jpg', 'Из серии Африка. Девушка', 2018, 'холст, масло', '50х70', NULL, NULL, 1),
(266, 22, 101, 'sundry/flower_1.jpg', 'Букет сирени', 2010, 'холст, масло', '45х55', 'частная коллекция', NULL, 1),
(267, 22, 102, 'sundry/flower_2.jpg', 'Летний букет', 2010, 'холст, масло', '40х60', 'частная коллекция', NULL, 1),
(268, 22, 105, 'sundry/africa_3.jpg', 'Из серии Африка. Зебры', 2015, 'холст, масло', '60х80', NULL, NULL, 1),
(269, 22, 106, 'sundry/sea_1.jpg', 'Девушка с веслом', 2015, 'холст, масло', '62х80', NULL, NULL, 1),
(270, 22, 107, 'sundry/sea_2.jpg', 'Возле бассейна', 2016, 'холст, масло', '', NULL, NULL, 1),
(271, 22, 108, 'sundry/sea_3.jpg', 'Красный зонт', 2016, 'холст, масло', '', NULL, NULL, 1),
(272, 22, 109, 'sundry/sea_4.jpg', 'Полет чаек', 2017, 'холст, масло', '', NULL, NULL, 1),
(273, 22, 110, 'sundry/sea_5.jpg', 'На пирсе', 2016, 'холст, масло', '', NULL, NULL, 1),
(274, 22, 111, 'sundry/sea_6.jpg', 'Знакомство', 2015, 'холст, масло', '70х100', NULL, NULL, 1),
(275, 22, 112, 'sundry/sport_1.jpg', 'Пловчиха', 2017, 'холст, масло', '59х80', NULL, NULL, 1),
(276, 22, 113, 'sundry/sport_2.jpg', 'Футболист', 2017, 'холст, масло', '56,5 х 26,5', NULL, NULL, 1),
(277, 22, 114, 'sundry/sport_3.jpg', 'Гимнаст ', 2018, 'холст, масло', NULL, NULL, NULL, 1),
(278, 22, 115, 'sundry/sport_4.jpg', 'Гимнаст на брусьях', 2018, 'холст, масло', NULL, NULL, NULL, 1),
(279, 22, 116, 'sundry/sport_5.jpg', 'Из серии Гребцы -1-', 2016, 'холст, масло', '70х100', NULL, NULL, 1),
(280, 22, 117, 'sundry/sport_6.jpg', 'Из серии Гребцы -2-', 2017, 'холст, масло', '60х100', NULL, NULL, 1),
(281, 3, 118, '/landscapes/landskape_niva.jpg', 'Золотая нива', 1996, 'холст, масло', NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `text` varchar(350) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
