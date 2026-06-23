alert("INVESTORS JS LOADED");

document.addEventListener("DOMContentLoaded", () => {
  const investorForm = document.getElementById("investor-form");

  if (!investorForm) {
    alert("FORM NOT FOUND");
    return;
  }

  alert("FORM FOUND");

  investorForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    alert("SUBMIT INTERCEPTED");

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
        alert("SUCCESS");
        window.location.href = "/investors/investor-thankyou.html";
      } else {
        alert("FORMSPREE ERROR");
      }
    } catch (error) {
      alert("NETWORK ERROR");
      console.error(error);
    }
  });
});