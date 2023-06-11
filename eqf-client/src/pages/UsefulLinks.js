import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsefulLinks = () => {
  return (
    <>
      <Container fluid className="mt-5 text-white" >
        <Row className="justify-content-center mt-5">
          <Col md={6} className="text-center ">
            <ul className="">
              <li>
                <Link className="text-white fw-bold" to="https://www.afetbilgi.com/">Afet Bilgi Sistemi</Link>
              </li>
              <li>
                <Link className="text-white fw-bold" to="https://afetcozum.com/">
                  Afet Çözüm - Tüm Yardım Linkleri
                </Link>
              </li>
              <li>
                <Link className="text-white fw-bold" to="https://afetharita.com/en#dvf=%7B%22state%22%3A%7B%22isOpen%22%3Afalse,%22timestamp%22%3A1800000%7D,%22version%22%3A0%7D&hrf=%7B%22state%22%3A%7B%22isOpen%22%3Afalse,%22selectedCategories%22%3A%5B%22barinma%22,%22elektronik%22,%22yiyecek%22,%22saglik%22,%22lojistik%22,%22giyecek%22,%22genel%22,%22guvenlik%22%5D,%22timestamp%22%3A1800000%7D,%22version%22%3A0%7D&mg=%7B%22state%22%3A%7B%22coordinates%22%3A%7B%22lat%22%3A37.5922732%2C%22lng%22%3A36.8989255%7D%2C%22zoom%22%3A8%7D%2C%22version%22%3A0%7D&mtml=%7B%22state%22%3A%7B%22isOpen%22%3Afalse,%22mapType%22%3A%22m%22,%22mapLayers%22%3A%5B%22markers%22,%22heatmap%22%5D%7D,%22version%22%3A0%7D&sf=%7B%22state%22%3A%7B%22isOpen%22%3Afalse,%22selectedCategories%22%3A%5B%22barinma%22,%22elektronik%22,%22yiyecek%22,%22saglik%22,%22lojistik%22,%22giyecek%22,%22genel%22,%22guvenlik%22%5D%7D,%22version%22%3A0%7D">
                  Afet Haritasi
                </Link>
              </li>
              <li>
                <Link className="text-white fw-bold" to="https://twitter.com/ahbap">Ahbap</Link>
              </li>
              <li>
                <Link className="text-white fw-bold" to="https://twitter.com/AFADBaskanlik">
                  T.C. İçişleri Bakanlığı Afet ve Acil Durum Yönetim Başkanlığı
                  (AFAD) Resmi Hesabıdır
                </Link>
              </li>
              <li>
                <Link className="text-white fw-bold" to="https://www.otelz.com/tr/gecmisolsunturkiyem">
                  Ücretsiz Oteller
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UsefulLinks;
