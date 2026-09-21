console.log("loginhandler");

const root = document.getElementById("container");
console.log(root);

const button = document.getElementById("btn");
console.log(button);

async function getdata() {
    const serverdata = await fetch('https://fakestoreapi.com/products');
    const jsondata = await serverdata.json();

    root.innerHTML = `
        <h2 style="color:red">${jsondata[0].title}</h2>
    `;
}

  //console.log(jsondata);
 // console.log(jsondata[0].title);
  // console.log(serverdata);

button.addEventListener("click",getdata);