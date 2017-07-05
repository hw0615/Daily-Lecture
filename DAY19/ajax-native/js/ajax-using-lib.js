(function (global, $){
    'use strict';
    var list = document.querySelector('#user')
    var user_info = '';
    // Ajax 통신 사용
    $.get('/DB/user.json', function(data){
        $.each($.parse(data), function(key, value){
            if(key === 'results') {
                $.each(value, function(o){
                    user_info+=`
                        <li class="user_list">
                        <div class="getter">
                            <img src="${o.picture.large}" alt="user_pic">
                            <p class="info name">Name: ${o.name.last}</p>
                            <p class="info gender">Gender: ${o.gender}</p>
                            <p class="info location">Location: ${o.location.state}</p>
                            <p class="info email">E-mail: ${o.email}</p>
                        </div>
                        </li>
                    `
                });
            }
        });
    list.innerHTML = user_info;
    // console.log(user_info);
    });

})(window, window.FDS);