  const submit = document.getElementById("submitBtn");
  submit.addEventListener("click", submitFeedback);
  
function submitFeedback() {
  const username = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const job = document.getElementById("job").value;
  const designation = document.getElementById("designation").value;
  const productType = document.getElementById("productType").value;
  const feedback = document.getElementById("feedbackText").value;



  if (
    !username ||
    !age ||
    !email ||
    !job ||
    !designation ||
    !productType ||
    !feedback
  ) {
    return alert("All fields are required");
  }
  document.getElementById("userName").innerHTML = username;
  document.getElementById("userAge").innerHTML = age;
  document.getElementById("userJob").innerHTML = job;
  document.getElementById("userDesignation").innerHTML = designation;
  document.getElementById("userProductChoice").innerHTML = productType;
  document.getElementById("userFeedback").innerHTML = feedback;
  document.getElementById("userInfo").style.display = "block";
  alert("Thank you for your valuable feedback");
}
