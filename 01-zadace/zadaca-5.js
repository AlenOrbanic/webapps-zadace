const cammelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => { // trazi sve rijeci u stringu
      return index === 0 ? word.toLowerCase() : word.toUpperCase(); // Index provjerava ako je prva riječ lower ili upper case
    }).replace(/\s+/g, ''); // Zamjenjuje razmak sa nicime i tako spaja rijeci
  }
  console.log(cammelCase("web apps vjezbe"));