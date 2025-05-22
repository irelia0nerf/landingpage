import React from 'react';

const Footer = () => (
  <footer style={{ background: '#fff', color: '#bbb', textAlign: 'center', padding: '24px 0', fontSize: 15, borderTop: '1px solid #ececec' }}>
    © {new Date().getFullYear()} FoundLab. Todos os direitos reservados.
  </footer>
);

export default Footer;