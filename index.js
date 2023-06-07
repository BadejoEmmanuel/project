class Events {


    click() {
         var side_bar = document.querySelector('#side-bar');
        side_bar.style.width = '65%'
}
    close() {
        var side_bar = document.querySelector('#side-bar');
        if (side_bar.style.width == '65%')
            side_bar.style.width = '0%';
        
    }

    
}



callevent = new Events()



