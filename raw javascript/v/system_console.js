var devlog = {
    log: plog,
    err: perr,
    input: pinput,
    warning:pwarning,
    success: psuccess,
    scrolltotop: a_scoll_h,
    scrolltobottom: a_scoll_b,

}
function plog(...arr) {

    let dev_print = document.createElement("p");
    dev_print.className = "c_log";
    dev_print.innerHTML = arr.join("");
    document.getElementById(_m_console_as).appendChild(dev_print);
    a_scoll_b();
}

function pinput(...arr) {
    let dev_print = document.createElement("p");
    dev_print.className = "c_input";
    dev_print.innerHTML = arr.join("");
    document.getElementById(_m_console_as).appendChild(dev_print);
    a_scoll_b();
}
function psuccess(...arr) {

    let load_suss = document.createElement("p");
    load_suss.className = "c_success";
    load_suss.innerHTML = arr.join("");
    document.getElementById(_m_console_as).appendChild(load_suss);
    a_scoll_b();
}

function perr(...arr) {

    let load_suss = document.createElement("p");
    load_suss.className = "c_err";
    load_suss.innerHTML = '<img src="asset/cancel.png" width="10px" height="10px"></img>&nbsp;' + arr.join("");
  
   document.getElementById(_m_console_as).appendChild(load_suss);

    a_scoll_b();
}

function pwarning (...arr) {

    let load_suss = document.createElement("p");
    load_suss.className = "c_warning";
    load_suss.innerHTML = '<img src="asset/Warning.png" width="10px" height="10px"></img>&nbsp;' + arr.join("");
  
   document.getElementById(_m_console_as).appendChild(load_suss);

    a_scoll_b();
}
var a_scoll_b = () => {
    let mcon = document.getElementById(_m_console_as);
    mcon.scrollTop = mcon.scrollHeight - mcon.clientHeight;
}
var a_scoll_h = () => {
    let mcon = document.getElementById(_m_console_as);
    mcon.scrollTop = mcon.scrollHeight;
}