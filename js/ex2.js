// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];


  const countryEl = document.querySelector("input");
  const suggestionsElement = document.getElementById("suggestions");
  

  const createSuggestionEl = country => {
    const element = document.createElement("div");
    element.classList.add("suggestion");
    element.textContent = country;
    
    element.addEventListener("click", e => {
      countryEl.value = e.target.textContent;
      suggestionsElement.innerHTML = "";
    });
    return element;
  };
  

  countryEl.addEventListener("input", () => {
    suggestionsElement.innerHTML = "";
    countryList.forEach(country => {
      if (country.startsWith(countryEl.value)) {
        suggestionsElement.appendChild(createSuggestionEl(country));
       }
    });
  });