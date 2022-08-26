import openMessage from "@src/app.js";

const API = process.env.API;

async function handleSubmit (e) {
    e.preventDefault();
    
    const formD = new FormData(this);
    const response = await fetch(API,{
        method: 'POST',
        body: formD,
        headers: {
            Accept: 'application/json'
        }
    });

    if (response.ok){
        this.reset();
        openMessage();

    }else {
        alert('error al enviar el mensaje');
    }
}


export default handleSubmit;


//TO DO:    loading screen