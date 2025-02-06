document.addEventListener("DOMContentLoaded", function () {
  const modal = document.createElement("div");
  modal.id = "privacy-modal";
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>Zásady ochrany osobních údajů</h2>
      <p>
        Vaše soukromí je pro nás důležité. Osobní údaje jsou chráněny
        a zpracovávány pouze za účelem poskytování našich služeb. Veškeré informace jsou přísně důvěrné a jsou použity pouze v souladu s příslušnými právními předpisy o ochraně osobních údajů. Vaše údaje nebudeme předávat třetím stranám bez vašeho souhlasu a nebudeme je využívat pro marketingové účely bez vašeho výslovného souhlasu.
      </p>
      <p>
         Máte právo požadovat přístup ke svým osobním údajům, jejich opravu nebo výmaz. Pro jakékoli dotazy ohledně zpracování vašich údajů nás nás můžete kontaktovat prostřednictvím kontaktních údajů uvedených na této stránce.
      </p>
      <p>
        Správce osobních údajů: Karolína Šochová, Černokostelecká 30/21, 252 01 Říčany, IČO: 21984581.
      </p>
      <button id="accept-button">Rozumím</button>
    </div>
  `;
  document.body.appendChild(modal);

  const privacyLink = document.getElementById("privacy-link");
  const closeButton = document.querySelector(".close-button");
  const acceptButton = document.getElementById("accept-button");

  privacyLink.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  acceptButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
