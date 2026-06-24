document.addEventListener("DOMContentLoaded", () => {
  const investorForm = document.getElementById("investor-form");

  if (investorForm) {
    investorForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(investorForm);

      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbzpk5zwIY4ybAe9uE4yx2Je1MKU_Y0kky_DxN0lZy4RVb3eWxfGz9hhefnOAQ7rsJUmiQ/exec",
          {
            method: "POST",
            body: formData,
            mode: "no-cors"
          }
        );

        window.location.href = "/investors/investor-thankyou.html";

      } catch (error) {
        alert("Network error. Please try again.");
        console.error(error);
      }
    });
  }
});