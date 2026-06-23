// =========================
// TRANSLATOR
// =========================

const translateBtn = document.getElementById("translateBtn");

let language = "en";

if (translateBtn) {
  translateBtn.addEventListener("click", () => {

    const title = document.querySelector(".hero-left h1");
    const subtitle = document.querySelector(".hero-left p");
    const mainButton = document.querySelector(".hero-cta");
    const formTitle = document.querySelector(".form-box h2");
    const submitButton = document.querySelector(".form-box button");

    if (language === "en") {

      title.textContent = "Vende tu casa rápido por efectivo";

      subtitle.textContent =
        "Sin reparaciones. Sin comisiones. Cierra cuando tú quieras.";

      mainButton.textContent = "Recibir mi oferta";

      formTitle.textContent = "Recibe tu oferta en efectivo";

      submitButton.textContent = "Enviar";

      translateBtn.textContent = "EN";

      language = "es";

    } else {

      title.textContent = "Sell your house fast for cash As Is";

      subtitle.textContent =
        "No Repairs. No Realtor Fees. Stress Free Process.";

      mainButton.textContent = "Get My Cash Offer";

      formTitle.textContent = "Get Your Cash Offer";

      submitButton.textContent = "Submit";

      translateBtn.textContent = "ES";

      language = "en";
    }
  });
}

// =========================
// FAQ ACCORDION
// =========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// =========================
// FORMSPREE SUBMISSION
// =========================

const leadForm = document.getElementById("lead-form");

if (leadForm) {

  leadForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(leadForm);

    try {

      const response = await fetch("https://formspree.io/f/mwvzkorj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {

        // Redirect to thank you page
        window.location.href = "thankyou.html";

      } else {

        alert("Something went wrong. Please try again.");

      }

    } catch (error) {

      alert("Network error. Please try again.");

      console.error(error);

    }

  });

}