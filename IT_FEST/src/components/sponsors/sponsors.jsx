import React, { useEffect, useState } from 'react';
import './sponsorModule.css';

const Partners = () => {
  const [partners, setPartners] = useState({
    sponsors: [],
    generalPartners: [],
    officialPartners: [],
    goldenPartners: [],
    silverPartners: [],
    coOrganizers: []
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://217.151.230.35:199/api/info/sponsor/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setPartners(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div className="partners-container">
        <h2>Наши партнёры</h2>
        <div className="partners-category sponsors">
          <h3>Спонсоры</h3>
          <div className="partners-grid">
            {partners.sponsors && partners.sponsors.map(partner => (
                <img src={partner.logo} alt={partner.name} key={partner.id} />
            ))}
          </div>
        </div>
        <div className="partners-category general-partners">
          <h3>Генеральные партнёры</h3>
          <div className="partners-grid">
            {partners.generalPartners && partners.generalPartners.map(partner => (
                <img src={partner.logo} alt={partner.name} key={partner.id} />
            ))}
          </div>
        </div>
        <div className="partners-category official-partners">
          <h3>Официальные партнёры</h3>
          <div className="partners-grid">
            {partners.officialPartners && partners.officialPartners.map(partner => (
                <img src={partner.logo} alt={partner.name} key={partner.id} />
            ))}
          </div>
        </div>
        <div className="partners-category golden-partners">
          <h3>Золотые партнёры</h3>
          <div className="partners-grid">
            {partners.goldenPartners && partners.goldenPartners.map(partner => (
                <img src={partner.logo} alt={partner.name} key={partner.id} />
            ))}
          </div>
        </div>
        <div className="partners-category silver-partners">
          <h3>Серебряные партнёры</h3>
          <div className="partners-grid">
            {partners.silverPartners && partners.silverPartners.map(partner => (
                <img src={partner.logo} alt={partner.name} key={partner.id} />
            ))}
          </div>
        </div>
        <div className="partners-category co-organizers">
          <h3>Соорганизаторы</h3>
          <div className="partners-grid">
            {partners.coOrganizers && partners.coOrganizers.map(partner => (
                <img src={partner.logo} alt={partner.name} key={partner.id} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Partners;
