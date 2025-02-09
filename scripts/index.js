const now = new Date();
let iPhoneTime = now.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
});

const iPhoneTimeDiv1 = document.querySelector(".text-1");
const iPhoneTimeDiv2 = document.querySelector(".text-2");
const iPhoneTimeDiv3 = document.querySelector(".text-3");

iPhoneTime = iPhoneTime.split(" ")[0]

if(iPhoneTimeDiv1)
    iPhoneTimeDiv1.textContent = iPhoneTime

if(iPhoneTimeDiv2)
    iPhoneTimeDiv2.textContent = iPhoneTime

if(iPhoneTimeDiv3)
    iPhoneTimeDiv3.textContent = iPhoneTime


document.addEventListener("DOMContentLoaded", function () {
   // Get the root URL dynamically
   const rootPath = window.location.origin + "/";

   // Check if the current page is index.html
   if (window.location.pathname.includes("index.html")) {
       const ticketImage = document.querySelector(".overlap-group1 img");
       if (ticketImage) {
           ticketImage.addEventListener("click", function () {
               window.location.href = rootPath + "screens/activate-ticket.html";
           });
       }
   }

   // Check if the current page is activate-ticket.html
   if (window.location.pathname.includes("activate-ticket.html")) {

       const activateImage = document.querySelector(".image-11");
       if (activateImage) {
           activateImage.addEventListener("click", function () {
                // Store the activation time
                let activationTime = new Date().toLocaleTimeString([], {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                });
                localStorage.setItem("activationTime", activationTime);
               window.location.href = rootPath + "screens/activated-ticket-1.html";
           });
       }
   }

   // Check if the current page is activated-ticket-1.html
   if (window.location.pathname.includes("activated-ticket-1.html")) {
        const activatedTimeElement = document.querySelector(".activated-549-pm");
        const currentDateTimeOnQRCodeElement = document.querySelector(".x54955-pm-01282025")
        const storedTime = localStorage.getItem("activationTime");

        if (activatedTimeElement && storedTime) {
            activatedTimeElement.textContent = `Activated ${storedTime}`; // Update the displayed time
        }
        
        let now = new Date()
        if(currentDateTimeOnQRCodeElement){
            currentDateTimeOnQRCodeElement.textContent = now.toLocaleTimeString() + " " + `${(now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1)}/${now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()}/${now.getFullYear()}`;
        }

        // Select the image element
        const imageElement = document.querySelector(".image-3");

        if (imageElement) {
            // Define the two image sources
            const images = ["../img/image-3-1.png", "../img/image-3-2.png"];
            let index = 0;

            // Change image every second
            setInterval(() => {
                index = (index + 1) % images.length; // Toggle between 0 and 1
                imageElement.src = images[index];
            }, 2000); // 1000ms = 1 second
        }
    }
});
