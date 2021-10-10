
const btn = document.querySelector('.search-btn');
console.log(btn);
const main = document.querySelector('.main');
console.log(main);

const generateBoxes = () => {
  const text = document.querySelector('.inpt');
  console.log(text);
  const tempArr = text.value.split('');
  let tempStr = '';
  for (let i = 0; i < text.value.length; i++) {
    console.log(text.value.length);
    tempStr = `
      ${tempStr}
      <div class="box">
         ${tempArr[i]}
      </div>
    `;
  }
  main.innerHTML = tempStr;
};

btn.addEventListener('click', generateBoxes);