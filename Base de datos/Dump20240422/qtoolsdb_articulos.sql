-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: qtoolsdb
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `costo` double DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `funcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `categoria_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_k4jxtb6wnvegcvghwx24udvnb` (`nombre`),
  KEY `FKji1k64mta8mfwytpi8f57fvrc` (`categoria_id`),
  CONSTRAINT `FKji1k64mta8mfwytpi8f57fvrc` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` VALUES (1,6800,'Distintos tamaños, Placa vibradora ajustable, Manillar ergonómico, Sistema antivibración, Estructura robusta','Su función principal es proporcionar una compactación eficiente del suelo, aumentando su densidad y reduciendo la posibilidad de asentamientos no deseados.','https://alquilotodo.com.ar/images/herramientas/pison.jpg','Pison',3),(2,7500,'Máquina eléctrica de 220Volts 50Hz\nPotencia: 1400 Vatios (Watts)','Para hacer surcos o canaletas en muros','https://www.herramientaseinhell.com.ar/wp-content/uploads/image-21.jpg','Acanaladora',3),(3,6500,'Peso: 6,28 - 8,55 kg\nTamaño 503x250x140 mm','herramienta eléctrica diseñada para realizar tareas de corte en materiales como metal o concreto','https://lobrunosa.com.ar/2500-thickbox_default/amoladora-angular-115mm-g720n-ar-820w.jpg','Amoladora',3),(4,5500,'Función de taladro\nControl de velocidad variable\nAjuste de torque','Herramienta eléctrica portátil diseñada para facilitar el proceso de atornillado y desatornillado','https://http2.mlstatic.com/D_NQ_NP_995784-MLA40777938488_022020-O.webp','Atornilladora',3),(5,4500,'Distintos modelos y capacidades de carga','Herramienta de manipulación de carga diseñada para transportar objetos pesados de un lugar a otro','https://arcencohogar.vtexassets.com/arquivos/ids/269801-800-800?v=637651551889900000&width=800&height=800&aspect=true','Carretilla',1),(6,3500,'Engrapadora 3 en 1: permite 2 tipos diferentes de grapas (curvas - rectas) y 1 de clavos','Herramienta manual diseñada para unir materiales mediante el uso de grampas','https://arcencohogar.vtexassets.com/arquivos/ids/271348-800-800?v=637651561860570000&width=800&height=800&aspect=true','Engrampadora',1),(7,3500,'Distintos modelos y materiales','Facilita el desplazamiento vertical de una persona de manera segura y eficiente','https://www.gardenlife.com.ar/public/images/productos/producto_430_8901.jpg','Escalera',1),(8,2500,'Distintos tamaños y materiales','Herramienta eficaz para dar golpes controlados, esencial para trabajos de construcción','https://pintecord.com.ar/web/image/product.template/21942/image_1024?unique=552cb4a','Martillo',1),(9,5500,'Sistema de ensamblaje seguro, Moviles, Material resistente','Herramienta utilizada para acceder a áreas elevadas, realizar tareas de construcción','https://http2.mlstatic.com/D_NQ_NP_911891-MLA53180466798_012023-O.webp','Andamio grande',2),(10,4500,'Material resistente, Altura regulable','Herramienta para prevenir caídas y brindar un soporte adicional a los trabajadores','https://www.cmeargentina.com/images/meta/meta-800x420-productos-barandas.jpg','Baranda de seguridad',2),(11,3500,'Material resistente, Superficie antideslizante','Proporciona una base segura para los trabajadores que realizan tareas en alturas','https://dcdn.mitiendanube.com/stores/858/640/products/tablon-para-andamio-25-mts1-d7aa3c74cc272a96ec15900665609468-1024-1024.png','Tablón metálico',2),(12,3700,'Línea de vida elástica, Gancho o mosquetón de seguridad','Proporcionar sujeción y seguridad al usuario, evitando caídas y reduciendo el riesgo de lesiones','https://www.nakaoutdoors.com.ar/img/articulos/navaho_bod_croll_fast_imagen1.jpg','Arnés integral',4),(13,3500,'Voltaje de la batería: 14,4-18 V, Flujo luminoso: 1.900 lm, Peso sin batería: 1,6 kg',' Diseñado para proporcionar luz en entornos sin acceso a una fuente de energía eléctrica','https://http2.mlstatic.com/D_NQ_NP_871402-MLA31080327105_062019-O.webp','Reflector',4),(14,6500,'Estructura resistente, Plataforma de carga amplia, Ruedas de alta resistencia','Plataforma diseñada para transportar cargas de hasta 1 tonelada de peso','https://fvstorageprodes.blob.core.windows.net/img/081705/sans1_nm.jpg','Trailer',4),(15,5600,'Gran capacidad del contenedor, Potencia de motor: 5,5HP, Alimentación: 220V 50Hz, Bajo nivel de ruido, Accesorios y boquillas intercambiables, Ruedas y sistema de movilidad.','Estas máquinas están equipadas con motores de alto rendimiento y sistemas de filtrado eficientes para aspirar partículas grandes y pequeñas.','https://www.hidrolimpsrl.com/wp-content/uploads/sites/160/2019/03/t520.jpg','Aspiradora Industrial',3),(16,1300,'Distintas medidas, Mordazas ajustables, Mango ergonómico, Material resistente, Acabado anticorrosión.','Es una herramienta versátil y ajustable que se utiliza para apretar o aflojar tuercas y pernos de diferentes tamaños. ','https://cdn.bpsolucioneselectricas.com.ar/uploads/1607714701_ODA3MiBBIElQLmpwZw==.jpg','Llave Francesa',1),(17,2200,'Ajustabilidad, Materiales resistentes, Cierre seguro, Capacidad de carga, Versatilidad.','Los puntales telescópicos son elementos estructurales diseñados para proporcionar soporte vertical ajustable en construcciones y proyectos de ingeniería. ','https://http2.mlstatic.com/D_NQ_NP_737757-MLA54125822636_032023-O.webp','Puntales Telescópicos',2),(18,6900,'Detecta: metales férreos, metales no férreos, subestructuras de madera, cables eléctricos de alta tensión. Profundidad máx. de detección 120 mm.\n','Su función principal es evitar perforaciones accidentales durante trabajos de construcción, renovación o reparación, asegurando la integridad de las instalaciones hidráulicas.','https://alquilotodo.com.ar/images/herramientas/detector-canerias.jpg','Detector de Cañerías',4),(19,3000,'Voltaje: 3P+T 380V o 2P+T 220V, Largo: 50m (consultar por otras medidas), Incluye chasis con ruedas de desplazamiento, 50 mts de cable','Se utiliza para proporcionar energía eléctrica a equipos y dispositivos que están ubicados a una distancia mayor de la toma de corriente.','https://images.ctfassets.net/j4m9q0fykyy4/2Zhm9Lt8B7OrMgEPHTPIRa/e48e60b58bd6ce650067da3cdadaeca4/carrete-alargador-de-cable-50m-negro-P-2462582-4519195_1.jpg','Alargue prolongador',4),(20,6800,'Doble aislamiento, Velocidad Constante, Recolección de polvo, Diámetro: 125mm (5\"), Potencia: 1400W, 10000 RMP, Peso 4,3Kg.\n','Su función principal es facilitar la creación de juntas de expansión, cortes para la instalación de canalizaciones o cualquier tarea que requiera seccionar el concreto de manera controlada.','https://www.corralonsanjavier.com.ar/3641-large_default/cortadora-de-concreto-manual-115mm-dp.jpg','Cortadora de concreto',3),(21,7500,'Potencia máxima 5,5 HP, Tipo de combustible: Nafta, Caudal máximo: 30000L/h, Altura máxima de succión 8m, Diámetro de salida 2\".\n','Su función principal es generar un flujo constante, facilitando la transferencia de líquidos desde un área de menor elevación hacia otra más elevada.','https://www.sumiagrocbasa.com.ar/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/o/bomba-de-agua-1-hp-centrifuga-elevadora-leo-acm65-d_nq_np_656686-mla31114527736_062019-f.jpg','Bomba de agua',4);
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-22 19:37:56
