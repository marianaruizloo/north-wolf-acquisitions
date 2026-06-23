document.addEventListener("DOMContentLoaded", () => {
  const investorForm = document.getElementById("investor-form");

  if (investorForm) {
    investorForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(investorForm);

      try {
        const response = await fetch("https://formspree.io/f/mbdvlqow", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          window.location.href = "/investors/investor-thankyou.html";
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Network error. Please try again.");
        console.error(error);
      }
    });
  }
});