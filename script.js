document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
  
    if (dateElement) {
      const date = new Date();
      dateElement.textContent = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  
    if (timeElement) {
      const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        timeElement.textContent = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      };
  
      updateTime();
      setInterval(updateTime, 60000);
    }
  });
  