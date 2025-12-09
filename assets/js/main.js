// const togglePassword = document.querySelector(".toggle-password");
// const passwordInput = document.querySelector("#password");

// togglePassword.addEventListener("click", () => {
//   const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//   passwordInput.setAttribute("type", type);
// });

// vrify OTP
const otpInputs = document.querySelectorAll(".otp");

otpInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    input.value = input.value.replace(/[^0-9]/g, "").slice(0, 1);

    if (input.value && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      otpInputs[index - 1].focus();
    }
  });

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").replace(/\D/g, "");

    data.split("").forEach((char, i) => {
      if (otpInputs[i]) {
        otpInputs[i].value = char;
      }
    });

    const lastFilled = Math.min(data.length, otpInputs.length) - 1;
    if (lastFilled >= 0) {
      otpInputs[lastFilled].focus();
    }
  });
});


// vrify OTP end
