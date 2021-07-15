const api_url = 'https://server.duinocoin.com/users/alongkorn20';

async function getdata() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {result,balance,username,miners,accepted,diff,hashrate} = data;
    document.getElementById('balance').textContent= result.balance.balance.toFixed(4);
    // document.getElementById('username').textContent = result.balance.username;
    document.getElementById('accepted').textContent= result.miners[0].accepted;
    document.getElementById('diff').textContent= result.miners[0].diff;
    document.getElementById('hashrate').textContent= result.miners[0].hashrate.toFixed(4);

   
         
}

getdata();

setInterval(getdata, 2000);

let status = document.getElementById("status");
			
            window.addEventListener('load', function(e) {
                if (navigator.onLine) {
                    status.innerHTML = "Network is online";
                    status.classList.add("success");
                } else {
                    status.innerHTML = "User is offline";
                    status.classList.remove("success");
                    status.classList.add("error");
                }
            }, false);
            
            window.addEventListener('online', function(e) {
                status.innerHTML = "Network back online";
                status.classList.remove("error");
                status.classList.add("success");
            }, false);
            
            window.addEventListener('offline', function(e) {
                status.innerHTML = "Network went offline";
                status.classList.remove("success");
                status.classList.add("error");
            }, false);