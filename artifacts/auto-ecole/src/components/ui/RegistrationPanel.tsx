import React from "react";

export const RegistrationPanel: React.FC = () => (
  <section className="registration-panel">
    <h2>Dossier d'inscription</h2>
    <ul className="list-disc list-inside space-y-1">
      <li><a href="/files/inscription-form.pdf" target="_blank" rel="noopener">Formulaire d'inscription (PDF)</a></li>
      <li><a href="/files/conditions.pdf" target="_blank" rel="noopener">Conditions Générales</a></li>
      <li><a href="/files/paiement.pdf" target="_blank" rel="noopener">Modalités de paiement</a></li>
    </ul>
  </section>
);
