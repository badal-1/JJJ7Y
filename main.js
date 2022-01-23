
function l(){
    a=document.getElementById("fg").value;
    if(document.getElementById('g').checked==true)
    {
        localStorage.setItem("name", a);
    window.location='main.html';
        
    }
    else{
    window.alert('Please ensure that you are not a robot!')
    console.log('Please ensure that you are not a robot');    
}
}
function f (){
window.open('https://in.search.yahoo.com/yhs/search;_ylt=AwrxgupZKuZhb1wAXi3nHgx.;_ylc=X1MDMjExNDcyMzU1OQRfcgMyBGZyA3locy1pbmZvc3BhY2UtMDIzBGZyMgNzYS1ncC1zZWFyY2gEZ3ByaWQDR1EwS2lxem9RcGkxRU54aUFLU3VEQQRuX3JzbHQDMARuX3N1Z2cDMTAEb3JpZ2luA2luLnNlYXJjaC55YWhvby5jb20EcG9zAzIEcHFzdHIDV2hhdCBpcyByZWNhBHBxc3RybAMxMgRxc3RybAMxNwRxdWVyeQN3aGF0JTIwaXMlMjByZWNhcHRjaGEEdF9zdG1wAzE2NDI0NzU0MjEEdXNlX2Nhc2UD?p=what+is+recaptcha&fr2=sa-gp-search&hspart=infospace&hsimp=yhs-023&vm=r&type=ud-c-in--s-p-kf5brwaj--exp-none--subid-none');
}
