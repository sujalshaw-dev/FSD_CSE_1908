//console.log("DOM");

const root=document.getElementById("root");
console.log(root);
const button=document.getElementById("btn");
console.log(button);

const h2=document.createElement("h2");
// const h3=document.createElement("h3");
// const img=document.createElement("img");
const loader=document.createElement("h2");
// loader.innerHTML="Loading...";

async function getdata(){
    try{
        loader.innerHTML="<h2> loading data...</h2>";
        root.appendChild(loader);
        const serverdata = await fetch('https://fakestoreapi.com/products');
    const jsondata = await serverdata.json();

    h2.innerHTML=`<h2 style="color:red">${jsondata[0].title}</h2>`;

    

     let table = `
            <table border="1">
                <tr>
                    <th>Image</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>

                ${jsondata.map((item) => `
                    <tr>
                        <td>
                            <img src="${item.image}" width="100">
                        </td>
                        <td>${item.id}</td>
                        <td>${item.title}</td>
                        <td>${item.price}</td>
                    </tr>
                `).join("")}

            </table>
        `;
        root.innerHTML += table;


    

    // h2.innerHTML="Welcome to DOM";  
    // root.appendChild(h2);
    // //alert("hello");
    // h3.innerHTML="ABES ENGINEERING COLLEGE";
    // root.appendChild(h3);

    // img.src=" bird-8788491_1280.jpg";
    

    // img.setAttribute("width","200px");
    // img.setAttribute("height","300px");
    // root.appendChild(img);

    // loader.innerHTML="Loading...";
    // root.appendChild(loader);

   
    } catch(e){
        console.log(e);
    }
    finally{
        root.removeChild(loader);
    }

}
button.addEventListener("click",getdata);
