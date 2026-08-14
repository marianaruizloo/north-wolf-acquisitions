document.addEventListener("DOMContentLoaded", () => {

  const investorForm = document.getElementById("investor-form");

  if (investorForm) {

    investorForm.addEventListener("submit", async (e) => {

      e.preventDefault();

      const formData = new FormData(investorForm);

      // Verify that Turnstile generated a token
      const turnstileToken = formData.get("cf-turnstile-response");

      if (!turnstileToken) {
        alert("Please complete the security verification.");
        return;
      }

      try {

        await fetch(
          "https://script.google.com/macros/s/AKfycbzpk5zwIY4vbAe9uE4yx2Je1MKU_Y0kkv_DxN01Zv4RVb3eWxfGz9hhefnOA07rsJUmj0/exec",
          {
            method: "POST",
            body: formData,
            mode: "no-cors"
          }
        );

        window.location.href =
          "/investors/investor-thankyou.html";

      } catch (error) {

        alert("Network error. Please try again.");
        console.error(error);

      }

    });

  }

});